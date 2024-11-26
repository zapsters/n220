# Final project outline

Link: https://zapsters.github.io/n220/final-project

## Major Features

- Login Form

  - DOM references: password and username inputs, submit button for listeners
  - Logic:
    - Username / password is empty => tell user to fill required forms
    - Tell user to input a valid password (Using if-else checks)
      - Password is empty
      - Password < 8 char
      - Password contains no capitals
      - Password contains no numbers
  - Events
    - On login button click, check login form

- Dashboard

  - Dom References: display name text reference, logout button for listener, task list reference
  - Logic:
    - Signout button functionality
    - Update / replace text with the user's display name.
  - Events:
    - Call to tasks manager to display the tasks.

- Tasks
  - Dom References: task list reference
  - Loop:
    - Loop through all tasks and display each task in its own task element.
  - Logic:
    - Add new tasks to the list
    - Mark a task as complete
    - Remove a task from the list
    - Allow users to edit tasks
    - Allow users to assign an additional property of the task
  - Events:
    - Clicking add new tasks
    - Change text btn => allow user to edit
    - Category select dropdown
