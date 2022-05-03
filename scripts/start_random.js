//randomize cards array // add data-img attribute
import { pokemons } from "./pokemons.js";
export function start_random(gridSize) {
  let arr = doublesArray(gridSize);
  assignCards(arr, gridSize);
}
//example gridSize = 3 [0,0,1,1,2,2]
function doublesArray(gridSize) {
  let newArr = [];
  let size = gridSize / 2;
  for (let i = 0; i < size; i++) {
    newArr.push(i);
    newArr.push(i);
  }
  return newArr;
}
function doubleTheArray(arr) {
  let value = arr.length;
  for (let i = 0; i < value; i++) {
    arr.push(arr[i]);
  }
}
function assignCards(arr) {
  const cell = document.querySelectorAll(".cardFront");
  let pokeArr = randomCards(cell.length / 2);
  doubleTheArray(pokeArr);

  for (let i = 0; i < cell.length; i++) {
    let randomNum = Math.floor(Math.random() * pokeArr.length);
    cell[i].setAttribute("data-name", pokeArr[randomNum].name);
    //crate elements for cars
    //text
    const pokemonName = document.createElement("h1");
    pokemonName.innerText = `${pokeArr[randomNum].name}`;
    cell[i].appendChild(pokemonName);

    //img
    const pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", pokeArr[randomNum].image);
    pokemonImage.classList.add("pokemonImg");
    cell[i].appendChild(pokemonImage);
    //ball
    const pokeBallImage = document.createElement("img");
    pokeBallImage.src = "img/Pokeball.png";
    pokeBallImage.classList.add("pokeBallImg");
    cell[i].appendChild(pokeBallImage);
    pokeArr.splice(randomNum, 1);
  }
}
//return array with length param of random pokemons obj
export function randomCards(length) {
  const arrPokemonsRandom = [];
  let namesPokemon = [];
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * pokemons.length);
    let randomCard = pokemons[randomIndex];

    if (!namesPokemon.includes(randomCard.name)) {
      arrPokemonsRandom.push(randomCard);
    } else {
      i -= 1;
    }

    namesPokemon.push(randomCard.name);
  }
  return arrPokemonsRandom;
}
