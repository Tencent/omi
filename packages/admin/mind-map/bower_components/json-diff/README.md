json-diff
=========

Create [RFC 6902](http://www.rfc-editor.org/rfc/rfc6902.txt) style patches
between JSON objects.

For example, `json_diff({a: [9, 7]}, {a: [9, 8, 7]})` results in
`[{op: 'add', path: '/a/1', value: 8}]`.

No cyclic references are allowed in the objects being compared. The algorithm
computes differences between arrays in a way similar to the diff utility, so it
will become slow for large arrays of complex objects.
