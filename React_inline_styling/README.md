# React Inline Styling
Atlast T5 React Inline Styling Project

## Sections
<a name="Sections"></a>
1. [Learning Objectives](#learningObjectives)
2. [Requirements](#requirements)
4. [Task 0. Commence with class components](#classComponents)

__________________________________________________________________________________________________________________________________________
## Learning Objectives
<a name="learningObjectives"></a>
- the differences between using a CSS file and inline styling
- how to use a CSS-in-JS tool like Aphrodite
- how to use conditions within JS to apply different styles
- how to use responsive design and make the application show a different UI according to the screen size
- how to create small animations within the app

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
## Task 0. Inline styling
<a name="inlineStyling"></a>

- Copy over the task_5 directory from the 0x04. React components project (We’ll be using it as the base for this project)
- Rename the task_5 directory to task_0

### Modify the CourseListRow component in task_0/dashboard/src/CourseList/CourseListRow.js:
- Using inline styling, change the background color of a row to #f5f5f5ab
- Using inline styling, change the background color of a header row to #deb5b545
- If needed, modify the test file so every test pass

### Tips:
- For better performances, never create and pass an object to an element directly. Use a constant instead
- Use the isHeader prop to easily pick the style you want to apply to the tr tag

### Requirement:
- Even if the modification is small, make sure that your test suites are still passing. Especially the file CourseListRow.test.js

#### Repo:
- GitHub repository: atlas-web_react
- Directory: React_inline_styling
- File: task_0/dashboard/src/CourseList/CourseListRow.js, task_0/dashboard/src/CourseList/CourseListRow.test.js

[Back to top](#Sections)
