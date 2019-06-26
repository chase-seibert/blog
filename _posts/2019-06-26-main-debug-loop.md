---
title: The Programmer Mindset - Main Debug Loop
tags: reading-list process testing
toc: true
header:
  overlay_image: /images/header_flight.jpg
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Validating ONLY with tests is basically flying the plane on instrumentation, versus being able to look out the windshield. Flying visually and by muscle-memory is both more efficient and safer, in conjunction with instrumentation. You’re much less likely to hit a mountain by mistake."
---

When you’ve been coding for more than twenty years, it can be difficult to recapture [beginner’s mind](https://en.wikipedia.org/wiki/Shoshin), and explain how to think like a programmer to someone who is new to it. I remember an incident in college, when I had been coding for a comparatively short time, that crystalized in my mind the thought process behind writing code — what you might call the programmer philosophy. I was helping a friend complete a Computer Science 101 assignment. They were completely new to coding.

They had written an entire solution, on paper, beginning to end — maybe 100 lines of code. THEN they typed it all in to a text editor, and ran it. What do you think happened? They got about a thousand syntax errors. This is when they came to me, feeling like they had hit a brick wall. I had been sitting beside them in the same class — but critically, I had been coding for a while already. I had already internalized the basic thought process of writing code, without ever having to articulate it. Our professor had failed to impart that thought process.

# The Main Debug Loop

What I had to then explain to my friend is the thought process that I’m now going to call the “Main Debug Loop”. I believe that this is a natural mindset that develops in all programmers — assuming they successfully learn to code. It involves breaking down the problem into very small pieces. Small enough such that you’re writing 1-3 lines of code at a time. Every time you write one of these small chunks, you run the program. Usually it doesn’t work, and you try again. Slowly, you accrete code that you’ve convinced yourself works. You build up the whole solution iteratively.

The keys are two fold: you’re building incrementally, and you’re validating as you go. As you gain experience, you work on more and more complex systems. But this mindset scales to problems of any complexity — you just have to break them down more.

This is the main debug loop. Write code, run code. Running the code is the validation.

# Validation Happens in Layers

What exactly is validation? Here is an example of what I’ll call in-application validation. In web development, you write a few lines of code, save the file, and refresh you browser. Then, you interact with the page/application manually to see if what you just changed works. For speed, you’re probably only testing the happy path, or the one edge case that you’re currently implementing. For any other kind of development, the process in analogous, but the specifics look different.

Test validation does not happen in the application. Instead, you run a small set of synthetic assertions against the code you’ve just written. This a best-practice called [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development). TDD is used in conjunction with in-application validation. In practice (and contrary to strict TDD), my observation has been that developers work in short loops, validating in-application, and then quickly fast-follow with unit-test coverage.

Another layer of validation is automated integration testing, using either a tool like Selenium for application layer validation, or Postman for API layer validation. You may also have exhaustive manual testing, potentially by dedicated QA engineers. Finally, you can use feature gating to validate in production. All of these layers of validation work on concert to ensure quality. When you’re writing the code iteratively, you typically utilize in-application validation and/or or test validation, because they are so much faster.

# Optimizing Loop Time

The main debug loop can be something that you execute hundreds of times an hour. Thinking and typing code are the natural bottlenecks — you’re a lot slower than the computer, after all. In an ideal world, running the code to validate what you just wrote is instantaneous. For the vast majority of my coding career, running small chunks of code averaged maybe 5 seconds. The overhead is due to latency in the file system registering that files have been updated, the runtime loading the change, and your own “human time” — interacting with the newly updated application to run the change and see the results.

The computer’s portion of the loop time is variable based on the language, the framework and the application itself. Scripting languages don’t have to be compiled before they are run. Some types of coding naturally involve more or less human interaction. For example, running a console command tends to involve less human latency than refreshing a web app. But because the main debug loop time is so universally critical to the developer workflow, the language and framework authors have a large incentive to optimize it. The developers likewise are incentivized to optimize their own application for it.

# Why Fast Loops are Better

To my mind, slow loop time recalls some of the worst debugging nightmares of my career, what I call “flying blind”. The worst cases have two properties: they are not reliably reproducible, and each attempt at reproduction takes a long time. For debugging, non-reproducibility by itself can lead to unacceptably slow loop time. If you have a deploy to production to see if it worked, or you have to run the code many times to see if it fails once, that’s a worst case slow loop time scenario.

It’s easy to see how this extreme scenario can lead to slow development, and low quality output.
In contrast, some of my most positive memories of being “in the flow” invoke the sensation of being in constant, fluid dialog with the computer. Like a back-and-forth conversation, you’re arriving at your conclusion collaboratively. You’re validating the code nearly as fast as you can think it and type it. For me, even a 10 second latency in being able to run and validate a change can break that flow.

Still, the assertion that shorter loops times are better rests on an unprovable assumption — that running more cycles for a given scope of work will result in higher output per time period, and/or higher quality. I believe this is true, but I concede that (no matter how personally counter-intuitive) it’s possible that over-all throughput and quality could be as high or higher with slow loop times.

# Are Short Loop Times Universal?

Loop times are not guaranteed to be short — in fact, technical entropy will exert constant pressure to increase loop times. Significant developer time needs to be expended to make sure that the test suite continues to run quickly, the application reloads code quickly, and that the UX itself (on user facing applications) affords developers the ability to quickly reload and validate.

Given that brand-new projects tend to inherit short loop time on small codebases from their parent language and framework, it’s no surprise that in my career-to-date at small startups, we tended to have short loop time. We had to expend effort to keep them short, but we were generally able to do so.

However, I have seen that in larger code bases, with larger teams, short loop time is not a given. Perhaps it is too costly to maintain short loop time as the complexity scales? What ever the cause, once the loop time hits the point of breaking flow, developers will naturally seek shorter loops, such as switching to test validation. In an extreme case, you may not validate in-application at all, and trust that your test are validating correctness.

To me, the retreat to test validation seems super dangerous — but the developers will do what they need to do to keep loop times short, even if they are not validating fully.

# Some Integrated Testing is Necessary

Without running code in a fully integrated environment at some point before shipping it, you’re running a greatly elevated risk of shipping bugs. This could look like validating in-application as you write the code, exhaustive manual testing or gated validation in production. Validating only in a synthetic scenario simply does not afford the same confidence as running everything integrated together. How many times have separately developed components not worked properly once they are eventually integrated? This happens even if the interfaces match perfectly — the composed behavior is very often still wrong.

No QA person on the planet would condone shipping something to production without running it the same way a user will experience it — integrated together.


> Validating ONLY with tests is basically flying the plane on instrumentation, versus being able to look out the windshield. Flying visually and by muscle-memory is both more efficient and safer, in conjunction with instrumentation. You’re much less likely to hit a mountain by mistake.
# Does Complexity Lead to Test Validation Loops?

Keeping loop time short is hard when you have complex systems, and large codebases. Hot reloading may very well take longer than 10 seconds by itself, in order to load and recompile a large codebase. Scripting languages have an advantage here, but have their own non-orthogonal costs. Even scripting languages may have unacceptable latency if the framework requires transpiling.

Service oriented architecture presents unique advantages and challenges for the main debug loop. On one hand, you are working on individual, smaller codebase most of the time. Hot reload times are shorter. On the other hand, running your application composed with services and external data-stores gets both very complicated and also takes a ton of compute resources. Before long, running it locally is not even possible.

In practice, I have noticed a correlation between large codebases, service architecture, and a retreat to test validation as the primary debug loop.

# Staging Environments to the Rescue

A staging environment is like a miniature version of production. It should have all the same services set up, as well as the same basic network architecture. It’s just scaled down significantly. Typically it has the exact same data-stores and schema, but totally different data-sets. Staging is totally isolated from production; you can’t talk to production versions of any services, and you can’t talk to production data-stores.

Depending on the sensitivity of the product domain, you may be able to sync production data down to staging, either in whole or sanitized. In many domains, that is not possible from a security perspective, so you create fake test data, with the entire engineering team using the same test data-sets and data-stores. You begin to have your “favorite” test users and records, and can bring them up in-application quickly.

Staging environments have a lot of uses - but how can they help keep developers in the in-application validation flow? Intelligent service routing can help solve the local machine resource problem, AND alleviate the burden of maintaining a local data set. The downside is that it requires that developers have an active internet connection to staging.

The premise is that you hook your development service up to staging, and route your individual in-application validation requests through the normal staging service graph — EXCEPT for one or two services that you’re currently developing. The staging network topology will pieces of the service call graph from the staging environment in the cloud back to your development box, likely over a VPN. It sounds really complicated, but this dynamic routing is a standard feature of service aware routing mesh frameworks like [linkerd](https://linkerd.io/).

# Conclusion

The switch from in-application validation to test validation in the primary debug loop lead to lower quality, slower velocity, and to context switching.


![](https://imgs.xkcd.com/comics/compiling.png)


System entropy towards test validation takes a LOT of work to counter. Maintaining short debug loops quickly becomes a full time job for someone, or a team of someones. But, even with as few as 50 engineers, organizations I’ve been in have opted to pay that cost. It’s possible (though I’m not yet convinced) that the cost grows exponentially as you scale up in terms of people and codebase size. In that case, I would expect companies at large scale to near-universally live with slow debug cycles and the primacy of test validation.
