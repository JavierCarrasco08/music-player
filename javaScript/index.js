import { liMusicList } from "./Li.js";

const $musicListUl = document.querySelector(".music-list__ul");
$musicListUl.append(...liMusicList());
