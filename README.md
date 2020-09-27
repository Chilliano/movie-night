<p align="center">
  <a href="https://chilliano.github.io/movie-night/">
    <img src="./src/assets/images/README/Movie-Night-Mobile.png"
         alt="movie Night Cover Image">
  </a>
</p>

# Betsson Movies List Application

Short excercise to display filtering, redux setup, angular material, theming, and styling. I wanted it to have a fast paced feel, with a layered menu system with only one movement between details and main page.

## See it in action

[Movie Nights Application](https://chilliano.github.io/movie-night/)

## Tech

<b>Built with</b>

- [Angular2+](https://angular.io/)
- [Redux](https://redux.js.org/)

## Installation

1. Make Sure you have NPM, NODE, and ANGULAR-CLI installed on your machine

- [npm](https://docs.npmjs.com/cli/install)
- [Angular2+](https://angular.io/)
- [Node](https://nodejs.org/en/download/)

2. Clone this repo to your machine
3. npm i
4. npm run start.

## Deployment Steps

- edit the package json to include your repo from github
- npm run build (adding prod flag to significantly reduce bundle sizes)

## Application Steps

- First I built the redux store - @ngrx/store + @ngrx/store-devtools
- I added Material as a quick style choice that follows best practices and looks and feels well for mobile use @angular/material
- For image rendering speed in lists i added @lazysizes. ('a fast (jank-free), SEO-friendly and self-initializing lazyloader for images' ["Lazysizes" Github](https://github.com/afarkas/lazysizes))

## Ideas

- Movie Details Page

  - Rating
  - Rotten Tomato Percentage
  - some phrases maybe from reviewers scrolling like tokyo style
  - image jagged and digital like a tokyo skyscraper

- Favouriting specific movies, need snackbar to confirm add and remove. need to add to redux
  ```
  <button
    mat-icon-button
    class="example-icon favorite-icon"
    aria-label="Example icon-button with heart icon"
  >
    <mat-icon>favorite</mat-icon>
  </button>
  ```

## Missing

- put filter-by-genre-button to stick at top of the list
- absolute style imports
- change movies per column during filter if it drops below 5
- extract the input filter from the movies component
- extract everything from movie-details component
- indicator that the list is currently being filtered
- indicate which area filter term was found - Description, title etc... and display to user
- reset search term on home nav?
