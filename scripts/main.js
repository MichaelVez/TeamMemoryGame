//* start_cratelayout();
//* start_random();
//* even-listeners-cards();
//* event-btns();

// import {
//   startTimer as startTimer,
//   stopTimer as stopTimer,
// } from "./events-btns";
let gridsizex = 4;
let gridsizey = 3;

import { start_crateLayout as crateBored } from "./start_cratelayout.js";
crateBored(gridsizex, gridsizey); //param height and width

import { start_random } from "./start_random.js";
start_random(gridsizex * gridsizey);

import { eventListenersCards } from "./event-listeners-cards.js";
eventListenersCards();
