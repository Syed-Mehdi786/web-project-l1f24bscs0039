# The Golden Bean — Web Technologies Project 1 (Assignment 1)

## Theme Overview
**The Golden Bean** is an artisan coffee roastery and farm-to-table restaurant website built for **Assignment 1 (Part 1)** of the BSCS Semester 5 Web Technologies course.

## Pages Included in Assignment 1
1. **`index.html` + `home.css` (Home Page):**
   - **HTML Concepts:** Headings (`h1`–`h3`), paragraphs (`p`), block elements (`div`, `section`, `article`, `header`, `footer`), inline elements (`strong`, `em`, `span`, `a`), high-resolution cafe imagery, and links to all 6 project pages.
   - **CSS Concepts:** Element (`body`, `h1`, `p`, `a`), Class (`.story-box`, `.pillar-card`, `.welcome-pill`), and ID (`#hero-section`, `#directory-banner`, `#home-footer`) selectors; typography, dashed and solid borders, background colors, and a dark-espresso navigation bar.

2. **`media.html` + `media.css` (Menu & Ambiance Page):**
   - **HTML Concepts:** Image, HTML5 `<video>`, HTML5 `<audio>`, ordered list (`<ol>`), unordered list (`<ul>`), and a 5-column beverage/pastry data `<table>`.
   - **CSS Concepts:** Universal Box Model (`box-sizing: border-box`, `width`, `height`, `margin`, `padding`), `background-image` banner, `display: inline-block`, `position: relative`, `position: absolute` (table badges & hero headings), `position: fixed` (quick reservation button), `float: left` with `clear: both`, and `overflow-y: auto` scrollable roastmaster log.

3. **`register.html` + `register.css` (Reservations Page):**
   - **HTML Concepts:** Complete reservation form with all 14 required inputs (`text`, `password`, `email`, `date`, `url`, `color`, `number`, `time`, `range`, `textarea`, `select`, `file`, `radio`, `checkbox`) and all 9 validation/state attributes (`required`, `readonly`, `disabled`, `min`, `max`, `minlength`, `maxlength`, `checked`, `selected`).
   - **CSS Concepts:** Attribute selectors (`input[type="text"]`, `input[readonly]`, `input[disabled]`), all 4 CSS combinators (descendant ` `, child `>`, adjacent sibling `+`, general sibling `~`), pseudo-classes (`:hover`, `:focus`, `:valid`, `:invalid`), and pseudo-elements (`::before`, `::after`, `::placeholder`), without using `!important`.

## AI Usage Log
| Tool | Prompt / What Was Asked | What I Changed / Implemented |
| :--- | :--- | :--- |
| AI Tutor | Review uploaded Golden Bean HTML/CSS files against Assignment 1 rubric to spot missing requirements or broken class names. | Fixed class mismatches (`custom-info-section`, `custom-float-img`), replaced broken local media paths with working web URLs, and removed `!important` overrides. |
| AI Tutor | Suggest ways to demonstrate `overflow`, all 4 CSS combinators, and all 14 form inputs naturally in a café website. | Added a scrollable Roastmaster's Harvest Log (`overflow-y: auto`) in `media.html` and expanded `register.html` to include `minlength`, `maxlength`, `max`, and an active `file` upload. |
