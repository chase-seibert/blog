---
title: Bayesian Spam Filtering
---

I officially declared phase one of my personal war on spam five months ago, when I started using procmail to do some server side email parsing. My original method was just a rip-off of a script I found online. The basic algorithm was as follows:

If you’re whitelisted, let the mail through.
If you’re blacklisted, delete the mail.
If I haven’t heard from you before, email you to ask if you should be whitelisted.

I have used this more or less without incident for a few months. Recently, I decided that it was not enough to just let all whitelisted emails through into my default inbox. Instead, I’ve rewritten the entire filter to sort whitelisted email into folders based on either sender or receives (for example, a mail list a belong to). I also stopped sending unsolicited emails to people to ask them if they wanted to be whitelisted. It just got to be too much damn work.

The result is what I’m calling Procmail Bladderwort, my own first line of spam defense. As of now, I’m manually adding new non-spam senders to my white-lists. This, however, is soon to change in phase two: Bayesian content filtering.

The basic premise of Bayesian filtering is to collect statistical word and word-pair information extracted from email you actually receive. Using Bayer’s (I) formula, it is possible to classify an unknown mail as either spam or non-spam with a high degree of accuracy (less than 5 in 1000 errors). There is a great article on it here.
