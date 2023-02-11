import {
  $musicListUl,
  $FIGURE,
  $controls,
  $AUDIO,
  $PLAY,
  $exitImg,
  $PlAYLIST,
} from "./constantes.js";
import { dataMusic } from "./data.js";
import { liMusicList } from "./Li.js";
import { next, prev } from "./next_prev.js";
import { progressive, run } from "./progress.js";
let boolean = false;
window.addEventListener("resize", (e) => {
  if (document.documentElement.clientWidth > 560) {
    $musicListUl.parentElement.classList.remove("translate");
  }
});
$PlAYLIST.addEventListener("pointerdown", (e) => {
  $musicListUl.parentElement.classList.remove("translate");
});
$exitImg.addEventListener("pointerdown", (e) => {
  e.target.parentElement.classList.add("translate");
});
$musicListUl.append(...liMusicList());
progressive();
$musicListUl.addEventListener("pointerdown", (e) => {
  const LI = e.target.closest(".music-list__li");
  if (LI) {
    $musicListUl.parentElement.classList.add("translate");
    boolean = true;
    const $playPause = document.querySelector(
      ".container-reproductor__i-modificare"
    );
    $playPause.classList.replace("fa-play", "fa-pause");
    $FIGURE.firstElementChild.src = LI.dataset.src;
    $FIGURE.lastElementChild.textContent = LI.dataset.name;
    $AUDIO.src = LI.dataset.audio;
    run();
    $AUDIO.dataset.name = LI.dataset.name;
    $AUDIO.play();
  }
});

$controls.addEventListener("pointerdown", (e) => {
  if (boolean) {
    if (e.target.matches(".container-reproductor__i-modificare")) {
      if (e.target.classList.contains("fa-pause")) {
        e.target.classList.replace("fa-pause", "fa-play");
        $AUDIO.pause();
        return false;
      } else {
        e.target.classList.replace("fa-play", "fa-pause");
        $AUDIO.play();
      }
    }
    if (e.target.matches(".container-reproductor__i--next")) {
      next();
    }
    if (e.target.matches(".container-reproductor__i--prev")) {
      prev();
    }
  }
});
