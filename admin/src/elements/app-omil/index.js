import { WeElement, define, h } from "omi";

// Recommend install omi-snippets plugins in VSC
// Omi-snippets: https://marketplace.visualstudio.com/items?itemName=Wscats.omi-snippets
import style from "./_index.css";

const appOmil = class extends WeElement {
  render() {
    return h(
      "div",
      {
        class: "app-omil"
      },
      h(
        "button",
        {
          onClick: this.omiSnippets.bind(this),
          class: "weui-btn weui-btn_primary",
          style: "width: 200px;"
        },
        this.data.title
      )
    );
  }

  static css =
    `
.weui-btn {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  line-height: 2.55555556;
  border-radius: 3px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  border-width: 0;
  width: 100%;
  border-width: 0;
  outline: 0;
  -webkit-appearance: none;
}
` +
    style +
    `
    button{
      background-color: #58bc58;
      cursor: pointer;
    }
  `;
  install() {
    this.data = {
      title: "Install Omi Snippets!"
    };
  }
  omiSnippets() {
    window.open(
      "https://marketplace.visualstudio.com/items?itemName=Wscats.omi-snippets"
    );
  }
};

define("app-omil", appOmil);
