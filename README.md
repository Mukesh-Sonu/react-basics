# REACT WITHOUT CRA
### npm - to get packages
### npx - to execute the packages
### package.json - a configuration of npm packages
### package-lock - locks the exact package version and their dependencies version as well (transitive dependencies)
### ^2.8.6 means minor changes can be updated
### ~2.8.6 major version can be updated
### cdn - content delivery network. code which is hosted and can be used. eg. scripts src.
### type="module" - when  building the app, and pushed to the page(Browser) the script tag src file is ran and if it has imports in it which mean it not a normal browser file, normal browser file will have only JS code and import is not a key in JS. so type module will consider it has a module and then imports will work.


# Parcel
### Its is a building tool
### creates a Dev Build
### creates a Loacl Server
### hosts the app to the Local Server
### HMR = **Hot Module Replacement** - on save it automatically refreshing our development page in browser
### parcel use a **File Watching Alogorithm(FWA)** which is written in **C++**
### Caching - gives Faster builds because its caching - file(.parcel-cache)
### it will do **Image Optimization**
### If we do production build it will do **Minification**
### It will do **Bundling**
### It will **compress** the files (remove white spaces)
### Consistent hashing
### Code splitting
### Differential bundling - supports older browsers
### Gives a way to host our app in HTTPS
### Tree Shaking - will remove unused code
### Differnet builds for Dev and Production

# React and Babel(Javascript compiler)
### JSX is not html, it is a HTML like syntax
### JSX and React both are different. 
### JSX is not understood by react, javascript.<br> JSX is transpiled by parcel before it reaches to the browser.<br> Browser has JS engine which will understand only ECMA script (i.e) pure Javascript.<br> Babel inside parcel is the one while converts the JSX code to something which React will understand.<br> Babel not only transpiles JSX to React.createElement, It also converts the ES6 JS code to old browsers understandable code.



# Food App structure
/**
 * Header
 *  - Logo
 *  - Menu Items
 * Body
 *  - Search
 *  - Restaurant conatiner
 *     - Img
 *     - Name of Res, Start Rating, Cuisines.
 *     -
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


# React HOOKS
### These are normal JS utility functions
### Hooks are utility function which are given to us by React.

# Why react is FAST?
## Because react does efficient dom manipulation because it has VIRTUAL DOM

# Reconciliation Algorithm (React Fibre) -> (In react16 this has been introduced. New way of finding the diff and update the DOM)
### Here two things comes into picture VIRTUAL DOM and DIFF ALGORITHM
### Virtual DOM is a representaion of actual DOM (It is an object)
### EG: button click the state changes and filtered 10 elements to 5 elements
### Diff Algorithm - Diff algorithm finds the difference between old virtual DOM(10 elements) and the new virtual DOM(5 elements) when state updated and it updates the DOM to 5 elements. Basically comparing two objects and updating

