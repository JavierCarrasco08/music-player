import { $PLAY, $AUDIO, $FIGURE } from "./constantes.js";
import { dataMusic } from "./data.js";
import { run } from "./progress.js";

export function next() {
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
  run();
  $AUDIO.play();
}

export function prev() {
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
  run();
  $AUDIO.play();
}
