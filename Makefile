server:
	bundle exec jekyll serve --incremental --watch --drafts
tags:
	egrep -r --color -h "tags:\ (.+)" _posts/ |xargs -n1 |sort |uniq -c |sort
words:
	find _posts/ |sort |xargs wc -w
diff:
	git diff -w --word-diff
draft:
	@echo "Enter a slug for your new post and hit [ENTER]: "
	@read slug; cp post_template.md _drafts/$$slug.md
	git status
