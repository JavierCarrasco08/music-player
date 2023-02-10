import {
  $musicListUl,
  $FIGURE,
  $controls,
  $AUDIO,
  $PLAY,
} from "./constantes.js";
import { dataMusic } from "./data.js";
import { liMusicList } from "./Li.js";
import { progressive, run } from "./progress.js";
let boolean = false;
$musicListUl.append(...liMusicList());
progressive();

$musicListUl.addEventListener("pointerdown", (e) => {
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
      if ($PLAY.classList.contains("fa-play")) {
        $PLAY.classList.replace("fa-play", "fa-pause");
      }
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
      if ($PLAY.classList.contains("fa-play")) {
        $PLAY.classList.replace("fa-play", "fa-pause");
      }
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
