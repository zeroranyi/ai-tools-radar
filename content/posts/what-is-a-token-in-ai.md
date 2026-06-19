---
title: "What Is a Token in AI? (And Why Pricing Depends on It)"
description: "What is a token in AI? A plain-English explanation of tokens, how they relate to words, why they affect cost and context limits, and how to estimate them."
category: definitions
date: "2026-06-11"
updated: "2026-06-11"
keywords:
  - what is a token in ai
  - ai tokens explained
  - what are tokens in chatgpt
  - how many tokens in a word
answer: "A token is a chunk of text an AI model processes — roughly ¾ of a word in English, so about 100 tokens ≈ 75 words. Tokens matter because AI pricing and context limits are measured in them: you pay per token (input and output), and a model's context window is a token budget for how much it can 'see' at once."
faq:
  - q: "How many tokens are in a word?"
    a: "On average, one token is about ¾ of a word in English, so 100 tokens is roughly 75 words. It varies — common words may be one token, while long or rare words split into several."
  - q: "Why does AI charge per token?"
    a: "Because tokens are the unit of work the model processes. API pricing typically charges separately for input tokens (your prompt) and output tokens (the response), so longer prompts and answers cost more."
  - q: "What is a context window in tokens?"
    a: "A context window is the maximum number of tokens a model can consider at once — your prompt plus its response. If a conversation or document exceeds it, older content gets truncated or must be summarized."
---

If you've used an AI API or hit a "context limit," you've bumped into tokens. They're the hidden unit behind AI pricing and limits — and they're simple once explained.

## What is a token?

A **token** is a chunk of text the model processes — often a word, part of a word, or punctuation. As a rule of thumb in English:

- **1 token ≈ ¾ of a word**
- **100 tokens ≈ 75 words**
- Common words = 1 token; long/rare words split into several

## Why tokens matter

Two big reasons:

1. **Pricing** — AI APIs charge **per token**, usually with separate rates for **input** (your prompt) and **output** (the response). Longer prompts and answers cost more.
2. **Context window** — a model's context window is a **token budget**: the max it can "see" at once (your prompt + its reply). Exceed it and older content gets cut or summarized.

## A quick example

| Text | Rough tokens |
| --- | --- |
| "Hello" | 1 |
| A typical sentence (~15 words) | ~20 |
| A 500-word email | ~650 |
| A 10-page document | thousands |

## Why this is worth understanding

> **The practical payoff:** once you think in tokens, two things click. First, *why long chats slow down and lose track* — you're filling the context budget, and old turns drop off. Second, *how to control API costs* — trim bloated prompts, don't paste huge documents you don't need, and ask for concise output. People who ignore tokens get surprise bills and "the AI forgot what I said" frustration; people who get it avoid both.

## Bottom line

A token is a piece of text (~¾ of a word) and it's the unit AI uses for both **pricing** and **context limits**. Understanding tokens explains your costs and why long conversations eventually lose the thread.
