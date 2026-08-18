---
layout: ../../../layouts/Markdown.astro
title: Simulating States
---

# Simulating States

Interactive components typically change their appearance when they are hovered, focused, and/or
active (clicked/tapped). This is typically done using the CSS pseudo-classes `:hover`, `:focus`
(or `:focus-visible`), and `:active`, respectively.

If you want to style a component to look like it's in one of these states (without actually _being_
in that state), you can use the utility classes, `.cd-is-hovered`, `.cd-is-focused`, and `.cd-is-active`, respectively.

## Hover

The `cd-is-hovered` class corresponds to the `:hover` pseudo-class.

<button class="cd-button">I'm a normal button</button>
<button class="cd-button cd-is-hovered">I look hovered</button>

## Focus

The `cd-is-focused` class corresponds to either `:focus`, `:focus-visible`, or `:focus-within`, depending
on the component. In any case, it will correspond with the state in which the component would
normally appear focused.

<button class="cd-button">I'm a normal button</button>
<button class="cd-button cd-is-focused">I look focused</button>

## Active

The `cd-is-active` class corresponds to the `:active` pseudo-class.

<button class="cd-button">I'm a normal button</button>
<button class="cd-button cd-is-active">I look active (pressed)</button>

## Combining Multiple States

You can combine these to achieve the desired effect. For example, a button being clicked is usually both active and hovered.

<button class="cd-button">I'm a normal button</button>
<button class="cd-button cd-is-active cd-is-hovered">I look like I'm being clicked</button>
