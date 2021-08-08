/*
 * json-diff.c
 *
 * Copyright (C) 2014 Andreas Gruenbacher <andreas.gruenbacher@gmail.com>
 *
 * Licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3,
 * http://www.fsf.org/licensing/licenses/agpl-3.0.html, or any later version.
 */

/*
 * Function json_diff(a, b)
 *
 * Create an RFC 6902 style patch between two JSON objects.
 * For example, json_diff({a: [9, 7]}, {a: [9, 8, 7]}) results in:
 * [{op: 'add', path: '/a/1', value: 8}].
 *
 * No cyclic references are allowed in a or b. Because the algorithm computes
 * differences between arrays in a way similar to the diff utility, it will
 * become slow for large arrays of complex objects.
 */
var json_diff = (function() {
  function equal(a, b) {
    if (a === b)
      return true;
    if (typeof a !== 'object' || typeof b !== 'object')
      return false;
    if (a === null || b === null)
      return false;
    if (a instanceof Array !== b instanceof Array)
      return false;
    if (a instanceof Array) {
      if (a.length != b.length)
	return false;
      for (var n = 0; n < a.length; n++)
	if (!equal(a[n], b[n]))
	  return false;
    } else {
      for (var key in a) {
	if (!(key in b) || !equal(a[key], b[key]))
	  return false;
      }
      for (var key in b) {
	if (!(key in a))
	  return false;
      }
    }
    return true;
  }

  function type(v) {
    if (typeof v === 'object') {
      if (v instanceof Array)
	return 'array';
      if (v === null)
	return 'null';
    }
    return typeof v  // 'undefined', 'string', 'number', 'boolean'
  }

  // The actual json_diff function
  return function(a, b) {
    var path = [], operations = [];

    function json_pointer(tail) {
      if (tail === undefined)
	return '/';
      else {
	path.push(tail);
	var pointer = '';
	for (var n = 0; n < path.length; n++)
	  pointer = pointer + '/' + path[n].toString().replace(/~/g, '~0').replace(/\//g, '~1');
	path.pop();
	return pointer;
      }
    }

    function result(op, tail, value) {
      var pointer = json_pointer(tail);
      if (op === 'remove')
	operations.push({op: op, path: pointer});
      else
	operations.push({op: op, path: pointer,
			 value: value === undefined ? null : value});
    }

    // Based on the Dynamic Programming Longest Common Subsequence algorithm at
    // http://rosettacode.org/wiki/Longest_common_subsequence#JavaScript
    function diffseq(a, b) {
      var i, j, m, n,
	  row = [], c = [],
	  left, diag, latch;
      var skip, edit = [];

      m = a.length;
      n = b.length;

      // ignore equal elements at both ends
      for (; m && n; m--, n--)
	if (!equal(a[m - 1], b[n - 1]))
	  break;
      for (skip = 0; m && n; skip++, m--, n--)
	if (!equal(a[skip], b[skip]))
	  break;

      if (m && n) {
	//build the c-table
	for (j = 0; j < n; row[j++] = 0);
	for (i = 0 ; i < m; i++) {
	  c[i] = row = row.slice();
	  for (diag = 0, j = 0; j < n; j++, diag = latch) {
	    latch = row[j];
	    if (equal(a[i + skip], b[j + skip]))
	      row[j] = diag + 1;
	    else {
	      left = row[j - 1] || 0;
	      if (left > row[j])
		row[j] = left;
	    }
	  }
	}
	i--, j--;

	//row[j] now contains the length of the lcs
	//compute the edit sequence from the table
	while (i > -1 && j > -1) {
	  switch (c[i][j]) {
	    default:
	      edit.unshift('=');
	      i--; j--;
	      break;
	    case j && c[i][j - 1]:
	      edit.unshift('+');
	      j--;
	      break;
	    case i && c[i - 1][j]:
	      edit.unshift('-');
	      i--;
	      break;
	  }
	}
      } else {
	i = m - 1;
	j = n - 1;
      }
      for (; j > -1; j--)
	edit.unshift('+');
      for (; i > -1; i--)
	edit.unshift('-');

      var edit_replace = [];
      for (n = 0; n < edit.length; n++) {
	if (edit[n] === '-') {
	  for (i = n + 1; i < edit.length && edit[i] === '-'; i++);
	  for (j = i; j < edit.length && edit[j] === '+'; j++);
	  if (i - n == j - i) {
	    while (i++ < j)
	      edit_replace.push('*');
	    n = j - 1;
	  } else {
	    for (; n < j; n++)
	      edit_replace.push(edit[n]);
	    n--;
	  }
	} else
	  edit_replace.push(edit[n]);
      }
      // console.log('>>> ' + skip + ' ' + edit.join('') + ' ' + edit_replace.join(''));
      edit = edit_replace;

      for (i = 0, j = 0, n = 0; n < edit.length; n++) {
	switch(edit[n]) {
	  case '*':
	    diff_recursive(a[i + skip], b[j + skip], j + skip);
	  case '=':
	    i++;
	    j++;
	    break;
	  case '-':
	    result('remove', j + skip);
	    i++;
	    break;
	  case '+':
	    result('add', j + skip, b[j + skip]);
	    j++;
	    break;
	}
      }
    }

    function diff_arrays(a, b, tail) {
      if (tail !== undefined)
	path.push(tail);
      diffseq(a, b);
      if (tail !== undefined)
	path.pop();
    }

    function diff_objects(a, b, tail) {
      if (tail !== undefined)
	path.push(tail);
      for (var key in a) {
	if (key in b)
	  diff_recursive(a[key], b[key], key);
	else
	  result('remove', key);
      }
      for (var key in b) {
	if (!(key in a))
	  result('add', key, b[key]);
      }
      if (tail !== undefined)
	path.pop();
    }

    function diff_recursive(a, b, tail) {
      if (a === b)
	return;
      var ta = type(a), tb = type(b);
      if (ta !== tb)
	result('replace', tail, b);
      else {
	switch(ta) {
	  case 'object':
	    diff_objects(a, b, tail);
	    break;
	  case 'array':
	    diff_arrays(a, b, tail);
	    break;
	  default:
	    result('replace', tail, b);
	}
      }
    }

    diff_recursive(a, b, undefined);
    return operations;
  };
})();

if (typeof exports !== 'undefined')
  exports.diff = json_diff;
