const paper = require("url:../../../src/imagenes/papel.png");

customElements.define(
  "paper-el",
  class Paper extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      this.shadow.innerHTML = `
      <img class="paper" src ="${paper}">
            `;
      style.innerHTML = `
        .paper{
          width:100%;
          height:100%;
        }
      `;
      this.shadow.appendChild(style);
    }
  }
);
