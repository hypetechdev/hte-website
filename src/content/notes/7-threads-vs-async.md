---
title: "Threads, Sync, Async"
pubDate: "2015-04-03"
author: "marsicdev"
summary: Thoughts collection about these important terms
categories: [programming]
---

Subject title is to general so the thoughts following will be as well. Issues is to general to have a real answer.

It is very difficult to write code that is thread safe. With asyncronous code you know exactly where the code will shift from one task to the next and race conditions are much therefore much harder to come by.

The I/O part of threaded code is relatively easy but managing the shared state between threads (using locks/queues/etc) without race conditions is what makes it tricky. Using an async model means you have less going on at the same time so races are easily avoided.

In the general case, an asynchronous call does not necessarily create a new thread. That's one way to implement it, with a pre-existing thread pool or external process being other ways. It depends heavily on language, object model (if any), and run time environment.

Asynchronous just means the calling thread doesn't sit and wait for the response, nor does the asynchronous activity happen in the calling thread.

Threads consume a fair amount of data since each thread needs to have its own stack; with async code all the code shares the same stack and the stack is kept small due to continuously unwinding the stack between tasks.

Threads are OS structures and are therefore more memory for the platform to support. There is no such problem with asynchronous tasks.

Threads are not necessary for asynchronous programming.

You can start up multiple asynchronous operations and yet only have one thread involved in those operations - no threads are blocked on them.

When you invoke something synchronously, it means that the thread that initiated that operation will wait for the task to finish before continuing. Asynchronous means that it will not wait.

If the asynchronous operation requires the CPU to do work, then generally that operation has to happen in another thread in order for it to be truly asynchronous. Even then, it will really only be asynchronous if there is more than one execution unit.
