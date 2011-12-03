---

layout: post
title: Lessons, A Niche, and Our Dev Community
author: Tim Morgan
authorurl: http://timmorgan.org

---

*...and, we're back.*

I feel bad that I started this blog, got people excited, then fizzled out for nearly two months*.* I'm sorry; I got a new day time job, and it took me a while to settle into a groove.

That, and I had some decisions to make with regards to my other software project. [OneBody](https://github.com/seven1m/onebody) is my five-year-old Ruby on Rails app and [commercial SaaS](http://beonebody.com) that attempted to solve* all the wrong problems.* Well, not really all wrong, but probably mostly wrong (more about that in a bit).

I built OneBody as a social network, perceived by many as a church-flavored Facebook competitor. Then, in ignorance, I started to morph OneBody into a sort of Church Management System. And by the time I had written thousands upon thousands of lines of code, I realized (a little too late) I was writing software no one needed and no one knew exactly how to use.

I'm not beating myself up too much here -- I wouldn't trade the experience for anything. I've learned about how to (and how not to) manage an open source project and how to run a business.

But the biggest lessons I'm still trying to put into words, and that's probably where [Church.IO](http://church.io) comes into play the most.

### Lessons

You see, in this blog, I speak as an addict. I am indeed one of the engineers/product designers of whom I have spoken most in my previous two posts. My hints at* Software Predetermination *are based completely in my own experience.

Perhaps it isn't fair to project my experience onto other projects I know little about. [Kingsley Allen commented](http://church.io/church-software-continuum#comment ) on my last post, saying:

> You describe a from-scratch ChMS creation process that I hope does not
> happen often in the real world today. A contemporary, mature software
> creation process is not bottom-up. You start with the problem you are
> trying to solve, design the solution to the problem and the experience
> (UX), and the rest falls into place to support it. The database is not
> the starting point, it is shaped by the solution.

Fair enough. I hope that's right.

Still yet, I want to explore the limitations imposed by building software on top of a relational database and what kind of (different) types of software one can build on a NoSQL or Document Database. *What sorts of issues, if any, does such a foundation eliminate, and what problems does it create?*

And, with that, I need to come full circle, back to my project OneBody. For all intents and purposes, I have [shut the project down](http://groups.google.com/group/onebodyapp/browse_thread/thread/a53db29a1dd31d9c ) in order to focus on the sorts of software I've talked about in this blog. Sort of...

### A Niche

I've realized also that there is a small part of OneBody that I don't want to completely throw away and may actually be useful to thousands of churches across the world -- an online directory. Not a replacement for Facebook, but something to work alongside it and provide an umbrella for any church or close-knit community to search and connect with one another outside of the noisy and busy world of Facebook.

So, I've created [Church.IO Profiles](https://github.com/churchio/profiles ) in order to preserve that one good part of OneBody. This new project aims to be a very small Rails 3 app that uses Facebook for login and allows fellow church members to see and connect with one another easily.

*Profiles* may not be necessary at all if Facebook just had better and easier-to-use Groups functionality. Until it does, I hope to fill that niche with a church bent.

### Our Dev Community

Further, I feel like the OneBody project had a community of developers who wanted to jump in and make the software better, but couldn't figure out where to start. *Profiles* is a continuation of this community, with fresh code.

I want to nurture this community. Down the road, I'm hoping this same community, bigger and stronger, can help build the engagement software I really want us to build.

...

So, that's it for now. My plan is to continue to discuss church software here while promoting community around Church.IO projects, namely [Profiles](https://github.com/churchio/profiles) at the moment.

As always, your thoughts are welcome here, and on Twitter [@seven1m](http://twitter.com/seven1m). I've also created an IRC chat room on freenode called #church.io ([webchat here](http://webchat.freenode.net/?channels=church.io&amp;uio=d4 )). I should be there most days if you want to chat.
