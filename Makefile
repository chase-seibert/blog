SHELL := /bin/sh

RUBY_VERSION ?= 3.1.2
CHRUBY_SH ?= $(shell brew --prefix chruby 2>/dev/null)/share/chruby/chruby.sh
RUBY_ENV = . "$(CHRUBY_SH)" && chruby "ruby-$(RUBY_VERSION)"
SITE_URL ?= https://chase-seibert.github.io/blog/
WORKFLOW ?= jekyll-4-gh-pages.yml

.PHONY: setup build check server github deploy-status verify-deploy tags words diff draft

setup:
	$(RUBY_ENV) && bundle install

build:
	$(RUBY_ENV) && JEKYLL_ENV=production bundle exec jekyll build

check: build
	test -s _site/index.html
	grep -q '<title>Chase Seibert Blog</title>' _site/index.html

server:
	$(RUBY_ENV) && bundle exec jekyll serve --config _config.yml,_config_dev.yml --incremental --watch --drafts

github:
	$(RUBY_ENV) && bundle exec jekyll serve --incremental --watch --drafts

deploy-status:
	gh run list --workflow "$(WORKFLOW)" --branch master --limit 5

verify-deploy:
	@remote_sha=$$(git ls-remote origin refs/heads/master | awk '{print $$1}'); \
	run_sha=$$(gh run list --workflow "$(WORKFLOW)" --branch master --limit 1 --json headSha --jq '.[0].headSha'); \
	test -n "$$remote_sha"; \
	test "$$remote_sha" = "$$run_sha" || { echo "Latest workflow run is not for origin/master"; exit 1; }; \
	gh run view --exit-status $$(gh run list --workflow "$(WORKFLOW)" --branch master --limit 1 --json databaseId --jq '.[0].databaseId'); \
	test "$$(gh api repos/chase-seibert/blog/pages --jq .status)" = built; \
	curl --fail --silent --show-error --location "$(SITE_URL)" | grep -q '<title>Chase Seibert Blog</title>'; \
	echo "Verified successful deployment of $$remote_sha at $(SITE_URL)"
tags:
	egrep -r --color -h "tags:\ (.+)" _posts/*.md |xargs -n1 |sort |uniq -c |sort
words:
	find _posts/ |sort |xargs wc -w
diff:
	git diff -w --word-diff
draft:
	@echo "Enter a slug for your new post and hit [ENTER]: "
	@read slug; cp post_template.md _drafts/$$slug.md
	git status
