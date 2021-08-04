var json_diff = require('./json-diff.js');

var failures = 0;

function expect(a, b, c) {
  var d = json_diff.diff(a, b);
  var ok = JSON.stringify(c) === JSON.stringify(d);
  console.log(JSON.stringify(a) + ' ' + JSON.stringify(b) + ': ' +
	      (ok ? 'ok' : 'FAILURE: ') );
  if (!ok) {
    console.log('Expected: ' + JSON.stringify(c));
    console.log('Got: ' + JSON.stringify(d));
    failures++;
  }
}

expect({}, {}, [])
expect([], [], [])
expect([1], [1], [])
expect(['a'], ['a'], [])
expect([null], [null], [])
expect([true], [true], [])
expect([false], [false], [])
expect({a: 'a', b: 'b'}, {b: 'b', a: 'a'}, [])
expect([1, 2, 3], [1, 2, 3], [])

expect({}, {'//~~': ''}, [{op: 'add', path: '/~1~1~0~0', value: ''}])

expect(null, 1, [{op: 'replace', path: '/', value: 1}])
expect(1, null, [{op: 'replace', path: '/', value: null}])

expect([1], 1, [{op: 'replace', path: '/', value: 1}])
expect(1, [1], [{op: 'replace', path: '/', value: [1]}])

expect({a: 1}, 1, [{op: 'replace', path: '/', value: 1}])
expect(1, {a: 1}, [{op: 'replace', path: '/', value: {a: 1}}])

expect({a: 'a'}, {},
       [{op: 'remove', path: '/a'}])
expect({}, {a: 'a'},
       [{op: 'add', path: '/a', value: 'a'}])

expect([[1]], [],
       [{op: 'remove', path: '/0'}])
expect([], [1],
       [{op: 'add', path: '/0', value: 1}])

expect([], [[1]],
       [{op: 'add', path: '/0', value: [1]}])
expect([[]], [[1]],
       [{op: 'add', path: '/0/0', value: 1}])
expect({}, [],
       [{op: 'replace', path: '/', value: []}])

expect([2, 3], [1, 2, 3], [{op: 'add', path: '/0', value: 1}])
expect([1, 3], [1, 2, 3], [{op: 'add', path: '/1', value: 2}])
expect([1, 2], [1, 2, 3], [{op: 'add', path: '/2', value: 3}])
expect([1, 2, 3], [1, 4, 3], [{op: 'replace', path: '/1', value: 4}])

expect({a: [9, 8, 7], b: 2, c: 3}, {a: [9, 7], b: 2, c: 4, d: 5},
       [{op: 'remove', path: '/a/1'}, {op: 'replace', path: '/c', value: 4}, {op: 'add', path: '/d', value: 5}])

expect([1, 0, 0], [1, 1, 0], [{op: 'replace', path: '/1', value: 1}]);
expect([1, 1, 0], [1, 0, 0], [{op: 'replace', path: '/1', value: 0}]);

// Reverse examples from RFC 6902, as far as applicable:
expect({foo: 'bar'}, {baz: 'qux', foo: 'bar'}, [{op: 'add', path: '/baz', value: 'qux'}])
expect({foo: ['bar', 'baz']}, {foo: ['bar', 'qux', 'baz']}, [{op: 'add', path: '/foo/1', value: 'qux'}])
expect({baz: 'qux', foo: 'bar'}, {foo: 'bar'}, [{op: 'remove', path: '/baz'}])
expect({foo: ['bar', 'qux', 'baz']}, {foo: ['bar', 'baz']}, [{op: 'remove', path: '/foo/1'}])
expect({baz: 'qux', foo: 'bar'}, {baz: 'boo', foo: 'bar'}, [{op: 'replace', path: '/baz', value: 'boo'}])
expect({foo: 'bar'}, {foo: 'bar', child: {grandchild: {}}}, [{op: 'add', path: '/child', value: {'grandchild': {}}}])
expect({foo: ['bar']}, {foo: ['bar', ['abc', 'def']]}, [{op: 'add', path: '/foo/1', value: ['abc', 'def']}])

// In this case, it would be better to replace the entire array:
expect([0, 0], [1, 1],
       [{op: 'replace', path: '/0', value: 1}, {op: 'replace', path: '/1', value: 1}]);
// [{op: 'replace', path: '/', value: [1, 1]}]

// In this example, the array element at index 0 is actually undefined, but
// JSON.stringify({op:"add",path:"/0",value:undefined}) would result in
// '{"op":"add","path":"/0"}' which is invalid, so we must cast such undefined
// values to null.
expect([], [,1], [{"op":"add","path":"/0","value":null},{"op":"add","path":"/1","value":1}]);

if (failures) {
  console.log(failures + ' FAILURE(S)');
  process.exit(1);
}
