# Interactive Rating Component

My solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io).

## Live Demo

https://code-surgeon-hossam.github.io/Interactive-rating-component/

## Overview

A small feedback card where users pick a rating from 1 to 5 and submit it. After submitting, the card switches to a "Thank you" state that shows the selected rating.

### Features

- Select a rating from 1 to 5
- Submit the rating and see the "Thank you" state with the chosen number
- Hover, selected and focus states for the rating buttons and the submit button
- A rating is required before submitting
- Responsive layout for mobile and desktop
- Keyboard accessible: the radio inputs are hidden visually but still reachable with Tab and the arrow keys

## Built with

- Semantic HTML5 (`form`, `fieldset`, `legend`, radio inputs with labels)
- CSS3 (Flexbox, custom fonts from Google Fonts, media queries)
- Vanilla JavaScript

## What I learned

- Using radio inputs with labels to build custom-styled rating buttons without losing keyboard support
- Hiding an input visually with `opacity` and `position` instead of `display: none`, so it stays accessible
- Why `box-sizing: border-box` makes sizing circles and padding easier
- Switching between two states of a component with the `hidden` attribute and JavaScript
- Measuring sizes and colors from the design images and checking my work against them

## Author

- GitHub: [@Code-Surgeon-Hossam](https://github.com/Code-Surgeon-Hossam)
- Frontend Mentor: add your profile link here
