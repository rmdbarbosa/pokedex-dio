const randomNumber = Math.floor(Math.random() * 100);

async function loadPokemon() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
  );
  const pokemon = await response.json();
  const stats = await pokemon.stats;

  console.log(stats);
}

loadPokemon();
