export default class CssRuleSet {
  constructor(selector) {
    //string
    this.selector = selector
    //Array<CSSRule>;
		this.rules = new Array()
  }
}

package tannus.css;

import tannus.css.CSSRule;
import tannus.core.Object;

class CSSRuleSet {

	public function addSelector(sel:String):CSSRuleSet {
		this.selector += sel;
		return this;
	}
	
	public function hasRule(name:String):Bool {
		for (rule in rules) {
			if (rule.name == name) return true;
		}
		return false;
	}

	private function getCSSRule(name:String):Null<CSSRule> {
		for (rule in rules) {
			if (rule.name == name) return rule;
		}
		return null;
	}
	public function getRule(name:String):Null<String> {
		var rule:Null<CSSRule> = getCSSRule(name);
		if (rule != null) {
			return rule.value;
		} else {
			return null;
		}
	}

	public function setRule(name:String, value:String):Void {
		var rule:Null<CSSRule> = getCSSRule(name);
		if (rule != null) {
			rule.value = value;
		} else {
			rules.push(new CSSRule(name, value));
		}
	}

	public function toString():String {
		var code:String = '';
		for (rule in rules) {
			code += '${rule.name}: ${rule.value};';
		}
		if (selector != null) {
			code = ('${selector} {' + code + '}');
		}
		return code;
	}
	public function toObject():Object {
		var obj:Object = new Object({});

		for (rule in rules) {
			obj[rule.name] = rule.value;
		}

		return obj;
	}

	public static function fromObject(obj:Object):CSSRuleSet {
		var set:CSSRuleSet = new CSSRuleSet();
		for (key in obj.keys()) {
			set.setRule(key, obj[key]);
		}
		return set;
	}

	public static function parse(txt:String):CSSRuleSet {
		var set:CSSRuleSet = new CSSRuleSet();
		var assigns:Array<String> = txt.split(';');

		for (ass in assigns) {
			var name:String = ass.substring(0, ass.indexOf(':'));
			var value:String = ass.substring(ass.indexOf(':')+1);
			set.setRule(name, value);
		}
		return set;
	}

	#if client
		public static function fromElement(el:js.html.Element):CSSRuleSet {
			var computed = js.Browser.window.getComputedStyle(el);
			var rules = new CSSRuleSet();

			for (key in computed) {
				rules.setRule(key, computed.getPropertyValue(key));
			}

			return rules;
		}
	#end
}