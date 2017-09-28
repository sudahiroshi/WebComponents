// fancy-button.js
// ↓のコードを記事用に改変
// https://github.com/1000ch/webcomponents-sandbox/blob/master/fancy-button.js
export default class FancyButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: inline-block;
          /* 中略 */
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = FancyButton.template;
  }
};
