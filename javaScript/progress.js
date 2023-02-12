import { $AUDIO, $CIRCLE, $CONTENT_P, $PLAY, $TEMPO } from "./constantes.js";
import { next } from "./next_prev.js";

const $PARENT = $CIRCLE.parentElement;
const $GRANDFATHER = $PARENT.parentElement;
export function progressive() {
  let { offsetHeight: x, offsetWidth: y } = $PARENT;
  $CIRCLE.style.top = `${x / 2 - $CIRCLE.clientHeight / 2}px`;
}

export function run() {
  $TEMPO.lastElementChild.textContent = `00:00`;
  $TEMPO.firstElementChild.textContent = `00:00`;
  setTimeout(() => {
    let miliSecondStatic = $AUDIO.duration * 1000,
      minuteStatic = Math.floor(
        (miliSecondStatic % (1000 * 60 * 60)) / (1000 * 60)
      ),
      secondsStatic = Math.floor((miliSecondStatic % (1000 * 60)) / 1000);
    $TEMPO.lastElementChild.textContent = `${minuteStatic}:${secondsStatic}`;
    $AUDIO.currentTime = $AUDIO.duration;
  }, 1000);

  let setRun = setInterval(() => {
    let minuteStatic = Math.floor(
      (($AUDIO.duration * 1000) % (1000 * 60 * 60)) / (1000 * 60)
    );
    let miliSecondsRun = $AUDIO.currentTime * 1000,
      minuteRun = Math.floor((miliSecondsRun % (1000 * 60 * 60)) / (1000 * 60)),
      secondsRun = "0" + Math.floor((miliSecondsRun % (1000 * 60)) / 1000);
    // console.log(Math.floor(($AUDIO.currentTime * 10) / 10));
    // console.log(
    //   Math.floor(
    //     ($AUDIO.currentTime * 1000) / ($GRANDFATHER.clientWidth * minuteStatic)
    //   )
    // );
    $TEMPO.firstElementChild.textContent = `${minuteRun}:${secondsRun.slice(
      -2
    )}`;
    if ($AUDIO.ended) {
      $PLAY.classList.replace("fa-pause", "fa-play");
      clearInterval(setRun);
      next();
      return false;
    }
  }, 1000);
}
