/**
 * omi-router v3.0.4 http://omijs.org
 * Front End Cross-Frameworks Framework.
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi
 * MIT Licensed.
 */

/**
 * Expose `pathToRegexp`.
 */
var _pathToRegexp_3_2_0_pathToRegexp = pathToRegexp;
var match_1 = match;
var regexpToFunction_1 = regexpToFunction;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/';

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
  var whitelist = (options && options.whitelist) || undefined;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue
    }

    var prev = '';
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;
      var c = path[k];
      var matches = whitelist ? whitelist.indexOf(c) > -1 : true;

      if (matches) {
        prev = c;
        path = path.slice(0, k);
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
      pathEscaped = false;
    }

    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var pattern = capture || group;
    var delimiter = prev || defaultDelimiter;

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: pattern
        ? escapeGroup(pattern)
        : '[^' + escapeString(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'
    });
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Create path match function from `path-to-regexp` spec.
 */
function match (str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys)
}

/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction (re, keys) {
  return function (pathname, options) {
    var m = re.exec(pathname);
    if (!m) return false

    var path = m[0];
    var index = m.index;
    var params = {};
    var decode = (options && options.decode) || decodeURIComponent;

    for (var i = 1; i < m.length; i++) {
      if (m[i] === undefined) continue

      var key = keys[i - 1];

      if (key.repeat) {
        params[key.name] = m[i].split(key.delimiter).map(function (value) {
          return decode(value, key)
        });
      } else {
        params[key.name] = decode(m[i], key);
      }
    }

    return { path: path, index: index, params: params }
  }
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (data, options) {
    var path = '';
    var encode = (options && options.encode) || encodeURIComponent;
    var validate = options ? options.validate !== false : true;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue
      }

      var value = data ? data[token.name] : undefined;
      var segment;

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment;
        continue
      }

      if (token.optional) continue

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      });
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {};

  var strict = options.strict;
  var start = options.start !== false;
  var end = options.end !== false;
  var delimiter = options.delimiter || DEFAULT_DELIMITER;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = start ? '^' : '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern;

      if (keys) keys.push(token);

      if (token.optional) {
        if (!token.prefix) {
          route += '(' + capture + ')?';
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')';
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + escapeString(delimiter) + ')?';

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === 'string'
      ? endToken[endToken.length - 1] === delimiter
      : endToken === undefined;

    if (!strict) route += '(?:' + escapeString(delimiter) + '(?=' + endsWith + '))?';
    if (!isEndDelimited) route += '(?=' + escapeString(delimiter) + '|' + endsWith + ')';
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}
_pathToRegexp_3_2_0_pathToRegexp.match = match_1;
_pathToRegexp_3_2_0_pathToRegexp.regexpToFunction = regexpToFunction_1;
_pathToRegexp_3_2_0_pathToRegexp.parse = parse_1;
_pathToRegexp_3_2_0_pathToRegexp.compile = compile_1;
_pathToRegexp_3_2_0_pathToRegexp.tokensToFunction = tokensToFunction_1;
_pathToRegexp_3_2_0_pathToRegexp.tokensToRegExp = tokensToRegExp_1;

var p2r = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _pathToRegexp_3_2_0_pathToRegexp,
  __moduleExports: _pathToRegexp_3_2_0_pathToRegexp,
  match: match_1,
  regexpToFunction: regexpToFunction_1,
  parse: parse_1,
  compile: compile_1,
  tokensToFunction: tokensToFunction_1,
  tokensToRegExp: tokensToRegExp_1
});

/*!
 *  omi-router v3.0.1 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
 */
var mapping = {};
var root = getGlobal();
root.route = route;
root.route.params = null;
root.historyLength = 0;
root.route.to = function (path, data) {
    root.route._routeByTo = true;
    root.route.data = data;
    if (path[0] === '#') {
        location.hash = path;
    }
    else {
        location.hash = '#' + path;
    }
};
window.addEventListener('hashchange', hashChange);
function hashChange(evt) {
    var byNative = false;
    //need to fix a line by omi-link
    if (window.history.length === root.historyLength && !root.route._routeByTo) {
        //keep alive mode
        byNative = true;
    }
    root.route._routeByTo = false;
    root.historyLength = window.history.length;
    var prevent = false;
    if (root.route.before) {
        prevent = root.route.before(evt) === false;
    }
    if (prevent)
        return;
    var path = window.location.hash.replace('#', '');
    if (path === '')
        path = '/';
    var notFound = true;
    Object.keys(mapping).every(function (key) {
        var toArr = path.split('?')[0].match(mapping[key].reg);
        if (toArr) {
            var pathArr = key.match(mapping[key].reg);
            root.route.params = getParams(toArr, pathArr);
            root.route.query = getUrlParams(path);
            mapping[key].callback({
                params: root.route.params,
                query: getUrlParams(path),
                data: root.route.data,
                byNative: byNative
            });
            root.route.data = null;
            notFound = false;
            return false;
        }
        return true;
    });
    if (notFound) {
        mapping['*'] && mapping['*'].callback({ byNative: byNative });
    }
    if (root.route.after) {
        root.route.after(evt);
    }
}
document.addEventListener('DOMContentLoaded', hashChange);
function getParams(toArr, pathArr) {
    var params = {};
    toArr.forEach(function (item, index) {
        if (index > 0) {
            params[pathArr[index].replace(':', '')] = item;
        }
    });
    return params;
}
function route(path, callback) {
    mapping[path] = {
        callback: callback,
        reg: _pathToRegexp_3_2_0_pathToRegexp ? _pathToRegexp_3_2_0_pathToRegexp(path) : p2r(path)
    };
}
var router = { route: route, hashChange: hashChange };
function getGlobal() {
    if (typeof global !== 'object' ||
        !global ||
        global.Math !== Math ||
        global.Array !== Array) {
        return (self ||
            window ||
            global ||
            (function () {
                return this;
            })());
    }
    return global;
}
function getUrlParams(url) {
    url = url.replace(/#.*$/, '');
    var queryArray = url.split(/[?&]/).slice(1);
    var i, args = {};
    for (i = 0; i < queryArray.length; i++) {
        var match = queryArray[i].match(/([^=]+)=([^=]+)/);
        if (match !== null) {
            args[match[1]] = decodeURIComponent(match[2]);
        }
    }
    return args;
}

export { router as default, hashChange, route };
//# sourceMappingURL=index.esm.js.map
