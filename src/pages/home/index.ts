const imageHome = require("url:../../../src/imagenes/img-home.png");

export function initHome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
        <img src="${imageHome}" class="img-title"></img>
        <button-el class="button-game">Comenzar</button-el>
<div class="conteiner-hands">
        <rock-el class="hand-rock"></rock-el>
        <paper-el class="hand-paper"></paper-el>
        <scissors-el class="hand-scissors"></scissors-el>
</div>
    `;
  const style = document.createElement("style");
  div.classList.add("home-container");

  style.innerHTML = `
  .home-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    height:100vh;
}

.conteiner-hands{
  display:flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom:10px;

}
  .img-title{
    width: 284px;
    height: 200px;
    margin-top: 114px;
  }
  @media(min-width:768px){
    .img-title{
        width:600px;
        height:400px;
    }
    @media(min-width:768px){
      .hand-rock, .hand-paper, .hand-scissors{
          width:200px;
          height:200px;
      }
  `;

  const button = div.querySelector(".button-game");
  button.addEventListener("click", () => {
    params.goTo("/instruction");
  });
  div.appendChild(style);
  return div;
}


