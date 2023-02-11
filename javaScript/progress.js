import { $AUDIO, $CIRCLE, $CONTENT_P } from "./constantes.js";

export function progressive() {
  const $PARENT = $CIRCLE.parentElement;
  let { offsetHeight: x, offsetWidth: y } = $PARENT;
  $CIRCLE.style.top = `${x / 2 - $CIRCLE.clientHeight / 2}px`;
}

export function run() {
  setInterval(() => {
    // console.dir(Math.round($AUDIO.currentTime));
    console.log(parseFloat($AUDIO.duration / 62));
  }, 1000);
}
