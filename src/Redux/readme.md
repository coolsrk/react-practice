# Redux

## Why Redux?

Redux is a powerful state management library for JavaScript applications. It helps manage the state in a predictable way, which makes it easier to handle complex applications. Here are some key reasons to use Redux:

- **Predictability**: The state is stored in a single source of truth, making it easier to understand how the app behaves.
- **Centralized State Management**: All components can access the state from one place, simplifying communication.
- **Time-Travel Debugging**: You can track changes to the state over time, making debugging easier.
- **Middleware Support**: Redux has robust middleware options, which allow for enhanced functionality.

## Redux Terminology

Understanding the core concepts of Redux is essential for effective state management. Here are the key terms:

- **Action**: An object that describes a change to the state. An action must have a `type` property that indicates the action type.

- **Reducer**: A pure function that takes the current state and an action as arguments and returns a new state. Reducers have no side effects.

- **Slice**: A collection of reducer logic and actions for a single feature of your application, typically created using `createSlice` from Redux Toolkit.

- **Store**: The object that holds the application's state. It acts as the central hub for state management.

- **State**: The underlying data structure that holds the current information of your application. It can be altered by actions dispatched to the store.

## Redux flow to update state variable on screen

![Redux Explanation](./media/Redux%20Explanation.png)

### Workflow for Updating Count on Button Click

1. **Button Click**: The user clicks the "Increment" button on the UI. This triggers an `onClick` event handler.

2. **Event Handler**: The event handler calls a function (e.g., `handleClick()`) that is responsible for dispatching actions.

3. **Dispatch Action**: The `handleClick()` function dispatches an action (e.g., `increment()`) to the Redux store. This action has a type that indicates it is meant to increment the count.

4. **Reducer Processing**: The dispatched action is sent to the appropriate reducer. The reducer receives the current state and the action, processes the action, and returns the updated state.

5. **Update Store**: The Redux store updates its state with the new count value.

6. **UI Update**: The UI is re-rendered to reflect the updated count. The component connected to the Redux store will automatically receive the new state and display the updated count.

This workflow illustrates how Redux efficiently manages state changes in response to user interactions, ensuring a seamless and predictable experience in your application.
