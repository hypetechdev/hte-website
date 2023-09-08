---
title: "Code commenting and modeling"
pubDate: "2015-01-09"
author: "marsicdev"
summary: Don't try to model everything! You need to step back and let the code speak for itself.
categories: [programming]
---

Software engineering is hard to get right. One person's pretty data model looks like metadata-addiction to another person.

I think we can learn some lessons from code-commenting: don't try to model everything! You need to step back and let the code speak for itself.

For instance, as just one random illustrative example, you might need to return 2 values from a function in Java (a language with no direct support for multiple return values). Should you model it as a MyFunctionCallResult class with named ValueOne and ValueTwo fields (presumably with actual names appropriate to the problem at hand)? Or should you just return a 2-element array (possibly of mixed types) and have the caller unpack it?

I think the general answer to this is: when in doubt, don't model it. Just get the code written, make forward progress. Don't let yourself get bogged down with the details of modeling a helper class that you're creating for documentation purposes.

<!-- _Source:_ [Steve Yegge - Portrait of n00b](http://steve-yegge.blogspot.com.br/2008/02/portrait-of-n00b.html) -->
