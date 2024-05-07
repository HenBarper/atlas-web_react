# React Props
Atlast T5 React Props Project

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
3. [Terminal Commands](#terminalCommands)
5. [Task 0. Basic components](#basicComponents)
6. [Task 1. Write the tests for each component](#writeTests)

__________________________________________________________________________________________________________________________________________
## Learning Objectives
<a name="learningObjectives"></a>
- How to create basic React components using functions
- How to reuse components
- How to pass properties to components
- How to define types for components
- How to use Fragments
- When to use a key to improve a loop’s performance

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
- 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 0. Basic components
<a name="basicComponents"></a>

#### Start with your files from the last task of the React intro project

#### Instead of creating new elements, we’re going to create components to split the project. The App.js is going to become the main entry point, the shell, for every component in the app.

### Create a Header component
#### Create a new folder Header:
- Move the code of the header from the App.js to a new file Header.js
- Move the css code, related to the header, of the App.css to a new file named Header.css
- Create an empty Header.test.js. We’ll add tests for it later.

### Create a Footer component
#### Create a new folder Footer:
- Move the code of the footer from the App.js to a new file Footer.js
- Move the css code, related to the footer, of the App.css to a new file named Footer.css
- Create a Footer.test.js, we will add the tests later

### Create a Login component
#### Create a new folder Login:
- Move the code of the login section from the App.js to a new file Login.js
- The code should be wrapped in a React Fragment
- Move the css code, related to the login, of the App.css to a new file named Login.css
- Create a Login.test.js, we will add the tests later

### Modify the shell
##### In the index.js:
- Remove the root-notifications
- Remove the Notifications import

#### In the App.js:
- Import Notifications, Login, Footer, and Header
- Add the new Notifications component before the div.App element
- Wrap Notifications and the rest of the div.App within a React Fragment
- In the div.App, replace the header code by the new Header component
- In the div.App-body, replace the login code by the new Login component
- In the div.App-footer, replace the footer code by the new Footer component

#### In the App.test.js:
- Most tests will fail, only keep the one testing that the component renders without crashing

#### Requirements:
- At this point, reloading the App should display the exact same page as the last task
- The console in your browser should not show any error or warning

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_props
- File: task_0/dashboard/dist/index.html, task_0/dashboard/src/App/App.js, task_0/dashboard/src/Footer/Footer.css, task_0/dashboard/src/Footer/Footer.js, task_0/dashboard/src/Footer/Footer.test.js, task_0/dashboard/src/Header/Header.css, task_0/dashboard/src/Header/Header.js, task_0/dashboard/src/Header/Header.test.js, task_0/dashboard/src/Login/Login.css, task_0/dashboard/src/Login/Login.js, task_0/dashboard/src/Login/Login.test.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 1. Write the tests for each component
<a name="writeTests"></a>

#### To develop your tests faster, you can watch them. The test suite will run for every change you make:
- Add the following script to task_1/package.json: `"test-watch": "jest --watch"`
- Run your suite using npm run test-watch

### Header.test.js
#### Import your new Header component within the test, and write two checks:
- Shallow render the Header component to verify it renders without crashing
- Verify that the components render img and h1 tags

### Login.test.js
#### Import your new Login component within the test, and write two checks:
- Shallow render the Login component to verify it renders without crashing
- Verify that the components renders 2 input tags and 2 label tags

### Footer.test.js
#### Import your new Footer component within the test, and write two checks:
- Shallow render the Footer component to verify it renders without crashing
- Verify that the components at the very least render the text “Copyright”

### App.test.js
#### Modify the App.test.js file, and add four checks:
- It should contain the Notifications component
- It should contain the Header component
- It should contain the Login component
- It should contain the Footer component

#### Requirements:
- At this point, running the test suites, should show:
```
Test Suites: 6 passed, 6 total
Tests: 17 passed, 17 total
```

#### Repo:
- GitHub repository: atlas-web_react
- Directory: react_props
- File: task_1/package.json, task_1/dashboard/src/Header/Header.test.js, task_1/dashboard/src/Footer/Footer.test.js, task_1/dashboard/src/Login/Login.test.js, task_1/dashboard/src/App/App.test.js

[Back to top](#Sections)