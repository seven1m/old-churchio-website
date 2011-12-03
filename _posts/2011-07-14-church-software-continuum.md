---

layout: post
title: Church Software Continuum
author: Tim Morgan
authorurl: http://timmorgan.org

---

In speaking with [Christian software engineers](http://news.ycombinator.com/item?id=2746426) on Hacker News and last week's blog post about [better church software](http://church.io/better-church-software), it's clear that the term "church software" is nebulous at best.

I need to back up and actually define what I mean by "church software." At this point, the three main categories I'm interested in are: *Church Management*, *Social Networking*, and *Engagement*. (I'm ignoring worship planning, bible study, and several other pieces that I tend to see as separate tools that fall outside this particular continuum.)

Here they are in a crude attempt at juxtaposition:

<div class="big-img">
  <img src="/images/church_software_venn.png" alt="Church Software Continuum Venn Diagram"/>
</div>

This use of a Venn diagram isn't perfect, and I've likely forgotten some features. The point isn't necessarily the exact features, but rather the big picture, and how the everything fits together. Also, I understand that most church software doesn't fall in any single category above, but rather starts out in one and then purposely begins to creep into the other realms one feature at at time.

Let's survey the landscape...

**Church Management** is served by *hundreds* of available tools, ranging from free to, well, *expensive*. Capterra has <a href="http://www.capterra.com/church-management-software?srchid=586572&amp;pos=1">184 products</a> listed in this category, at the time of this writing. Yikes!

It seems this is the default category that comes to many people's minds when I say "church software."

**Social Networking** is already dominated by Facebook, Twitter, and regular ol' email. Google+ is becoming another contender. Then there's The City, The Table, etc., creating private social networking opportunities for churchgoers.

There's an abundance of social networking options for people, all competing for attention. Churches have some tough decisions to make about how to address this growing, confusing realm and how best to serve their members.

Then we come to **Engagement**. As it turns out, this is not a popular term for church software to identify with. A Google search for "church engagement" returns no tools or products. I tried lots of other phrases, such as "connect with churchgoers" and "get more church members" and "church growth tools" -- each gives me virtually nothing but books and blogs and opinions -- few, if any, tools.

Why is that? Well, it appears that engagement is something that gets lumped in with the other two categories of church software.

Sure, that makes sense. I mean, the chief purpose of a church is to draw people to Christ, improve people's lives, make disciples, and to survive and grow as an organization. It makes sense that *church software* should aid with all those things as well.

The problem I have with that, however, is the order in which those needs are met. Let me explain...

With a ChMS, engineers start with a relational database with empty columns and rows. Before the engineer can think about tooling the software to address engagement, he must first build up the infrastructure to *enter data*. But by the time the software is ready to get a single engagement feature, the foundation has already been set. The starting point establishes the *tone* and the *purpose* of the software.

I'll call this sort of thing *Software Predetermination* and will go into more detail in a future blog post. For now, I'll just say that most current ChMS is built for management first, engagement second.

As for Social Networking, things are more complicated. This paragraph is the hardest for me to write, because I desperately want products like The Table to succeed where my OSS project didn't. In all honesty though, I think any tool that requires the bulk of your members&nbsp;to commit to a church-specific social network is up for a major battle in the minds of regular people.

While The Table and The City aren't necessarily competing with established networks like Facebook and Twitter for *dominance*, they are competing for cooperative *mindshare*. And for there to be engagement in such an environment, people have to regularly use these alternate social networks -- **the engagement piece, if embedded within and dependent on a closed social network, is limited by the adoption of said network.**

I've concluded, at least within my budget and time constraints, that building a tool that integrates with existing social networks and leverages their social graph is key.

As for engagement being a *separate* category of church software, it's one lonely green circle, I admit. But since I want to create a tool that **solves the right problem**, making engagement separate forces me to:

1. Think of engagement *first*.
2. Build with the proper foundation.
3. Integrate with existing social networking tools, rather than create another one.

I suppose it's a matter of principle (mine) that I have deemed three separate categories of church software, because *I want it to be that way* -- not necessarily because it *is* that way. To me, engaging members, visitors, and reaching out to the community is the reason I want to write church software.

I'm stopping here; these are my thoughts for today. Let me know yours. I hope that by defining the terms and surveying the marketplace, we'll be starting from the same place in terms of what sort of ideas I intend to share over the next several weeks.

*Until next time...*
