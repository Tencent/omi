## obaa

Observe any object's any change in 0.1KB javascript.

### Install

```js
npm install obaa
```

## Usage

### observe object

```js
var obj = { a: 1 };
observe(obj, function (name, value , old) {
    console.log(name + "__" + value + "__" + old);
});
obj.a = 2; //a__2__1 
```

### observe array

```js
var arr = [1, 2, 3];
observe(arr, function (name, value, old) {
    console.log(name + "__" + value+"__"+old);
});
arr.push(4);//Array-push__[1,2,3,4]__[1,2,3] 
arr[3] = 5;//3__5__4
```

### observe class instance

```js
var User = function (name, age) {
    this.name = name;
    this.age = age;
    //observe name only
    observe(this, ["name"], function (name, value, oldValue) {
        console.log(name + "__" + value + "__" + oldValue);
    });
}
var user = new User("lisi", 25);
user.name = "wangwu";//name__wangwu__lisi 
user.age = 20; //nothing output
```

## Other


```js
arr.push(111) //trigger observe callback
//every method of array has a pureXXX function
arr.purePush(111) //don't trigger observe callback

arr.size(2) //trigger observe callback
arr.length = 2 //don't trigger observe callback

//if obj.c is undefined
obaa.set(obj, 'c', 3)
obj.c = 4 //trigger observe callback

//if obj.c is undefined
obj.c = 3
obj.c = 4 //don't trigger observe callback
```

## License 

MIT © [dntzhang](https://github.com/dntzhang/)
