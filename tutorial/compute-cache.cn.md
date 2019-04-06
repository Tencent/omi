```js
function cacher(fn) {
  const cache = {}
  return function () {
    const key = [...arguments].join('-')
    if (cache.hasOwnProperty(key)) return cache[key]
    const result = fn.apply(null, arguments)
    cache[key] = result
    return result
  }
}

const add = cacher( (a, b) => a + b)


add(1, 3) //第一次计算
add(1, 3) //第二次直接从cache里取
```