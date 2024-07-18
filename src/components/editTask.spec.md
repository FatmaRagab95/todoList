# Edit Task Component

This Vue 3 component provides a form for editing an existing task in a Kanban board application.

## Features

- Edit task title, description, and status
- Form validation using vee-validate
- Responsive design using Vuetify components

## Props

| Prop | Type   | Required | Description         |
| ---- | ------ | -------- | ------------------- |
| task | Object | Yes      | Task object to edit |

## Emits

- `close`: Emitted when the edit dialog should be closed

## Component Structure

1. Card container with title
2. Form fields:
   - Title (text field)
   - Description (textarea)
   - Status (select)
3. Action buttons (Close and Save)

## Usage

```vue
<edit-task :task="taskToEdit" @close="closeEditDialog" />
```

## Dependencies

- Vue 3
- Vuetify 3
- vee-validate (for form validation)
- Vuex (for state management)

## Form Validation

Uses vee-validate for form validation:

- Title and Description: Minimum 2 characters
- Status: Must be selected

## State Management

Uses a global `editTaskInStore` function to update the task in the Vuex store.

## Status Options

Available status options:

- Todo
- Inprogress
- Done

## Notes

- Ensure that the `iTask` interface and `editTaskInStore` function are correctly imported and implemented.
- The component assumes the existence of a Vuex store for state management.

```

```
