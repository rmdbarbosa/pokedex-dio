const statsHTML = document.querySelector(".about__number");
const imgHTML = document.querySelector(".pokecard__img");
const nameHTML = document.querySelector(".pokecard__title");
const idHTML = document.querySelector(".pokecard__number");
const cardHTML = document.querySelector(".pokecard");
const typeHTML = document.querySelector(".pokecard__type");
const numberBarHTML = document.querySelector(".number__bar");

const randomNumber = Math.floor(Math.random() * 100);

let statSum = 0;
let bars = [];

function convertStatToLi(stat) {
  statSum += stat.base_stat;
  bars.push(stat.base_stat);

  return `<li class=${stat.stat.name}>${stat.base_stat}</li>`;
}

async function loadPokemon() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
  );
  const pokemon = await response.json();
  const stats = await pokemon.stats;

  typeHTML.innerHTML += `<li>${pokemon.types[0].type.name}</li>`;

  cardHTML.classList.add(`${pokemon.types[0].type.name}`);

  nameHTML.innerHTML += `<h1>${pokemon.name}</h1>`;

  idHTML.innerHTML = `<h2>#${pokemon.id}</h2>`;

  imgHTML.innerHTML = `<img
  src="${pokemon.sprites.front_default}"
  
  />`;

  const data = stats.map(convertStatToLi).join(" ");

  barsLength = bars.length;

  for (i = 0; i < bars.length; i++) {
    numberBarHTML.innerHTML += `<li><progress value="${bars[i]}" max="200"></progress></li>`;
  }

  statsHTML.innerHTML += data;
  statsHTML.innerHTML += `<li>${statSum}</li>`;
}

loadPokemon();
