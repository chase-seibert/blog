---
title: Getting Started Estimating with Story Points
tags: manager process scrum workshop
toc: true
header:
  overlay_image: /images/header-story-points.jpg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "How do you bootstrap a team to use story points?"
---

I’ve previously written about [why estimating work in story points versus hours can be useful][1]. Assuming you’re convinced, how do you actually begin? My advice is to first educate the team on the principles involved, and then just dive in with a basic grooming session. Expect growing pains! If you have one team member who does have experience with story points, have them lead the sessions. Otherwise, you may want to borrow someone, if possible.

# Getting Started Group Exercise

The idea with these [hands-on exercises][2] is to engrain the basic principles of wisdom of crowds, relative estimation and risk assessment. But they can also serve to get the team excited and motivated to try something new. Try these as the first part of a team off-site agenda.

## Wisdom of Crowds: Cow Weight (10 min)

First, put the team members in random order on a whiteboard. Then, ask the group to **silently** estimate the weight (in pounds) of Penelope, the cow in this image:

![][image-1]

It’s important that the team members not influence each other. No group discussion or clarifying questions! Have everyone record their estimates on post-it notes.

Now, going one-by-one in the random order on the whiteboard, ask each person  for their estimate, and keep a running tally of the current average of all responses.

It turns out the correct weight of the cow in that photograph is 1,335 pounds. How close was the overall estimate of the group? Did the estimate get more or less accurate as you added additional people?

_Note: this is from a classic [Planet Money podcast episode][3]. Interesting fact: it turns out that if you get enough people together, their collective estimate will be on par with experts who estimate cows at auction for a living! Both groups have about a 5% margin of error. _

## Relative Estimation: Countries (10 minutes)

Start by asking the team to estimate the square mile area of the following countries. Time how long it takes the team to come to consensus.

- Mexico
- France
- China

Record the answers and time, and move into the second part. Now, ask the team to estimate relative to the United States - i.e. your unit should be “multiples of the United States”. Remember to start the timer again!

- Canada
- Spain
- Russia

Given that the actual area of the Unites States is 3.7m square miles, calculate what their relative estimates equate to in square miles.

Now, compare the results for both parts with the [actual square miles areas of these countries][4]. As a group, calculate how far off the two sets of estimates were. Are the relative estimates more or less accurate? Which version took more time?

## Risk Assessment: Commute Times (10 min)

For each person on the team, ask them to think about how long their commute in to the office typically takes. Have them write their initial estimates down on post-its. Now, have them think about what risk factors potentially increase their commute times. Maybe there is traffic, or the bus is late, or they miss a train, etc. What if you have to change your method of commute all together some of the days?

Say you commute in to the office 230 days a year. How much would you need to increase your estimate by in order to make sure that your commute comes in under the estimate 95% of the time? That would mean you could exceed your estimate less than 10 days a year.

# Putting Principles into Practice

Theoretical exercises are all fun and good, but how do you actually run your first grooming meeting where you’re using story points?

_Note: Grooming is different from planning. Grooming is about estimating stories, planning is about deciding which stories to commit to for the sprint. _

## Grooming Meeting

The grooming meeting is about creating fully estimated user stories. You should plan to have at least one hour to groom two weeks worth of work. In order for the meeting to be successful, you should have all of the following at hand already for every user story:

- Written details, with acceptance criteria
- For UI changes, a visual mock, could be just a wireframe
- A product owner present to answer questions

Any engineer who could be assigned a task for one of the stories should be present. Often this is the entire team.

_Note: if this is the very first time your team has tried to estimate with points, first select a story that was previously completed which is of medium size; something one engineer can complete in no more than a week. Then arbitrarily call that a 3 point story, to bootstrap the process._

Start by taking a new user story off the top of the backlog. For each user story:

1. Have the product owner read the user story as written. The team should ask clarifying questions.
2. Write down the clarifications in the user story itself.
3. Pay special attention to documenting what is in and out of scope, and what unknowns or risks exist.
4. When people have asked all their clarifying questions, ask the team to *silently* estimate how “hard” this story is relative to other stories you have completed recently. When everyone feels ready to estimate, count to three, and have everyone put up a number of fingers representing their estimate.
5. If the team is at consensus on a story point value, record that and move on to the next story. If it’s close, you can also just agree on a conservative compromise.
6. If there is no consensus, discuss why people’s estimates are different, and go to step 2.

The question “how HARD is this?” should prompt the team to think about not just the known work involved, but the unknown. The story point estimate should be a combination of complexity, uncertainty and risk.

I suggest using Fibonacci numbers as your options for valid point estimates. This acknowledges the inherent margin of error in estimates, and also helps converge group estimates more quickly.

# Additional Improvements

As the team gets experience with story points, there are some additional concepts you can layer in.

## Definition of Done

One common learning for a team is that even with a well defined user story, there can be misunderstandings about what it means to “finish” a story during a sprint. Does it have to be code reviewed and merged? Does it need to be live in production? Does the PM or designer have to sign off on it for it to be “done”?

I would advise teams to start with a definition that includes being merged and in production. Otherwise, you risk the phenomenon of stories being “almost done”, but really requiring a lot more work that is only discovered when you do go into production.

## Checklists

If there are recurring risks or details that keep causing user stories to not be fully completed during a sprint, consider creating a user story checklist for the team to reference during grooming.

Your checklist might include items like:

- Is there a database migration involved? Remember - those have a dependency on another team to approve.
- If a PM needs to sign off, maybe it needs to be deployed to staging/production with some buffer time so the PM can actually look at it.
- Team often forget to schedule time to update technical documentation and written test plans.

## Breaking up Stories

It’s common for teams to discover, over time, that stories with larger point estimates like 8+ are the most frequently at risk of not being completed during a sprint. A typical solution is to have a cap on how large a single story can be, which forces the team to break it into smaller pieces during grooming.

# Conclusion

Hopefully this gives you some idea where to start if your team has never put story points into practice before!


[1]:	https://chase-seibert.github.io/blog/2016/05/13/agile-points-vs-hours.html
[2]:	https://medium.com/tech-travelstart/running-an-estimation-workshop-a240e7cf6bf6
[3]:	https://www.npr.org/sections/money/2015/08/07/429720443/17-205-people-guessed-the-weight-of-a-cow-heres-how-they-did
[4]:	https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area

[image-1]:	https://media.npr.org/assets/img/2015/07/17/_aph4800-small-2-438fa2f8a441de68849dd8e12b69bb4a53fcc214-s800-c85.jpg
