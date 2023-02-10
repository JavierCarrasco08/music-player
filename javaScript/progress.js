import { $AUDIO, $CIRCLE, $CONTENT_P } from "./constantes.js";

export function progressive() {
  const $PARENT = $CIRCLE.parentElement;
  let { offsetHeight: x, offsetWidth: y } = $PARENT;
  $CIRCLE.style.top = `${x / 2 - $CIRCLE.clientHeight / 2}px`;
}

export function run() {
  console.dir(($AUDIO.duration * 10) / (60 * 10));
  $CONTENT_P.lastElementChild.textContent = `${$AUDIO.duration / 60}`;
}
