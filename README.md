# sandbox

creates a sandbox with access only to the provided scope. Allows eval execution confined within this scope.

## Examples:

### Basic

```javascript
const Sandbox = require('@ih/sandbox');
const sb = new Sandbox();
const obj = sb.eval('{ add: (a, b) => a + b }');
console.log(obj.add(1, 5));
```

### With provided scope

```javascript
const scope = { a: 1 };
const sb = new Sandbox(scope);
const obj = sb.eval('{ add: (a, b) => a + b, test: () => a += 1 }');
console.log(obj.add(1, 5));
console.log(scope);
obj.test();
console.log(scope);
```
