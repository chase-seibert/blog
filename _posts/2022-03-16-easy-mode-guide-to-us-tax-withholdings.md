---
title: "The Software Engineers Easy Mode Guide to US Tax Withholdings"
tags: personal-finance 
toc: true
header:
  overlay_image: /images/header-tax-withholdings.png
  overlay_color: "#000"
  overlay_filter: "0.5"
excerpt: "Set withholdings to zero, and pay up to an extra 15% of your bonus and RSU grant in the form of quarterly estimated taxes"
---

For years I've struggled with trying to minimize the difference between taxes withheld and taxes owed. It's quite complex, with salary, bonus, and RSUs changing every year. That is, until I had a breakthrough. The year after I made quarterly estimated payments for the first time, it finally clicked.

*Note: this blog post is only talking about your federal tax liability, not state taxes, social security, or medicare. That's because the federal taxes are the largest chunk out of your paycheck, and are generally the only piece you can or need to plan for.*

# Definitions and Background

Somehow, I had muddled through for about 20 years, filing taxes and not really understanding what was going on. That's possible for most people, thanks to the magic of automatic withholding. All the same, it's better to actually understand some of the basic terms and concepts. Here is what I learned, slowly. 

- **Withholdings** are deductions from your paycheck that go immediately to the federal government to cover taxes. 
- **Tax liability** is how much you actually owe in taxes, for the whole year. *How much you withhold does **not** change how much you owe*; it will get equalized when you file your taxes at the end of the year. 
- **Marginal rate** is the percentage of the last dollar you earn that you owe in taxes. This is different from the first dollar. That's because we have a graduated tax system with [tax brackets](https://www.investopedia.com/terms/p/progressivetax.asp). 
- **Effective rate** is the percentage of your tax liability versus your gross income. 
- **W4** is the form you file with your employer that tells them how much to withhold from your paycheck.
- **RSUs** are one of three buckets of compensation for many software engineers. In addition to your regular salary, and your annual bonus, RSUs are quarterly stock grants that you get taxed on every quarter, when you receive the stock, even if you don't sell it. 

# The easy way to calculate what you owe

Your regular W4 withholdings will cover the full tax liability of your salary alone. For example, if you have no bonus or RSU grant, and you fill out the W4 correctly, you will withhold the correct amount from each paycheck so that the difference between taxes withheld and taxes owned for the year is negligible. 

Things start getting tricky with bonus and RSUs. Early in your career, these are small. Over time, they become a larger and larger part of your compensation. For taxes, that's a problem, because **bonus and RSUs are not withheld at the correct rate -- you owe more!**

> Your W4 withholdings are designed to account for the tax liability on just your salary. Bonus and RSUs are withheld at a flat 22%. You need to account for the delta between 22% and your marginal tax rate, by using either extra W4 withholdings from each paycheck, or with quarterly estimated taxes. 

You use marginal rate here, instead of effective rate, because you will be paying the most for these "last dollars". Another way to think about it is that you have already paid bellow your effective rate for your salary dollars. Let's assume that your marginal tax rate is the maximum of 37%. Your W4 is withholding enough taxes to from your salary piece, but you need to make your own plans to cover difference between 37% and the flat 22% for your bonus and RSUs combined, or 15% of those pieces. 

# Three ways to pay what you owe 

## Pay at tax time

The first method to pay is to wait until tax season. It's not uncommon for folks to get RSUs for the first time, and be surprised when they start filing taxes and figure out they owe tens of thousands of dollars in additional taxes. The IRS will also charge you an interest penalty if the difference between withholdings and tax liability is large enough. For me, it was more about not wanting to be surprised.  

## Extra W4 Withholdings

The second method to pay is with extra W4 withholdings. The W4 form was updated in 2020 to allow you to input any amount of "extra withholdings", as a dollar amount. So, you can add your bonus and RSUs for the year together, multiple by 15%, and divide by the number of pay periods (probably 24) to calculate your W4 extra withholdings. You file an updated form with your employer, and that should be it. Just double-check your next paycheck, and look for the "extra withholdings" label. 

W4 extra withholdings have the benefit of being adjustable throughout the year. But, as the percentage of your total compensation that comes from bonus and RSUs goes up, this could be a significant portion of your paycheck. In my case, it could be up to 1/3 of the gross amount, just the for **extra** federal tax! Combined with all the other deductions, it could easily eat up most of the paycheck. You could end up budgeting your annual bonus plus your quarterly RSUs to cover your month to month spending, which is the opposite of what most people want to do.

## Quarterly Estimated Tax Payments

The third method to pay is quarterly estimated tax payments. It's not scary; it takes about 10 minutes a quarter, and you pay online. You don't need to fill out any forms or paperwork. The main downsides are that you need to remember to pay them, you need to save the money from your bonus and RSUs to pay them, and you need to make four **equal** payments for the year. The equal payments piece is a bummer; it means you need to make the most accurate calculation possible at the beginning of the year, and you cannot adjust as you go. 

# Double check your work

An easy way to double check your work is:

1. Add up your total salary, bonus and RSUs for the year
2. Use an [effective tax rate calculator](https://equitable.com/retirement/products/variable-annuities/investment-edge-annuity/estimate_your_effective_tax_rate) to find out how much you will owe 
3. Look at a paystub and project how much is being withheld from salary
4. Calculate the 22% withholding for bonus and RSUs
5. The difference between #2 and #3 + #4 should match your estimated tax payments for the year

# How does this change for a married couple?

Not much changes, just set both of your withholdings to zero, and add your bonuses and RSUs together for the 15% calculation. 

# Why not use a CPA?

Feel free! But, it's not really that complicated. If you've used Turbo Tax before, you have proved you can do it. A CPA will actually just use a custom tool very much like Turbo Tax to file your taxes for you. All of the withholding business is just an optimization. It's also about **understanding** how it works. No one is ever going to care about your money as much as you do. Also, if you don't understand it, how will you know if the CPA is doing it correctly?