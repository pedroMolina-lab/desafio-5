const scissors = require("url:../../../src/imagenes/tijeras.png");

customElements.define(
  "scissors-el",
  class Rock extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      this.shadow.innerHTML = `
      <img class="scissors" src = "${scissors}">
            `;
      style.innerHTML = `
        .scissors{
          width:100%;
          height:100%;
        }
      `;
      this.shadow.appendChild(style);
    }
  }
);
