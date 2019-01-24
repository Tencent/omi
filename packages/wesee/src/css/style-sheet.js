
import CSSRuleSet from './css-rule-set'

/**
 * class StyleSheet - An object representation of a CSS StyleSheet
 */
class StyleSheet {
  
  constructor(){
    //Array<CssRuleSet>
    this.rulesets = []
  }

	/**
	 * Finds first rule-set with given selector-string, then returns it
	 * If none is found, returns null
	 * @param  sel <String> - Selector-String to search for
	 * @return Null<CSSRuleSet>
	 */
	  getSet(sel ) {
      for(let i=0,len=this.rulesets.length;i<len;i++){
        if(sel==this.rulesets[i].selector){
          return this.rulesets[i]
        }
      }
	}

	/**
	 * Queries whether a rule-set exists with the given selector-string
	 * @param sel <String> - Selector-String to search for
	 * @return Bool
	 */
	 hasSet(sel) {
		return this.getSet(sel) !== undefined
	}

	/**
	 * creates a new rule-set, adds it to the list of rule-sets, and returns it
	 * @param sel < Null<String> > - optional Selector-String to associate with created rule-set
	 */
	 addSet(sel ) {
		const set = new CSSRuleSet(sel)

		this.rulesets.push(set)

		return set
	}
}