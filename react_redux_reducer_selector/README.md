# React State
Atlast T5 React State React Redux Action Creator Normalizr Project

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
4. [Task 0. Write a basic reducer](#writeBasicReducer)
5. [Task 1. Use Immutable for the UI Reducer](#UseImmutableUIReducer)
__________________________________________________________________________________________________________________________________________
## Learning Objectives
<a name="learningObjectives"></a>
- The purpose of a reducer and the role it plays within your application
- Why a reducer should stay as pure as possible
- Why mutations should not happen within a reducer
- The use of Immutable within the reducer
- The use of Normalizr within the app
- Selectors: what they are and when to use them

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Requirements
<a name="requirements"></a>
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- A README.md file, at the root of the folder of the project, is mandatory
- Push all of your files, including package.json and .babelrc
- All of your functions must be exported

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 0. Write a basic reducer
<a name="writeBasicReducer"></a>

#### Reuse the latest dashboard project you worked on in the React course 0x08-React_Redux_action_creator+normalizr

### Create the basic state
#### In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:
- It should have one boolean property isNotificationDrawerVisible
- It should have one boolean property isUserLoggedIn
- It should have one empty object user

#### Create the reducer function
#### In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:
- DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
- HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
- LOGIN_SUCCESS should set isUserLoggedIn to true
- LOGIN_FAILURE should set isUserLoggedIn to false
- LOGOUT should set isUserLoggedIn to false

### Write the tests
#### In a file named reducers/uiReducer.test.js, define the test suite for our simple reducer:
- Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
- Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
- Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property

### Tips:
- Don’t forget to set up the default case in your switch function

### Requirements:
- You should not mutate the state within the reducer
- You must use the spread operator to change the state
- All the tests in the project should pass

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_redux_reducer_selector
- File: task_0/dashboard/src/reducers/uiReducer.js, task_0/dashboard/src/reducers/uiReducer.test.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 1. Use Immutable for the UI Reducer
<a name="UseImmutableUIReducer"></a>

#### Now that you have set up a basic reducer, let’s reuse what we learned in the Immutable module and apply it to that reducer:
- Install Immutable.js within the project
- Update the uiReducer.js file to use Map from Immutable.js
- Update the different part of the reducer function to use set from Map
- Update the test suite, so it takes into account the changes

### Tips:
- You can use the toJS function within your tests for an easy comparison
- Remember that Immutable.js always return a new Map after a modification

### Requirements:
- For better performances, do not use any fromJS, toJS function within the reducer
- All the tests in the project should pass

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_redux_reducer_selector
- File: task_1/dashboard/src/reducers/uiReducer.js, task_1/dashboard/src/reducers/uiReducer.test.js

[Back to top](#Sections)