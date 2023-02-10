import { dataMusic } from "./data.js";
import { liMusicList } from "./Li.js";
let boolean = false;
const $AUDIO = document.getElementById("audio");
const $musicListUl = document.querySelector(".music-list__ul"),
  $FIGURE = document.querySelector(".container-reproductor__figure"),
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
    $FIGURE.firstElementChild.src = LI.dataset.src;
    $FIGURE.lastElementChild.textContent = LI.dataset.name;
    $AUDIO.src = LI.dataset.audio;
    $AUDIO.dataset.name = LI.dataset.name;
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
    if (e.target.matches(".container-reproductor__i--next")) {
      let next = dataMusic.findIndex((e) => e.name === $AUDIO.dataset.name);
      next += 1;
      if (next >= dataMusic.length) {
        next = 0;
      }
      $FIGURE.firstElementChild.src = dataMusic.at(next).src;
      $FIGURE.lastElementChild.textContent = dataMusic.at(next).name;
      $AUDIO.dataset.name = dataMusic.at(next).name;
      $AUDIO.src = dataMusic.at(next).audio;
      $AUDIO.play();
    }
    if (e.target.matches(".container-reproductor__i--prev")) {
      let next = dataMusic.findIndex((e) => e.name === $AUDIO.dataset.name);
      next -= 1;
      if (next < 0) {
        next = dataMusic.length - 1;
      }
      $FIGURE.firstElementChild.src = dataMusic.at(next).src;
      $FIGURE.lastElementChild.textContent = dataMusic.at(next).name;
      $AUDIO.dataset.name = dataMusic.at(next).name;
      $AUDIO.src = dataMusic.at(next).audio;
      $AUDIO.play();
    }
  }
});
