# Atlast T5 React Redux Connectors and Providers

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
4. [Task 0. Write mapStateToProps](#writeMapStateToProps)
5. [Task 1. Create a small store](#createSmallStore)
__________________________________________________________________________________________________________________________________________
## Learning Objectives
<a name="learningObjectives"></a>
- Redux connectors and how to use them
- The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)
- How to map an action creator to a component using a connector
- How to map an async action creator to a component with Redux Thunk
- What Redux Providers are and how to set up your app’s store
- How you can improve a connector’s performance using Reselect
- How to use Redux’s dev tools to debug the state of your application

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Requirements
<a name="requirements"></a>
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- Push all of your files, including package.json and .babelrc
- All of your functions must be exported

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 0. Write mapStateToProps
<a name="writeMapStateToProps"></a>

#### Reuse the latest dashboard project you worked on in the React course 0x09-React_Redux_reducer and install react-redux

### Within the App/App.js file:
- Create a function named mapStateToProps. This should connect the uiReducer you created and the property isLoggedIn that your component is already using
- Import connect from Redux, and connect the mapStateToProps to the component

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_redux_connectors_and_providers
- File: ask_0/dashboard/src/App/App.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 1. Create a small store
<a name="createSmallStore"></a>

### In the index.js file:
- Create a store using createStore from Redux that would contain the uiReducer state
- Implement a provider passing the store that you created to the main App

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_redux_connectors_and_providers
- File: task_0/dashboard/src/index.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 2. Test MapStateToProps
<a name="testMapStateProps"></a>

#### Export the mapStateToProps function you created if you haven’t already, and in the App.test.js file:
- Create a new suite to test the function
- Create a test that verify that the function returns the right object when passing the

```
let state = fromJS({
  isUserLoggedIn: true
});
```

#### Should return { isLoggedIn: true }

### Tips:
- At this point your app is not functional but you should be able to load the page without crashing
- Remember that the state of uiReducer is using Map from Immutable

### Requirements:
- No error should be displayed within the console
- All the tests in the project should pass

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_redux_connectors_and_providers
- File: task_0/dashboard/src/App/App.test.js

[Back to top](#Sections)
