```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation; no infinite loop.
    // You might need to perform side-effects here,
    // But it should not update the count directly
    console.log("Count changed",count);
  }, [/* Empty Dependency Array - runs only once on mount*/]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```