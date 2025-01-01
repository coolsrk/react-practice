# useRef() Hook

- **Usecase:**
    - In React, managing state is crucial for rendering components effectively. However, when it comes to holding mutable values that don’t need to trigger a re-render, using state can be inefficient.
    - The `useRef` Hook addresses this by allowing a way to directly reference DOM elements or persist values across renders without causing unnecessary re-renders.
    - This is particularly useful for situations such as accessing DOM nodes directly, keeping track of timeouts, or storing previous state values without needing a full re-render of the component.

- **Ans? useRef() Hook!**

- **Three things happen while using useRef():**
    1. **Create Ref:**
        - Utilize `const ref = useRef(initialValue);` to create a mutable ref object.
    2. **Attach Ref to a Component:**
        - Use the `ref` attribute on a React component or DOM element, e.g., `<input ref={ref} />`.
    3. **Access Ref Value:**
        - To access or manipulate the ref, use `ref.current` to get the current value or DOM element directly.


# Open Questions

- How does `useRef` manage values differently from `useState`?
