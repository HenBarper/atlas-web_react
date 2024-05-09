# React Props
Atlast T5 React Props Project

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
4. [Task 0. Commence with class components](#classComponents)
5. [Task 1. Lifecycles](#lifeCycles)
6. [Task 2. Handling Events](#handlingEvents)

__________________________________________________________________________________________________________________________________________
## Learning Objectives
<a name="learningObjectives"></a>
- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render

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
## Task 0. Commence with class components
<a name="classComponents"></a>

#### Start this project with files from the the last task of the React Props project:

### Convert the App function into a React Class:
- Modify the function within App.js to convert the App function into a React class
- Make sure that the tests are still passing

### Requirements:
- At this point, reloading the App should display the exact same page as the last task
- The console in your browser should not show any error or warning

#### Repo:
- GitHub repository: atlas-web_react
- Directory: React_component
- File: task_0/dashboard/src/App/App.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 1. Lifecycles
<a name="lifeCycles"></a>

### Add lifecycle to a component
#### In the App Class:
- Add a props named logOut with the props type being function
- The default value for this property, should be an empty function
- Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys
- When the user is pressing down the control and the h keys simultaneously, display the alert Logging you out and call the function logOut

### Add the tests
#### In the test file for the App Class:
- Create a test to verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out

### Requirements:
- Make sure to remove the event listener when the component is unmounted
- In the test file, make sure to restore the alert function you mocked
- At this point, reloading the App should display the exact same page as the last task
- The console in your browser should not show any error or warning

#### Repo:
- GitHub repository: atlas-web_react
- Directory: React_component
- File: task_1/dashboard/src/App/App.js, task_1/dashboard/src/App/App.test.js

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
## Task 2. Handling Events
<a name="handlingEvents"></a>

### Create a new handing event
#### In the Notifications component:
- Convert the function into a React Class
- Make sure that the tests are still passing
- Create a new markAsRead function within the Notifications class. It accepts one argument: id(number)
- When the function is called, it logs to the console the message “Notification $id has been marked as read
- Pass the function markAsRead to the NotificationItem component as a property

#### In the NotificationItem Class:
- Modify the li element to call the new function markAsRead on click. It should send the id of the notification
- Define the new property type and the default property for the new properties

### Add the tests
#### In the Notifications test file:
- Create a test, that will mockup the console.log function
- Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message

#### In the NotificationItem test file:
- Create a test, that will pass a spy as the markAsRead property
- Check that when simulating a click on the component, the spy is called with the right ID argument

### Requirements:
- Make sure to bind the function markAsRead in your constructor to avoid unecessary re-rendering
- In the test file, make sure to restore the console function you mocked
- At this point, reloading the App should display the exact same page as the last task. Use the React Chrome Extension to make sure the Notifications component displays correctly
- The console in your browser should not show any error or warning

#### Repo:
- GitHub repository: atlas-web_react
- Directory: React_component
- File: task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.test.js

[Back to top](#Sections)
