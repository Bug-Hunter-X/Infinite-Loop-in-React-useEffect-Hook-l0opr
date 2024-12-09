# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop occurs within the `useEffect` hook.  The issue arises from incorrectly managing the dependency array and attempting to modify state within the effect in a way that triggers a re-render and subsequent execution of the effect.

## Bug Description
The `MyComponent` component uses `useState` to manage a count variable and `useEffect` to update it. However, the effect includes `count` in its dependency array and updates `count` inside the effect. This causes a continuous loop of updates, triggering re-renders and effect executions.