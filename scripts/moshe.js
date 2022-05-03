import { pokemons as arrPokemons } from "./pokemons.js";

export const cards = document.querySelector(".cards");
const howPokemon = 6;

//* A function that takes an array of objects (arrPokemons) and takes num-(howPokemon) objects randomly
//*  and inserts them into a new array without duplicates
export function randomCards() {
  const arrPokemonsRandom = [];
  let namesPokemon = [];
  for (let i = 0; i < howPokemon; i++) {
    let randomIndex = Math.floor(Math.random() * arrPokemons.length);
    let randomCard = arrPokemons[randomIndex];

    if (!namesPokemon.includes(randomCard.name)) {
      arrPokemonsRandom.push(randomCard);
    } else {
      i -= 1;
    }

    namesPokemon.push(randomCard.name);
  }
  return arrPokemonsRandom;
}

// array of objects pokemons
const pokemonsRandom = randomCards();

// A function that creates cards from the array of objects (pokemonRandom)
export function drawBoard() {
  pokemonsRandom.forEach((pokemon) => {
    // create card back for each pokemon
    // const cardBack = document.createElement('div');
    // cardBack.setAttribute('class', 'cardBack')
    // cardBack.setAttribute('data-pokemon-name', `${pokemon.name}`)
    // cards.appendChild(cardBack)
    // create Pokemon card for each pokemon
    const pokemonCard = document.createElement("div");
    pokemonCard.setAttribute("class", "cardFront");
    pokemonCard.setAttribute("data-pokemon-name", `${pokemon.name}`);
    cards.appendChild(pokemonCard);
    //* Pokemon image
    const pokemonImage = document.createElement("img");
    pokemonImage.src = `${pokemon.image}`;
    pokemonImage.classList.add("pokemonImg");
    pokemonCard.appendChild(pokemonImage);
    //* Pokemon name
    const pokemonName = document.createElement("h1");
    pokemonName.innerText = `${pokemon.name}`;
    pokemonName.classList.add("pokemonName");
    pokemonCard.appendChild(pokemonName);
    //* Pokeball image
    const pokeBallImage = document.createElement("img");
    pokeBallImage.src = "images/Pokeball.png";
    pokeBallImage.classList.add("pokeBallImg");
    pokemonCard.appendChild(pokeBallImage);
  });
}
