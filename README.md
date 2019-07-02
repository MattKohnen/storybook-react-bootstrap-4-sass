# Contents

1. [ Introduction ](#intro)
2. [ Requirements ](#req)
3. [ Available Commands ](#cmd)<br>
    a. [ `yarn test` ](#test)<br>
    b. [ `yarn storybook` ](#storybook)<br>
    c. [ `yarn start` ](#start)<br>
    d. [ `yarn build-storybook` ](#build-storybook)<br>
    e. [ `yarn build` ](#build)
4. [ Bootstrap ](#bs)<br>
    a. [ Overwriting Bootstrap Sass Variables ](#sass)<br>
    b. [ Using / Extending Bootstrap Components ](#extend)
5. [ Misc ](#misc)<br>
    a. [ Component / Directory Structure ](#structure)<br>
    b. [ Mini Style Guide ](#guide)

<a name="intro"></a>
# Introduction 

A **[React](https://reactjs.org/)** project with **[Storybook](https://storybook.js.org)**, **[Bootstrap](https://getbootstrap.com) v4**, **[Sass](http://sass-lang.com)**, linting, live reloading, concatenation, minification, sourcemaps, and more:

* React, JSX, **ES6**, TypeScript and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.
* A **live development server** that warns about common mistakes.
* A **build script** to bundle JS, CSS, and images for **production**, with hashes and sourcemaps.

<a name="req"></a>
# Requirements

1. [nodejs](https://nodejs.org/en/) with [npm](https://www.npmjs.com/get-npm)
2. Install All Node Packages  
   `yarn install` (or `npm install`) from the project root.

<a name="cmd"></a>
# Available Commands

<a name="test"></a>
### `yarn test`
(or `npm test`)

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<a name="storybook"></a>
### `yarn storybook`
(or `npm run storybook`)

Storybook should start, on a random open port in dev-mode.

Now you can develop your components and write stories and see the changes in Storybook immediately since it uses Webpack’s hot module reloading.

<a name="start"></a>
### `yarn start`
(or `npm start`)

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

<a name="build-storybook"></a>
### `yarn build-storybook`
(or `npm run build-storybook`)

Outputs a static Storybook in the storybook-static directory.

See [the docs](https://storybook.js.org/docs/guides/guide-react) for more information.

<a name="build"></a>
### `yarn build`
(or `npm run build`)

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<a name="bs"></a>
# Bootstrap

<a name="sass"></a>
### Overwriting Bootstrap Sass Variables
You can leverage Bootstrap Sass in 3 different ways, via the **src/styles/1-vendor-overrides/bootstrap-overrides** directory:
1. You can overwrite specific Bootstrap Sass variables via **_override-defaults.scss**
2. You can extend existing Bootstrap classes with new classes via **_extend-classes.scss**
3. You can use Bootstrap mixins via **_use-mixins.scss**

**Look inside of each of the above 3 files for examples.**

<a name="extend"></a>
### Using / Extending Bootstrap Components

<a name="misc"></a>
# Misc

<a name="structure"></a>
### Component / Directory Structure

[ TODO ]

<a name="guide"></a>
### Mini Style Guide

[ TODO ]
