English | [简体中文](./README.CN.md) 

# Omio

> Omi for old browsers(IE9+ and mobile browsers)

---

## Install

``` bash
npm i omio
```

## Webpack Alias

If you want to use omio under existing omi projects, no code changes are required through the following configuration:

```js
module.exports = {
  //...
  resolve: {
    alias: {
      omi: 'omio'
    }
  }
};
```

## Differences to omi

What's the difference between the `css` and the `staticCss` method? For example：

``` js
render() {
        return (
		<div>
			<Hello name={this.name}></Hello>
			<Hello name={this.name}></Hello>
			<Hello name={this.name}></Hello>
		</div>
		)
    }
```

The `css` method will render three times to html head element, the `staticCss` will render one times only !
When you update the component `css` method will rerender, but the `staticCss` will not rerender.

## License

MIT © [dntzhang](https://github.com/dntzhang)
