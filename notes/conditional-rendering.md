- In React, you control branching logic with JavaScript.
- You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
- In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
- The shortcuts are common, but you don’t have to use them if you prefer plain if.

```
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```