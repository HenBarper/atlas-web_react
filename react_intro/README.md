# React Intro
Atlast T5 React Intro Project

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
3. [Setup](#setup)
5. [Task 0. Basic application](#basicApplication)
6. [Task 1. Embedding expressions, functions](#embeddingExpressions)
7. [Task 2. Modify the App](#modifyTheApp)
8. [Task 3. Modify the Notifications](#modifyTheNotification)

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

## Setup
<a name="setup"></a>
- `npx create-react-app react_project_name`
- `npm start` to run react app by default on localhost:3000

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