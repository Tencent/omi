var fs = require('fs')
var path = require('path')
var { parse: svgsonParse, stringify: svgsonStringify } = require('svgson')

const svg_dir = path.join(__dirname, '../../../../../../tdesign-icons/svg')

// 首字母大写，驼峰
function toTF(str) {
  var tf = str.split('-')
  var len = tf.length
  for (var i = 1; i < len; i++) {
    var k = tf[i].charAt(0)
    k = k.toUpperCase()
    tf[i] = tf[i].replace(tf[i].charAt(0), k)
  }
  str = ''
  for (var j = 0; j < len; j++) {
    str += tf[j]
  }
  var k = str.charAt(0)
  k = k.toUpperCase()
  str = str.replace(str.charAt(0), k)
  return str
}

function resetFill(children) {
  children.map((child) => {
    if ('fill' in child.attributes) {
      child.attributes['fill'] = 'currentColor'
    }
    if ('children' in child && child.children.length > 0) {
      resetFill(child.children)
    }
  })
}
const svg_files = fs.readdirSync(svg_dir)

function generate_tsx() {
  svg_files.forEach((file_name) => {
    const icon_name = file_name.substring(0, file_name.length - 4)
    fs.readFile(path.join(svg_dir, file_name), 'utf8', (err, data) => {
      if (err) {
        console.log('svg文件读取报错: ', icon_name, err.message)
      }
      svgsonParse(data).then((json) => {
        resetFill(json.children)
        const svg_children = svgsonStringify(json.children)
        const code = `
import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-${icon_name}')
export default class ${toTF(icon_name)} extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [\`\${TdClassNamePrefix('size-s')}\`]: props.size === 'small',
      [\`\${TdClassNamePrefix('size-m')}\`]: props.size === 'medium',
      [\`\${TdClassNamePrefix('size-l')}\`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${svg_children}
      </svg>
    )
  }
}
      `
        fs.writeFile(path.join(__dirname, `../${icon_name}.tsx`), code, (err) => {
          if (err) {
            console.log('文件写入失败: ', icon_name)
          }
        })
      })
    })
  })
}

function generate_index() {
  let importStr = ''
  let exportStr = ''
  svg_files.forEach((file_name) => {
    const icon_name = file_name.substring(0, file_name.length - 4)
    importStr += `import _${toTF(icon_name)}Icon from './${icon_name}'
    `
    exportStr += `export const ${toTF(icon_name)}Icon = _${toTF(icon_name)}Icon
    `
  })
  fs.writeFile(path.join(__dirname, `./index.ts`), importStr + exportStr, (err) => {
    if (err) {
      console.log('文件写入失败')
    }
  })
}

generate_tsx()
// generate_index()
