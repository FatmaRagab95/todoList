# Kanban Widget Component

This Vue 3 component implements a draggable task list for a Kanban board column.

## Features

- Displays a list of tasks in a card format
- Allows dragging and reordering of tasks
- Supports editing task status
- Provides options to edit or delete tasks
- Responsive design using Vuetify components

## Props

| Prop  | Type   | Default   | Description                |
| ----- | ------ | --------- | -------------------------- |
| title | String | "Kanban"  | Title of the Kanban column |
| color | String | "primary" | Color theme for the widget |
| list  | Array  | []        | Array of task objects      |

## Task Object Structure

```typescript
interface iTask {
  id: number;
  title: string;
  description: string;
  status: "todo" | "inprogress" | "done";
}
```

## Component Structure

1. Main card container
2. Task list with draggable items
3. Edit task dialog
4. Delete task confirmation dialog

## Usage

```vue
<kanban-widget title="Todo" color="warning" :list="todoList" />
```

## Dependencies

- Vue 3
- Vuetify 3
- Vuex (for state management)
- SortableJS (for drag-and-drop functionality)

## Functionality

### Task Actions

- Edit: Opens a dialog to edit the task details
- Delete: Opens a confirmation dialog before deleting the task
- Change Status: Buttons to move the task between columns

### Drag and Drop

Tasks can be reordered within the column using drag and drop.

## State Management

The component uses Vuex for state management:

- `editTask` mutation for updating task status
- `deleteTaskFromStore` action for removing tasks

## Customization

The component's appearance can be customized by modifying the Vuetify classes and component props.

## Notes

- Ensure that the `EditTask` component is implemented and imported correctly.
- The Vuex store should be set up with the necessary state, mutations, and actions.
- SortableJS is used for drag-and-drop functionality, make sure it's properly installed and imported.

```

```
