import CSSRule from './css-rule'

export default class CSSRuleSet {
  constructor(selector) {
    //string
    this.selector = selector || ''
    //Array<CSSRule>;
    this.rules = new Array()
  }

  addSelector(sel) {
    this.selector += sel
    return this
  }


  hasRule(name) {
    for (let i = 0, len = this.rules.length; i < len; i++) {
      if (this.rules[i].name === name) {
        return true
      }
    }
    return false
  }

  getCSSRule(name) {
    for (let i = 0, len = this.rules.length; i < len; i++) {
      if (this.rules[i].name === name) {
        return this.rules[i]
      }
    }
    return null
  }

  getRule(name) {
    const rule = this.getCSSRule(name)
    if (rule !== null) {
      return rule.value
    } else {
      return null
    }
  }

  setRule(name, value) {
    const rule = this.getCSSRule(name);
    if (rule !== null) {
      rule.value = value
    } else {
      this.rules.push(new CSSRule(name, value))
    }
  }

  toString() {
    const code = '';
    for (let i = 0, len = this.rules.length; i < len; i++) {
      const rule = this.rules[i]
      code += `${rule.name}: ${rule.value};`
    }
    if (this.selector !== null) {
      code = (`${this.selector} {` + code + '}')
    }
    return code
  }

  toObject() {
    const obj = {}

    for (let i = 0, len = this.rules.length; i < len; i++) {
      const rule = this.rules[i]
      obj[rule.name] = rule.value;
    }

    return obj
  }

  static fromObject = (obj) => {
    const set = new CSSRuleSet()
    for (let key in obj) {
      set.setRule(key, obj[key])
    }
    return set
  }

  static parse = (txt) => {
    const set = new CSSRuleSet()
    const assigns = txt.split(';')

    assigns.forEach(ass => {
      const name = ass.substring(0, ass.indexOf(':'))
      const value = ass.substring(ass.indexOf(':') + 1)
      set.setRule(name, value)
    })
    return set
  }

  //client
  static fromElement = (el) => {
    const computed = window.getComputedStyle(el)
    const rules = new CSSRuleSet()

    for (let key in computed) {
      rules.setRule(key, computed.getPropertyValue(key));
    }

    return rules
  }

}
