# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- **Solution URL:** [Frontend Mentor Solution](https://www.frontendmentor.io/profile/Code-Surgeon-Hossam)
- **Live Site URL:** [Live Demo on GitHub Pages](https://code-surgeon-hossam.github.io/Interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup (`<main>`, `<fieldset>`, `<label>`, radio `<input>`)
- CSS3 custom properties & Flexbox
- Mobile-first / Responsive workflow
- Vanilla JavaScript (DOM manipulation & form validation)
- Google Fonts - [Overpass](https://fonts.google.com/specimen/Overpass)

### What I learned

Through this project, I reinforced several core frontend concepts:

1. **Accessible Rating Inputs:** Instead of using plain `<div>` or `<button>` elements for the rating scale, I used semantic radio inputs wrapped inside a `<fieldset>` and paired with `<label>` tags. Linking `:checked + label` in CSS allowed clean visual selection states while preserving keyboard accessibility.
2. **State Switching & Validation:** Handling form submission in Vanilla JavaScript to prevent empty submissions and dynamically inject the selected rating into the "Thank you" card state.

```css
/* Linking hidden radio inputs with their visual labels */
.rating-state input:checked + label {
  background-color: hsl(0, 100%, 100%);
  color: hsl(216, 12%, 8%);
}
