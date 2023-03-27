import { state } from "../../state";

export function initPlayGame(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.classList.add("game-conteiner");

  let counter = 3;
  const contador = setInterval(() => {
    counter--;

    const counterEl = div.querySelector(".counterEl");
    counterEl.textContent = String(counter);

    if (counter == 0) {
      clearInterval(contador);
        params.goTo("/instructions");
    }
    console.log("hola" + counter);
  }, 1000);
  console.log(div);

  div.innerHTML = `
  <div class="pc-conteiner-hands">
          <rock-el class="pc-hand-rock"></rock-el>
          <paper-el class="pc-hand-paper"></paper-el>
          <scissors-el class="pc-hand-scissors"></scissors-el>
  </div>

  <div class="counterEl">${counter}</div>

  <div class="player-conteiner-hands">
  <rock-el class="player-hand-rock"></rock-el>
  <paper-el class="player-hand-paper"></paper-el>
  <scissors-el class="player-hand-scissors"></scissors-el>
</div>
  `;


  style.innerHTML = `
      
  .game-conteiner{
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content:space-between;
      height: 100vh;
  }
  .pc-conteiner-hands{
        transform: rotate(180deg);
        display:flex;
        justify-content: space-evenly;
        visibility:hidden;
        width:100%;

  }
  @media(min-width: 768px){
    .player-hand-paper, .player-hand-rock, .player-hand-scissors{
      width:200px;
      height:200px;
    }
  }   
    .counterEl{
      font-weight: bold;
      font-family: "Odibee Sans";
      font-size: 100px;
      
    }
    
    .player-conteiner-hands{
      display:flex;
      justify-content: space-evenly;
      width: 100%;
  }
  
 
  .down{
    display:none;
  }
  .up{
        display:block;
        visibility:visible;
        opacity:100%;
        transition: all 0.6s;
        flex-grow: 0.06;
        margin-bottom:100px;
  }
  .pc-select{
        display:flex;
        visibility:visible;
        margin-top: 100px;
        flex-grow: 0.05;
        transition: all 0.6s;
  }
  `;
  
  const count = div.querySelector(".counterEl") ;

  const movePlayer = div.querySelector<any>(".player-conteiner-hands").children;

  const playerRock = div.querySelector(".player-hand-rock");
  const playerPaper = div.querySelector(".player-hand-paper");
  const playerScisors = div.querySelector(".player-hand-scissors");

  const pcGames = div.querySelector(".pc-conteiner-hands");
  const rockPc = div.querySelector(".pc-hand-rock");
  const paperPc = div.querySelector(".pc-hand-paper");
  const scissorsPc = div.querySelector(".pc-hand-scissors");
  

  for (const p of movePlayer) {
    p.addEventListener("click", () => {
      const type = p.getAttribute("class");
      clearInterval(contador);

      if (type == "player-hand-rock") {
        state.playerMove("piedra");
        playGameGo("piedra");
      } else if (type == "player-hand-paper") {
        state.playerMove("papel");
        playGameGo("papel");
      } else if (type == "player-hand-scissors") {
        state.playerMove("tijera");
        playGameGo("tijera");
      }
    });
  }

  function playGameGo(move) {
    count.classList.add("down");
    for (const p of movePlayer) {
      p.classList.add("down");
    }
    if (move == "piedra") {
      playerRock.classList.remove("down");
      playerRock.classList.add("up");
      setTimeout(() => {
        playerPaper.classList.add("down");
        playerScisors.classList.add("down");
      });
    } else if (move == "tijera") {
      playerScisors.classList.remove("down");
      playerScisors.classList.add("up");
      setTimeout(() => {  
        playerPaper.classList.add("down");
        playerRock.classList.add("down");
      });
    } else if (move == "papel"){
      playerPaper.classList.remove("down");
      playerPaper.classList.add("up");
      setTimeout(() => {
        playerRock.classList.add("down");
        playerScisors.classList.add("down");
      }, 1000);
    }

  setTimeout(() => {
    const pcMove = state.getState().currentGame.computerPlay;
    pcGames.classList.add("pc-select");
    
    if (pcMove == "piedra") {
      rockPc.classList.add("pc-select");
      paperPc.classList.add("down");
      scissorsPc.classList.add("down");
    } else if (pcMove == "papel") {
      paperPc.classList.add("pc-select");
      scissorsPc.classList.add("down");
      rockPc.classList.add("down");
    } else if (pcMove == "tijera"){
      scissorsPc.classList.add("pc-select");
      paperPc.classList.add("down");
      rockPc.classList.add("down");
    }
  });
  setTimeout(()=>{
    params.goTo("/results")
  },1500)
}

  div.appendChild(style);
  return div;
}
