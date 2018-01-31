---
title: Product Management 101
toc: true
tags: product-management
---

I've worked with dozens of product managers, but always in the context of a small
company with teams working in an Agile model. My take on what a product manager
should be is likely relative to that context. I'm also an engineer, so this
is mostly from that point of view.

A product manager is the owner of a product from the companies perspective, but
is not the leader of the team from the team's perspective.

## Basic Hygiene

There is probably a larger set of basics that a product manager must fulfill.
But from the perspective of the engineering team, these are the most important.

1. Be an expert in the problem domain, the business, and explain that context to
team in a way they can understand.
2. Prioritize work into an ordered backlog. Be aggressive about defining the smallest
scope so that the team can ship quickly.
3. Write detailed specifications and user stories.
4. Be present at team meetings and stand ups consistently religiously.

## Manage Relationships

From the execution team's perspective, the product manager is the embodiment of
not only the customer, but also the rest of the company. They have to build
excellent relationships and communicate well with customers, internal stakeholders
(often higher up) and the team themselves.

The product manager is likely to have the best people skills of anyone on the team.
The best product managers I have worked with are also the champion of team health.
They should have regular 1:1s with everyone on the team.

The product manager's has a special relationship with both the designer and the
engineering lead. They should have weekly 1:1 syncs with both of them, and a regular
product/design/engineering lead sync where they talk about all the features that
are in development and coming up.

## Next Level

The very best product managers I have worked with have some level of technical
understanding of the product the team is developing. This should be enough to
sketch out how the product works at a high level. Without this, a mismatch can
creep in between how the product actually works, and the mental model of the
product manager. Over time, that will result in the product working in unexpected
ways. In the worst case, this [mental model mismatch](https://chase-seibert.github.io/blog/2016/04/15/mental-models.html)
can manifest in a poor user experience.

Both the product manager and the engineering manager have a responsibility to
protect team from thrash. This is the [shit umbrella](https://roadmunk.com/blog/shit-umbrella/)
role - give the team the space they need to do the work.

http://managementpatterns.blogspot.com/2013/01/pattern-shit-umbrella.html

On most teams I've worked on, we did not have a dedicated QA person. In that
case, the product manager typically takes the role of identifying and
documenting production bugs. For that, you need to know how to write a great
[bug report](/blog/2016/02/26/QA-101-How-to-write-a-bug-report.html) with a
reproducible. That's not to say that QA is the sole responsibility of the
product manager. But, they are the last line of defense.

## Third Rails

For engineers, there are handful of surefire ways to burn good will with the
team.

### Make your own estimates

In a meeting with stakeholders, you may feel pressured to say that something will
be easy, should not take too long, or otherwise commit informally (or formally)
to an estimate for a deliverable. This is always a mistake. In the best case,
your estimate is correct, but the team is unhappy that they got signed up for a
date without consultation. In the vast majority of cases, your estimate is
dangerously off base, and almost always too low.

### Make you own technical decisions

The engineering team lead should ultimately own all technical decisions related
to the product. Of course, you should be collaboratively involved in the
decision. But, it's never OK to make a technical decision without the team
involved. In particular, you want to watch out for well meaning non-technical
stakeholders trying to dictate technical solutions. In that case, you want to
bring the conversation back to requirements, and let the team come up with
the solution.

### Lack of alignment

This is the number one silent killer of projects. The product manager must be
relentless about continuously re-aligning with the company leadership on goals
and progress. They are often the only touch point for the team in that respect.

## References
- [What It Takes to Become a Great Product Manager](https://hbr.org/2017/12/what-it-takes-to-become-a-great-product-manager)
- [What Makes a Great Product Manager](https://hackernoon.com/what-makes-a-great-product-manager-3c1d03b90356)
- [Good Product Manager/Bad Product Manager](https://a16z.files.wordpress.com/2014/08/good-product-manager.pdf)
