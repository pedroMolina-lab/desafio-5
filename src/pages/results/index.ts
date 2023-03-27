import { state } from "../../state";

export function initResults(params) {
  const div = document.createElement("div");
  div.classList.add("results-container");
  const style = document.createElement("style");

  const tie = require("url:../../../src/imagenes/empate.png");
  const win = require("url:../../../src/imagenes/ganaste.png");
  const looser = require("url:../../../src/imagenes/perdiste.png");

  const data = state.getState();
  const playerScore = data.history.player;
  const pcScore = data.history.cpu;


  div.innerHTML = `
    <div class ="container">
    <img class = "tieResults" src="${tie}">
    <img class = "WinResults" src="${win}">
    <img class = "looserResults" src="${looser}">   

    <div class = "container-score">
    <h1 class = "score-title">Score</h1>
    <h4 class = "player-score">You: ${playerScore}</h4>
    <h4 class = "pc-score">Machine: ${pcScore}</h4>
    </div>

    <div class = "button-reiniciar">
    <button-el class = "button-play"> Volver a jugar</button-el>
    <button-el class = "button-restart"> Reiniciar puntaje</button-el>
    </div>
    </div>
 `;

  style.innerHTML = `
 .results-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100%;      
  }
.container{
    height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .tieResults{
    display: none;
    height: 300px;
  }
  .looserResults{
    display: none;
    height: 300px;
  }
  .WinResults{
    display: none;
    height: 300px;
  
  }
  .container-score{
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:20px;
    width: 259px;
    height: 217px;
    background: #FFFFFF;
    border: 10px solid #000000;
    border-radius: 10px;
    font-family: 'Odibee Sans';
  }
  .score-title{
    margin:0;
    text-align:center;
    font-size:55px;
  }
  .player-score{
    margin: 5px 10px;
    font-size:45px;
  }
  .pc-score{
    margin: 5px 10px;
    font-size:45px;
  }
  .button-reiniciar{
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin:10px;
  }
 `;

  const result = data.history.result;
  
  const container = div.querySelector(".container")as HTMLElement; 
  const tieImg = div.querySelector(".tieResults") as HTMLElement;
  const winImg = div.querySelector(".WinResults") as HTMLElement;
  const looseImg = div.querySelector(".looserResults") as HTMLElement; 
   

  if(result == "tie"){
    tieImg.style.display = "flex"
  }
  else if(result == "win"){
    winImg.style.display = "flex"
  }
  else if(result == "looser"){
    looseImg.style.display = "flex"
  }

  const buttonPlay = div.querySelector(".button-play") as any
  buttonPlay.addEventListener("click", ()=>{
    params.goTo("/playGame")
  })

  const ResetButtom = div.querySelector(".button-restart") as any
  ResetButtom.addEventListener("click", ()=>{
    params.goTo("/instruction")
    state.setState({
      ...data,
      history: {
        player: 0,
        cpu: 0,
        result: "",
      },
      
    });
  })
  
  


  div.appendChild(style);
  return div;
}
