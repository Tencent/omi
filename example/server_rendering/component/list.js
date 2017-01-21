function makeList(Omi){
    var List =  Omi.create("List",{
        render:function(){
            return `<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>`;
        }
    })

    return List;
}

if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports =  makeList ;
} else {
    this.makeList = makeList;
}