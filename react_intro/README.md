# React Intro
Atlast T5 React Intro Project

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
3. [Terminal Commands](#terminalCommands)
5. [Task 0. Basic application](#basicApplication)
6. [Task 1. Embedding expressions, functions](#embeddingExpressions)
7. [Task 2. Modify the App](#modifyTheApp)
8. [Task 3. Modify the Notifications](#modifyTheNotification)
9. [Task 4. Create basic tests with four tests](#createTests)
10. [Task 5. Install Enzyme](#installEnzyme)
11. [Task 6. Create React tests](#createReactTests)
12. [Task 7. Deploy to a GitHub page](#deployToGithubPages)
13. [Task 8. Create a project using Webpack](#createUsingWebpack)
14. [Task 9. Install Babel](#installBabel)
15. [Task 10. Reorganize the files](#reorganizeFiles)
16. [Task 11. Testing](#testing)

[Credits](#Credits)
__________________________________________________________________________________________________________________________________________
## Learning Objectives
<a name="learningObjectives"></a>
- How to create a basic Javascript application using React
- How to use the package create-react-app to start developing quickly with React
- What JSX is and how to use it
- How to use the React Developer Tools to debug your code
- How to use Enzyme’s Shadow rendering to test your application
- How to use React with Webpack & Babel

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________

## Requirements
<a name="requirements"></a>
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________

## Terminal Commands
<a name="terminalCommands"></a>
### Setup
- `npx create-react-app react_project_name`
- `npm start` to run react app by default on localhost:3000
- `npm install enzyme @cfaester/enzyme-adapter-react-18 --save-dev`
- `npm install --save-dev gh-pages`
### Testing
- `npm test`
  - Setup with jest in package.json
  ```
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    ```
  ```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
      ```
### Deploying
- `npm run deploy` runs predeploy
### Webpack
- `npm install --save-dev webpack webpack-cli webpack-dev-server`
- `npm install --save-dev html-webpack-plugin style-loader css-loader file-loader image-webpack-loader babel-loader @babel/core @babel/preset-env @babel/preset-react`

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 0. Basic application
<a name="basicApplication"></a>
### Create a basic app named dashboard using create-react-app in your task_0 directory
- You will need a favicon and the Holberton logo. Download them and add them to the src/ directory under dashboard/
### Remove the unused files:
- reportWebVitals.js
- index.css
- App.test.js
### in task_0/dashboard/src/App.js, create a function App that returns:
- a header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard
- a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
- a footer div with a class named App-footer containing at least one paragraph with the text Copyright 2024 - holberton School
### Requirements:
- When running, there should not be any lint error in the console
### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_0/dashboards/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 1. Embedding expressions, functions
<a name="embeddingExpressions"></a>
### Using your code from the previous task, in task_1/dashboard/src/utils.js:
- Create a function named getFullYear that will return the current year
- Create a function named getFooterCopy:
  - It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
- Modify the footer returned in task_1/dashboard/src/App.js to use these two functions. isIndex should be true

### in task_1/dashboard/src/Notifications.js, create a Notifications element:
- It should import React
- It should export a functional component
- The functional component should return a div with the class Notifications
- The div should contain a paragraph with the text Here is the list of notifications
- import the file Notifications.css.

### in task_1/dashboard/src/Notifications.css, style the Notifications class:
- Add a border and some padding around the div

### Render the Notifications element:
- Modify task_1/dashboard/src/index.js to render the new element (Notifications) in a div with the class name root-notifications
- Check that you can see the two elements on the browser, and using the React browser extension

### Requirements:
- When running, there should not be any lint errors in the console

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
__________________________________________________________________________________________________________________________________________
## Task 2. Modify the App
<a name="modifyTheApp"></a>
### using your code from the previous task, in task_2/dashboard/src/App.js under the paragraph that says Login to access the full dashboard:
- add a label and input for email
- add a label and input for password
- when the user clicks on a label, it should select the corresponding input
- add one button element with the text “OK”

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_2/dashboard/src/, task_2/dashboard/src/App.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 3. Modify the Notifications
<a name="modifyTheNotification"></a>
### in task_2/dashboard/src/utils.js:
- Create a function named getLatestNotification that returns the following string: <strong>Urgent requirement</strong> - complete by EOD

### in task_2/dashboard/src/Notifications.js in the Notifications div:
- add a button element with inline styling (without using the CSS file):
  - show button on right side of notifications box
  - aria-label is Close
  - when user clicks on the button it logs to the console Close button has been clicked
- in the button element there should be an “x”
- after the paragraph add an unordered list
  - the list has the following items:
    - The first one has a default priority and says New course available
    - The second one has a urgent priority and says New resume available
    - The last item has a urgent priority and should correctly displays the content of getLatestNotification using dangerouslySetInnerHTML
    - Add the priority to the items of the list using a data attribute

### in task_2/dashboard/src/Notifications.css:
- style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.

### Requirements
- When running, there should not be any lint error in the console

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_2/dashboard/src/, task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.js, task_2/dashboard/src/Notifications.css

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 4. Create basic tests with four tests
<a name="createTests"></a>
### in task_3/dashboard/src/utils.test.js:
- Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
- Write a test to check that getFooterCopy returns the correct string when the argument is true or false
- Write a test checking the returned string for getLatestNotification

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_3/dashboard/src/utils.test.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 5. Install Enzyme
<a name="installEnzyme"></a>
- Install Enzyme and the enzyme adapter with npm
- Create a file named setupTests.js and configure the adapter for Enzyme

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_3/dashboard/src/setupTests.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 6. Create React tests
<a name="createReactTests"></a>
### in task_3/dashboard/src/App.test.js create four tests:
- test that App renders without crashing
- verify that App renders a div with the class App-header
- verify that App renders a div with the class App-body
- verify that App renders a div with the class App-footer

### in task_3/dashboard/src/Notifications.test.js create three tests
- test that Notifications renders without crashing
- verify that Notifications renders three list items
- verify that Notifications renders the text Here is the list of notifications

### Requirements:
- When running the test suites, you should see the following result
- You must use shallow rendering to write the React tests
```
Test Suites: 2 passed, 2 total
Tests: 7 passed, 7 total
```
### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 7. Deploy to a GitHub page
<a name="deployToGithubPages"></a>
### Deploy your application to GitHub Pages using gh-pages branch and create-react-app
- Your application should be working correctly when accessing the GitHub URL.

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_4/

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 8. Create a project using Webpack
<a name="createUsingWebpack"></a>
### Without reusing create-react-app or the code from the previous exercise, start a brand new npm project

### Reusing what you learned during the Webpack module:
- Set up a system to output a bundle.js file in a dist folder
- Set up a dev server with hot reloading
- Create a src folder that will contain your Javascript
- Set up a simple html file in the dist folder that will import the bundle file in the body tag.

### Install and configure the various plugins to support:
- inline source map
- style loader
- css loader
- image webpack loader

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_5/dashboard/config/webpack.config.js, task_5/dashboard/dist/index.html, task_5/dashboard/src/index.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 9. Install Babel
<a name="installBabel"></a>
- Install Babel, and in task_5/dashboard/.babelrc, add the presets for preset-env and preset-react
- Add a babel-loader to the Webpack configuration so you can support js and jsx files
- Import the files that you wrote in the previous task. All the Javascript and React code should be within the src folder

### At this point, running webpack-dev-server should correctly execute your code, and you should be able to see the dashboard like in the last task

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_5/dashboard/.babelrc, task_5/dashboard/config/webpack.config.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 10. Reorganize the files
<a name="reorganizeFiles"></a>
### Let’s reorganize the files in our project:
- Every file related to the App, should be within a App folder
- Every file related to the Notifications, should be within a Notifications folder
- Every file related to the utils functions, should be within a utils folder
- Every asset file should be within the assets folder
- Set up the favicon.ico in the dist folder
- Webpack config file should be within a config folder if it isn’t already

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.test.js, task_5/dashboard/config/webpack.config.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/dist/favicon.ico

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 11. Testing
<a name="testing"></a>
### Install Jest and Enzyme to run your test suites

### move the setupTests.js file to config folder if you have not already

### Requirements:
- Your package.json should have the two following scripts:
```
"start": "webpack-dev-server --mode development --config config/webpack.config.js",
"test": "jest"
```
- Running the first script should start your dev server and build without any error
- Running the second script should start your test suites and pass for each test

### Repo:
- GitHub repository: atlas-web_react
- Directory: react_intro
- File: task_5/dashboard/config/setupTests.js, task_5/dashboard/package.json

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________