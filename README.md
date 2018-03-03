# Angular Extended

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Reflection

Really enjoying Angular and JavaScript. I want to get another build going and further study the flow and structure of Angular and how it works with TypeScript and JavaScript, as well as further study TS/JS. I am going to attempt to make a recipe app that can track, store and display recipes.

## Goals and Where I'd like to Improve through this Build

* Strive harder to comprehend my code to create better work and become better at what I do.
* Have this builds code be better than the lasts. Which was another similar forum that I can certainly improve on. How you say? Well last forum we used 3 models for 3 different sections of the forum. I believe I can use one recipe model and have different sections with different types of recipes, from the eastcoast and the westcoast
* Learn how to implement users login with Firebase.



## Specs

| Behavior  | Input  | Output  |
|---|---|---|
| A user can see a list of the recipes in a section | click eastcoast-rbx  | displayed list of recipes under eastcoast-rbx  |
| A user can see a list of recipe sections | view main page  | see list of east and west recipe boxes  |
| A user can add a recipe to a recipe section  |   |   |
| A user can edit a recipe   |   |   |
| A admin can edit and delete recipes  |   |   |
| Will have testing of functions and/or features  |   |   |
| Filter data by coast on respective main pages  |   |   |
| Show json array of ingredients and directions in lists on details page  |   |   |
|   |   |   |
|   |   |   |

## Dependencies

* run `npm-install` and `bower install` in root project directory

## API-KEY

* Sign up for a Firebase account [@Firebase](https://firebase.google.com/) and create a new database. Import the `sample-recipes.json` file in this project directory into your newly created database.
* Click on `Project Overview` in Firebase and then `Add Firebase to your web app`.
* Add the given api-key to your `api-keys.ts` file in the following format:
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
