server:
	bundle exec jekyll serve --incremental --watch --drafts
tags:
	egrep -r --color -h "tags:\ (.+)" _posts/ |xargs -n1 |sort |uniq -c |sort
