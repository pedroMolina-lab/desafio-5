import "./components/button-game"
import "./components/rock-hand"
import "./components/paper-hand"
import "./components/scissors-hand"

import { initRouter } from "./router";


(function () {
  const root = document.querySelector(".root");
  initRouter(root as Element);

})();


