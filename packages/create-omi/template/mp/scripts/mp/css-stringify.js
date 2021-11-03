
var actionTypes = {
	"equals": "",
	"element": "~",
	"start": "^",
	"end": "$",
	"any": "*",
	"not": "!",
	"hyphen": "|"
};

var simpleSelectors = {
	__proto__: null,
	child: " > ",
	parent: " < ",
	sibling: " ~ ",
	adjacent: " + ",
    descendant: " ",
    universal: "*"
};



function stringify(token){
  return token.map(stringifySubselector).join(", ");
}

function stringifySubselector(token){
  return token.map(stringifyToken).join("");
}

function stringifyToken(token){
  if(token.type in simpleSelectors) return simpleSelectors[token.type];

  if(token.type === "tag") return escapeName(token.name);

  if(token.type === "attribute"){
      if(token.action === "exists") return "[" + escapeName(token.name) + "]";
      if(token.name === "id" && token.action === "equals" && !token.ignoreCase) return "#" + escapeName(token.value);
      if(token.name === "class" && token.action === "element" && !token.ignoreCase) return "." + escapeName(token.value);
      return "[" +
          escapeName(token.name) + actionTypes[token.action] + "='" +
          escapeName(token.value) + "'" + (token.ignoreCase ? "i" : "") + "]";
  }

  if(token.type === "pseudo"){
      if(token.data === null) return ":" + escapeName(token.name);
      if(typeof token.data === "string") return ":" + escapeName(token.name) + "(" + token.data + ")";
      return ":" + escapeName(token.name) + "(" + stringify(token.data) + ")";
  }
}

function escapeName(str){
  //TODO
  return str;
}

module.exports = stringify
