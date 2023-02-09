import { dataMusic } from "./data.js";

export function liMusicList() {
  const li = [];
  dataMusic.forEach((e) => {
    const $li = document.createElement("li");
    $li.innerHTML = `<figure class="music-list__figure">
        <img src="${e.src}" alt="${e.name}" class="music-list__img" />
        <figcaption class="music-list__name">${e.name}</figcaption>
        </figure>`;
    $li.dataset.audio = e.audio;
    $li.dataset.src = e.src;
    $li.dataset.name = e.name;
    $li.classList.add("music-list__li");
    li.push($li);
  });
  return li;
}
