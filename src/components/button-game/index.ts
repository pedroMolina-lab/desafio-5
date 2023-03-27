customElements.define(
  "button-el",
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const button = document.createElement("button");
      const style = document.createElement("style");
      button.className = "button-game";

      style.innerHTML = `
        .button-game{
            background-color: var(--background-button);
            border: 10px #001997;
            width: 332px;
            height: 87px;
            font-family: "Odibee Sans";
            font-size: 45px;
            color: var(--color-button);
        }
        `;

      button.textContent = this.textContent;
      this.shadow.appendChild(button);
      this.shadow.appendChild(style);
    }
  }
);
