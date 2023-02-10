import { $AUDIO, $CIRCLE, $CONTENT_P } from "./constantes.js";

export function progressive() {
  const $PARENT = $CIRCLE.parentElement;
  let { offsetHeight: x, offsetWidth: y } = $PARENT;
  $CIRCLE.style.top = `${x / 2 - $CIRCLE.clientHeight / 2}px`;
}

export function run() {
  setTimeout(() => {
    console.dir($AUDIO);
    console.log(parseFloat($AUDIO.duration / 60.6));
  }, 1000);
}
