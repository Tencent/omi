## Forms

It's much more convenient to control forms in Omi, especially `<select>`!

### select element

In the past, we needed to select an option in the following way:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

The third option is selected because it is being set to `selected` attribute. The problem is that developers need to traversed each option. While using Omi, you can write code like this:

```html
<select value="coconut">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

This will achieve the same effect. For example, you want to choose the first item:

```html
<select value="grapefruit">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Isn't it very convenient?

### For Example

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

<a href="http://alloyteam.github.io/omi/website/redirect.html?type=form" target="_blank">Click me for a live demo</a>