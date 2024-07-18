# Create Task Component

This Vue 3 component provides a form for creating a new task in a Kanban board application.

## Features

- Create new task with title, description, and status
- Form validation using vee-validate
- Responsive design using Vuetify components

## Emits

- `close`: Emitted when the create dialog should be closed

## Component Structure

1. Card container with title "Create Task"
2. Form fields:
   - Title (text field with counter)
   - Description (textarea)
   - Status (select)
3. Action buttons (Close and Save)

## Usage

```vue
<create-task @close="closeCreateDialog" />
```

## Dependencies

- Vue 3
- Vuetify 3
- vee-validate (for form validation)

## Form Validation

Uses vee-validate for form validation:

- Title and Description: Minimum 2 characters
- Status: Must be selected

## State Management

Uses a global `addTaskToStore` function to add the new task to the application state.

## Status Options

Available status options:

- Todo
- Inprogress
- Done

## Form Fields

1. Title

   - Type: Text field
   - Validation: Minimum 2 characters
   - Counter: 10 characters

2. Description

   - Type: Textarea
   - Validation: Minimum 2 characters

3. Status
   - Type: Select
   - Options: Todo, Inprogress, Done
   - Validation: Must be selected

## Methods

- `createTask()`: Handles form submission, validates input, and adds the new task to the store if validation passes.

## Notes

- Ensure that the `iTask` interface and `addTaskToStore` function are correctly imported and implemented.
- The component uses the `useForm` and `useField` composables from vee-validate for form handling and validation.
