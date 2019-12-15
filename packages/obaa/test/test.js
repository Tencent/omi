QUnit.test("simple", function (assert) {

  var obj = { a: 1 }
  var res
  obaa(obj, (a, b, c, d) => {

    res = [a, b, c, d]
  })
  obj.a = 2


  assert.deepEqual(res, ["a", 2, 1, "#"])

})

QUnit.test("no change", function (assert) {

  var obj = { a: 1 }
  var res
  obaa(obj, (a, b, c, d) => {

    res = [a, b, c, d]
  })
  obj.a = 1


  assert.equal(res, undefined)
})



QUnit.test("array push", function (assert) {

  var obj = [{ a: 1 }]
  var res
  obaa(obj, (a, b, c, d) => {

    res = { a, b, c, d }
  })
  obj.push({ a: 2 })


  assert.equal(res.a, 'Array-push')
  assert.equal(res.b.length, 2)
  assert.equal(res.c.length, 1)
  assert.equal(res.d, '#')
})



QUnit.test("array set", function (assert) {

  var obj = [{ a: 1 }]
  var res
  obaa(obj, (a, b, c, d) => {

    res = [a, b, c, d]
  })
  obj[0].a = 2


  assert.deepEqual(res, ["a", 2, 1, "#-0"])
})




QUnit.test("array length", function (assert) {

  var obj = [{ a: 1 }]
  var res
  obaa(obj, (a, b, c, d) => {

    res = { a, b, c, d }
  })
  obj.length = 0



  assert.equal(res, undefined)

})



QUnit.test("array size", function (assert) {

  var obj = [{ a: 1 }]
  var res
  obaa(obj, (a, b, c, d) => {

    res = { a, b, c, d }
  })
  obj.size(0)



  assert.equal(res.a, 'Array-size')
  assert.equal(res.b.length, 0)
  assert.equal(res.c.length, 1)
  assert.equal(res.d, '#')

})



QUnit.test("complex obj", function (assert) {

  var obj = { a: ['c', 'd'] }
  var res
  obaa(obj, (a, b, c, d) => {

    res = [a, b, c, d]
  })
  obj.a[0] = 'e'

  assert.deepEqual(res, ["0", "e", "c", "#-a"])


})

QUnit.test("empty obj", function (assert) {
  var obj = {}
  var res
  obaa(obj, (a, b, c, d) => {
    res = [a, b, c, d]
  })
  obaa.set(obj, 'newProp', 'newPropValue')
  assert.equal(obj.newProp, 'newPropValue')
})
