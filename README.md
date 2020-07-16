# wait [![](https://img.shields.io/npm/v/@lets/wait.svg)](https://www.npmjs.com/package/@lets/wait) [![](https://img.shields.io/badge/source--000000.svg?logo=github&style=social)](https://github.com/omrilotan/wait) [![](https://badgen.net/bundlephobia/minzip/@lets/wait)](https://bundlephobia.com/result?p=@lets/wait)

## ⏲ A promising wait function

```js
const wait = require('@lets/wait');

...
await wait(200);
...
```

Or as a promise
```js
wait(200).then(...);
```

seconds
```js
# Seconds
wait.s(2) // Acceptable: s, second, seconds

# Minutes
wait.m(2) // Acceptable: m, minute, minutes

# Hours
wait.h(2) // Acceptable: h, hour, hours
```