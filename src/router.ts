import { initHome } from "./pages/home";
import { initInstructions } from "./pages/instruction";
import { initPlayGame } from "./pages/playGame";
import { initResults } from "./pages/results";

const routes = [
  {
    path: /\/home/,
    component: initHome,
  },
  {
    path: /\/instruction/,
    component: initInstructions,
  },
  {
    path: /\/playGame/,
    component: initPlayGame,
  },
  {
    path: /\/results/,
    component: initResults,
  },
];

const BASE_PATH = "/desafio-5";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", path);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el: any = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if(location.pathname == "/"){
    goTo("/home")
  }
  else if(location.host.includes("github.io")){
    goTo("/home")
  }
  else{
    handleRoute(location.pathname)
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
}
}
