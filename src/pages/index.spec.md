# Kanban Board

This is a Vue.js component that implements a Kanban board with three columns: Todo, In Progress, and Done.

## Features

- Displays tasks in three columns based on their status
- Responsive design using Vuetify's grid system
- Floating action button to create new tasks
- Fetches initial task data from an API

## Components

### Main Component

The main component is a container that holds the Kanban board and the create task dialog.

### KanbanWidget

A custom component that displays a list of tasks for each column. It accepts the following props:

- `color`: The color theme for the widget
- `title`: The title of the column
- `list`: An array of tasks to display

### CreateTask

A custom component for creating new tasks. It's displayed in a dialog when the floating action button is clicked.

## Data Management

- Uses Vuex store for state management
- Watches for changes in the store's tasks and updates the local lists accordingly
- Fetches initial task data from an API endpoint

## Setup

1. Ensure you have Vue.js and Vuetify installed in your project.
2. Import the necessary components and the store.
3. Place the component in your Vue.js application.

## API

The component fetches initial task data from: https://mocki.io/v1/8393bf35-4c68-4c3d-8c92-e54bbc153a73

Ensure this endpoint is accessible and returns data in the expected format.

## Customization

You can customize the appearance by modifying the Vuetify classes and component props.

## Dependencies

- Vue.js
- Vuetify
- Vuex (for state management)

## Note

Make sure to implement the `KanbanWidget` and `CreateTask` components, and set up the Vuex store with the necessary state, getters, and mutations.
