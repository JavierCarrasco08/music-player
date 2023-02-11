import { $AUDIO, $CIRCLE, $CONTENT_P, $TEMPO } from "./constantes.js";

export function progressive() {
  const $PARENT = $CIRCLE.parentElement;
  let { offsetHeight: x, offsetWidth: y } = $PARENT;
  $CIRCLE.style.top = `${x / 2 - $CIRCLE.clientHeight / 2}px`;
}

export function run() {
  $TEMPO.lastElementChild.textContent = `00:00`;
  setTimeout(() => {
    let miliSegundo = $AUDIO.duration * 1000,
      minute = Math.floor((miliSegundo % (1000 * 60 * 60)) / (1000 * 60)),
      segundos = Math.floor((miliSegundo % (1000 * 60)) / 1000);
    $TEMPO.lastElementChild.textContent = `${minute}:${segundos}`;
  }, 500);
}
