/**
 * preact-render-to-string based on preact-render-to-string
 * by Jason Miller
 * Licensed under the MIT License
 * https://github.com/developit/preact-render-to-string
 *
 * modified by dntzhang
 */

import options from './options'

import {
  addScopedAttrStatic,
  getCtorName,
  scopeHost,
  scoper
} from './style'


const encodeEntities = s => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const indent = (s, char) => String(s).replace(/(\n+)/g, '$1' + (char || '\t'));

const mapping = options.mapping

const VOID_ELEMENTS = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;

const isLargeString = (s, length, ignoreLines) => (String(s).length > (length || 40) || (!ignoreLines && String(s).indexOf('\n') !== -1) || String(s).indexOf('<') !== -1);

const JS_TO_CSS = {};

// Convert an Object style to a CSSText string
function styleObjToCss(s) {
  let str = '';
  for (let prop in s) {
    let val = s[prop];
    if (val != null) {
      if (str) str += ' ';
      // str += jsToCss(prop);
      str += JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(/([A-Z])/g, '-$1').toLowerCase());
      str += ': ';
      str += val;
      if (typeof val === 'number' && IS_NON_DIMENSIONAL.test(prop) === false) {
        str += 'px';
      }
      str += ';';
    }
  }
  return str || undefined;
}

/** The default export is an alias of `render()`. */
export function renderToString(vnode, opts, store, isSvgMode, css) {
  if (vnode == null || typeof vnode === 'boolean') {
    return '';
  }

  let nodeName = vnode.nodeName,
    attributes = vnode.attributes,
    isComponent = false;
  store = store || {};
  opts = Object.assign({
    scopedCSS: true
  },opts)

  let pretty = true && opts.pretty,
    indentChar = pretty && typeof pretty === 'string' ? pretty : '\t';

  // #text nodes
  if (typeof vnode !== 'object' && !nodeName) {
    return encodeEntities(vnode);
  }

  // components
  const ctor = mapping[nodeName]
  if (ctor) {
    isComponent = true;

    let props = getNodeProps(vnode),
      rendered;
    // class-based components
    let c = new ctor(props, store);
    // turn off stateful re-rendering:
    c._disable = c.__x = true;
    c.props = props;
    c.store = store;
    if (c.install) c.install();
    if (c.beforeRender) c.beforeRender();
    rendered = c.render(c.props, c.data, c.store);
    let tempCss 
    if(opts.scopedCSS){

      if(c.css){
        const cssStr = typeof c.css === 'function' ? c.css() : c.css
        const cssAttr = '_s' + getCtorName(c.constructor)

        tempCss = `<style type="text/css" id="${cssAttr}">${scoper(cssStr, cssAttr)}</style>`
      }
      if (c.css) {
        addScopedAttrStatic(
          rendered,
          '_s' + getCtorName(c.constructor)
        )
      }
    
      c.scopedCSSAttr = vnode.css
      scopeHost(rendered, c.scopedCSSAttr)
    }

    return renderToString(rendered, opts, store, false, tempCss);
  }


  // render JSX to HTML
  let s = '', html;

  if (attributes) {
    let attrs = Object.keys(attributes);

    // allow sorting lexicographically for more determinism (useful for tests, such as via preact-jsx-chai)
    if (opts && opts.sortAttributes === true) attrs.sort();

    for (let i = 0; i < attrs.length; i++) {
      let name = attrs[i],
        v = attributes[name];
      if (name === 'children') continue;

      if (name.match(/[\s\n\\/='"\0<>]/)) continue;

      if (!(opts && opts.allAttributes) && (name === 'key' || name === 'ref')) continue;

      if (name === 'className') {
        if (attributes.class) continue;
        name = 'class';
      }
      else if (isSvgMode && name.match(/^xlink:?./)) {
        name = name.toLowerCase().replace(/^xlink:?/, 'xlink:');
      }

      if (name === 'style' && v && typeof v === 'object') {
        v = styleObjToCss(v);
      }

      let hooked = opts.attributeHook && opts.attributeHook(name, v, store, opts, isComponent);
      if (hooked || hooked === '') {
        s += hooked;
        continue;
      }

      if (name === 'dangerouslySetInnerHTML') {
        html = v && v.__html;
      }
      else if ((v || v === 0 || v === '') && typeof v !== 'function') {
        if (v === true || v === '') {
          v = name;
          // in non-xml mode, allow boolean attributes
          if (!opts || !opts.xml) {
            s += ' ' + name;
            continue;
          }
        }
        s += ` ${name}="${encodeEntities(v)}"`;
      }
    }
  }

  // account for >1 multiline attribute
  if (pretty) {
    let sub = s.replace(/^\n\s*/, ' ');
    if (sub !== s && !~sub.indexOf('\n')) s = sub;
    else if (pretty && ~s.indexOf('\n')) s += '\n';
  }

  s = `<${nodeName}${s}>`;
  if (String(nodeName).match(/[\s\n\\/='"\0<>]/)) throw s;

  let isVoid = String(nodeName).match(VOID_ELEMENTS);
  if (isVoid) s = s.replace(/>$/, ' />');

  let pieces = [];
  if (html) {
    // if multiline, indent.
    if (pretty && isLargeString(html)) {
      html = '\n' + indentChar + indent(html, indentChar);
    }
    s += html;
  }
  else if (vnode.children) {
    let hasLarge = pretty && ~s.indexOf('\n');
    for (let i = 0; i < vnode.children.length; i++) {
      let child = vnode.children[i];
      if (child != null && child !== false) {
        let childSvgMode = nodeName === 'svg' ? true : nodeName === 'foreignObject' ? false : isSvgMode,
          ret = renderToString(child, opts, store, childSvgMode);
        if (pretty && !hasLarge && isLargeString(ret)) hasLarge = true;
        if (ret) pieces.push(ret);
      }
    }
    if (pretty && hasLarge) {
      for (let i = pieces.length; i--;) {
        pieces[i] = '\n' + indentChar + indent(pieces[i], indentChar);
      }
    }
  }

  if (pieces.length) {
    s += pieces.join('');
  }
  else if (opts && opts.xml) {
    return s.substring(0, s.length - 1) + ' />';
  }

  if (!isVoid) {
    if (pretty && ~s.indexOf('\n')) s += '\n';
    s += `</${nodeName}>`;
  }

  if(css) return css + s;
  return s;
}

function assign(obj, props) {
  for (let i in props) obj[i] = props[i];
  return obj;
}

function getNodeProps(vnode) {
  let props = assign({}, vnode.attributes);
  props.children = vnode.children;

  let defaultProps = vnode.nodeName.defaultProps;
  if (defaultProps !== undefined) {
    for (let i in defaultProps) {
      if (props[i] === undefined) {
        props[i] = defaultProps[i];
      }
    }
  }

  return props;
}