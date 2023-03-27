const instructionHome = require("url:../../../src/imagenes/img-instrucciones.png")
;
export function initInstructions(params){
    const div = document.createElement("div")

    div.innerHTML = `
    
    <img src="${instructionHome}" class="img-instructions"></img>

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
            display: flex;
            width: 100%;
            justify-content: space-evenly;
          }
            .img-instructions{
              width: 284px;
              height: 200px;
              margin-top: 114px;
            }
            @media(min-width:768px){
              .img-instructions{
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
              params.goTo("/playGame");
            });
            div.appendChild(style);
            return div;
          }
          
