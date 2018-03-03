# Angular Extended

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Reflection

Really enjoying Angular and JavaScript. I just want to get another build going and further study the flow and structure of Angular and how it works with JavaScript, as well as further study JavaScript. I am going to attempt to make a recipe app that can track, store and display recipes.

## Specs

| Behavior  | Input  | Output  |
|---|---|---|
| A user can see a list of the recipes in a section | click eastcoast-rbx  | displayed list of recipes under eastcoast-rbx  |
| A user can see a list of recipe sections |   |   |
| A user can add a recipe to a recipe section  |   |   |
| A user can edit a recipe   |   |   |
| A admin can edit and delete recipes  |   |   |
| Will have testing of functions and/or features  |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |

## API-KEY

* Sign up for a Firebase account and create a new database. Import the `sample-recipes.json` file into your newly created database.
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
