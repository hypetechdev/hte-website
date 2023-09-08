---
title: "Programming is full of acronyms"
pubDate: "2015-04-09"
author: "marsicdev"
summary: SOLID, KISS, DRY, STUPID
categories: [programming]
---

Programming is full of acronyms

Nobody likes to hear that their code is stupid. It is offending. Don’t say it. But honestly: Most of the code being written around the globe is an unmaintainable, unreusable mess.

**D**on’t **R**epeat **Y**ourself and stay **DRY**

**KISS** is teling you to **K**eep **I**t **S**imple, **S**tupid!

What makes code **STUPID**?

-   **S**ingleton
-   **T**ight coupling
-   **U**ntestability
-   **P**remature Optimization
-   **I**ndescriptive Naming
-   **D**uplication

SOLID deciphers to:

-   **S**ingle responsibility principle
-   **O**pen/closed principle
-   **L**iskov substitution principle
-   **I**nterface segregation principle
-   **D**ependency inversion principle

**GRASP** stands for **G**eneral **R**esponsibility **A**ssignment **S**oftware **P**rinciples, which are the following:

-   Information Expert
-   Creator
-   Controller
-   Low Coupling
-   High Cohesion
-   Polymorphism
-   Pure Fabrication
-   Indirection
-   Protected Variations

### Some lessons and conclusions

Unit testing is important. If you don’t test your code, you are bound to ship broken code. But still most people don’t properly cover their code with tests.
Whenever you don’t write unit tests because you “don’t have time” the real cause probably is that your code is bad. If your code is good you can test it in no time. Only with bad code unit testing becomes a burden.

Name your classes, methods, variables properly, so that people actually know what you mean. I’m not arguing about variables like $i, those are short, but still self-explanatory. The problem is functions like the ones named above. Functions like strpbrk or variables like $yysstk may be obvious the author, but also only to the author.

Programmers are lazy animals, so it would be only natural to type as little code as possible. Still duplication prevails. The most common reason for duplication is following the second _STUPID_ principle: _Tight Coupling_. If your code is tightly coupled, you just can’t reuse it. And here comes your duplication.

_Source:_ [Don't be STUPID: GRASP SOLID](http://nikic.github.io/2011/12/27/Dont-be-STUPID-GRASP-SOLID.html)
