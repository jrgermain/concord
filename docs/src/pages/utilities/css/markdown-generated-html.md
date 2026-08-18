---
layout: ../../../layouts/Markdown.astro
title: Markdown/Generated HTML
---

# Markdown/Generated HTML

There are times when you may want to embed HTML that was generated from some other format, like Markdown.
In these cases, you can add the class `cd-markdown` to the element holding the generated HTML.
This will apply default styles to the generated HTML elements, such as headings, paragraphs, and lists,
without needing to add the classes manually.

These styles are given a lower priority than the other styles in the stylesheet, so any classes you add
to the elements inside the Markdown should work as expected.

The table below shows the mappings between different element types and the classes they will appear to have:

| Element         | Styled Like                        |
| --------------- | ---------------------------------- |
| `hr`            | `.cd-divider`                      |
| `br`            | `.cd-divider.cd-is-invisible`      |
| `h1`            | `.cd-heading.cd-level-1`           |
| `h2`            | `.cd-heading.cd-level-2`           |
| `h3`            | `.cd-heading.cd-level-3`           |
| `h4`            | `.cd-heading.cd-level-4`           |
| `h5`            | `.cd-heading.cd-level-5`           |
| `h6`            | `.cd-heading.cd-level-6`           |
| `mark`          | `.cd-highlight`                    |
| `del`           | `.cd-highlight.cd-variant-removed` |
| `ins`           | `.cd-highlight.cd-variant-added`   |
| `a`             | `.cd-link`                         |
| `blockquote`    | `.cd-quote`                        |
| `table`         | `.cd-table`                        |
| `ol` or `ul`    | `.cd-list`                         |
| `p`             | `.cd-paragraph`                    |
| `abbr`          | `.cd-abbreviation`                 |
| `strong` or `b` | `.cd-bold`                         |
| `em`            | `.cd-italic`                       |
| `s`             | `.cd-strikethrough`                |
| `sub`           | `.cd-subscript`                    |
| `sup`           | `.cd-superscript`                  |
| `code`          | `.cd-code`                         |
| `kbd`           | `.cd-key`                          |
