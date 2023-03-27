type Jugada = "piedra" | "papel" | "tijera";

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: {
      player: 0,
      cpu: 0,
      result: "",
    },
  },

  gettingItem() {
    const data: any = localStorage.getItem("scoreData");
    if (!data) {
      return;
    }
    this.data.history = JSON.parse(data);
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    localStorage.setItem("saved-game", JSON.stringify(newState));
  },
  randomPlay() {
    const move = ["piedra", "papel", "tijera"];
    const RandomPlay = Math.floor(Math.random() * 3);
    return move[RandomPlay];
  },

  playerMove(move: Jugada) {
    const currentPlayerGame = this.getState();
    const cpuMoves = this.randomPlay();

    currentPlayerGame.currentGame.myPlay = move;
    currentPlayerGame.currentGame.computerPlay = cpuMoves;

    this.whoWins(move, cpuMoves);
  },


  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const data = this.getState();
    const Resultado = data.currentPlay;

    const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
    const victoria = [ganeConTijeras, ganeConPiedra, ganeConPapel];

    const perdiConTijeras = myPlay == "tijera" && computerPlay == "piedra";
    const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
    const perdiConPapel = myPlay == "papel" && computerPlay == "tijera";
    const derrota = [perdiConTijeras, perdiConPiedra, perdiConPapel];

    const empateGame = myPlay === computerPlay;
    const empate = [empateGame];

    if (victoria.includes(true)) {
      return this.historyPushData("win");
    } else if (derrota.includes(true)) {
      return this.historyPushData("looser");
    } else if (empate.includes(true)) {
      return this.historyPushData("tie");
    }
  },


  historyPushData(result) {
    const data = this.getState();
    const playerScore = data.history.player;
    const computerScore = data.history.cpu;

    if (result == "win") {
      this.setState({
        ...data,
        history: {
          player: playerScore + 1,
          cpu: computerScore,
          result: "win",
        },
      });
    } else if (result == "looser") {
      this.setState({
        ...data,
        history: {
          player: playerScore,
          cpu: computerScore + 1,
          result: "looser",
        },
      });
    } else if (result == "tie") {
      this.setState({
        ...data,
        history: {
          player: playerScore,
          cpu: computerScore,
          result: "tie",
        },
      });
    }

    this.saveScore();
  },
  saveScore() {
    const data = this.getState().history;
    localStorage.setItem("scoreData", JSON.stringify(data));
  },
 
};
export { state };
