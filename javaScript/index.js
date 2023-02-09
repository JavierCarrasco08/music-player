import { dataMusic } from "./data.js";
import { liMusicList } from "./Li.js";
let boolean = false;
const $AUDIO = document.getElementById("audio");
const $musicListUl = document.querySelector(".music-list__ul"),
  $controls = document.querySelector(".container-reproductor__controls");
$musicListUl.append(...liMusicList());

$musicListUl.addEventListener("click", (e) => {
  const LI = e.target.closest(".music-list__li");
  if (LI) {
    boolean = true;
    const $playPause = document.querySelector(
      ".container-reproductor__i-modificare"
    );
    $playPause.classList.replace("fa-play", "fa-pause");
    const $FIGURE = document.querySelector(".container-reproductor__figure");
    $FIGURE.firstElementChild.src = LI.dataset.src;
    $FIGURE.lastElementChild.textContent = LI.dataset.name;
    $AUDIO.src = LI.dataset.audio;
    $AUDIO.play();
  }
});
$controls.addEventListener("click", (e) => {
  if (boolean) {
    if (e.target.matches(".container-reproductor__i-modificare")) {
      if (e.target.classList.contains("fa-pause")) {
        e.target.classList.replace("fa-pause", "fa-play");
        $AUDIO.pause();
      } else {
        e.target.classList.replace("fa-play", "fa-pause");
        $AUDIO.play();
      }
    }
  }
});
