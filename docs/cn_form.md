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
点击这里->[在线试试](http://alloyteam.github.io/omi/example/playground/index.html?code=class%20FormTest%20extends%20Omi.Component%20%7B%0A%20%20%20%20constructor(data)%20%7B%0A%20%20%20%20%20%20%20%20super(data)%3B%0A%20%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%0A%20%20%20%20handleChange(target)%7B%0A%20%20%20%20%20%20console.log(target.value)%0A%20%20%20%20%20%20this.data.value%20%3D%20target.value%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20handleSubmit(evt)%20%7B%0A%20%20%20%20%20%20alert(%27Your%20favorite%20flavor%20is%3A%20%27%20%2B%20this.data.value)%3B%0A%20%20%20%20%20%20evt.preventDefault()%3B%0A%20%20%20%20%7D%0A%20%20%0A%20%20%20%20render%20()%20%7B%0A%20%20%20%20%20%20%20%20return%20%60%0A%20%20%20%20%20%20%20%20%3Cform%20onsubmit%3D%22handleSubmit(event)%22%3E%0A%20%20%20%20%20%20%20%20%3Clabel%3E%0A%20%20%20%20%20%20%20%20%20%20Pick%20your%20favorite%20La%20Croix%20flavor%3A%0A%20%20%20%20%20%20%20%20%20%20%3Cselect%20value%3D%22%7B%7Bvalue%7D%7D%22%20onchange%3D%22handleChange(this)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22grapefruit%22%3EGrapefruit%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22lime%22%3ELime%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22coconut%22%3ECoconut%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Coption%20value%3D%22mango%22%3EMango%3C%2Foption%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fselect%3E%0A%20%20%20%20%20%20%20%20%3C%2Flabel%3E%0A%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22submit%22%20value%3D%22Submit%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fform%3E%60%3B%0A%20%20%20%20%7D%0A%7D%20%0A%0AOmi.render(new%20FormTest(%7B%20value%3A%20%27mango%27%20%7D)%2C%27%23container%27)%3B%20%20)