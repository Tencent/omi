<h2 id="表单">表单</h2>

Omi让一些表单操控起来更加方便，特别是select！

### select标签

以前，我们需要像如下的方式选中一个选项：

```js
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

第三个option由于加上了selected，所有会被选中。这样带来的问题就是，开发者写的程序可能要操遍历每个option。而使用Omi，你只需要这样子：

```js
<select value="coconut">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

这样就能达到同样的效果。比如你想选择第一项：

```js
<select value="grapefruit">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

是不是非常方便？

###  举个例子

```js
class FormTest extends Omi.Component {
    constructor(data) {
        super(data);
       
    }

    handleChange(target){
      console.log(target.value)
      this.data.value = target.value;
    }

    handleSubmit(evt) {
      alert('Your favorite flavor is: ' + this.data.value);
      evt.preventDefault();
    }
  
    render () {
        return `
        <form onsubmit="handleSubmit(event)">
        <label>
          Pick your favorite La Croix flavor:
          <select value="{{value}}" onchange="handleChange(this)">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>`;
    }
}

Omi.render(new FormTest({ value: 'mango' }),'#container');
```

### 在线试试

