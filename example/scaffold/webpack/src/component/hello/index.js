import Nuclear from "../../lib/nuclear.js"

var HelloMessage = Nuclear.create({
    say:function(){
        alert("Hello Nuclear!");
    },
    style:function(){
        return `div{
            color:green;
            cursor:pointer;
        }`;
    },
    render: function () {
        return `<div onclick="say()">Click Me ,Please!</div>`;
    }
});

export default  HelloMessage;