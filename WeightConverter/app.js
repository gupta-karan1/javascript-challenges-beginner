// script for weight and baking temperature conversion feature for baking purposes - feature is in navigation menu

// 1. got input elements

let gmsRef = document.getElementById("gms");
let ozRef = document.getElementById("oz");
let tspRef = document.getElementById("tsp");
let tbspRef = document.getElementById("tbsp");
let cupRef = document.getElementById("cups");
let mlRef = document.getElementById("ml");

let degCRef = document.getElementById("degC");
let degFRef = document.getElementById("degF");

// 2. create function to convert from one unit to other values
// using ternary operator
let convertFromGrams = () => {
  let gms = gmsRef.value;
  // using toFixed method to limit decimals to 2 digits only
  ozRef.value = (gms * 0.035274).toFixed(2);
  tbspRef.value = (gms / 17.07).toFixed(2);
  tspRef.value = (gms / 5.69).toFixed(2);
  cupRef.value = (gms / 200).toFixed(2);
  mlRef.value = (gms * 1).toFixed(1);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  gmsRef.value = (oz * 28.3495).toFixed(2);
  cupRef.value = (oz / 8).toFixed(2);
  tbspRef.value = (oz * 2).toFixed(1);
  tspRef.value = (oz * 6).toFixed(1);
  mlRef.value = (oz * 30).toFixed(1);
};

let convertFromTbsp = () => {
  let tbsp = tbspRef.value;
  tspRef.value = (tbsp * 3).toFixed(1);
  gmsRef.value = (tbsp * 17.07).toFixed(2);
  cupRef.value = (tbsp / 16).toFixed(1);
  ozRef.value = (tbsp / 2).toFixed(2);
  mlRef.value = (tbsp * 15).toFixed(1);
};

let convertFromTsp = () => {
  let tsp = tspRef.value;
  tbspRef.value = (tsp / 3).toFixed(1);
  gmsRef.value = (tsp * 5.69).toFixed(2);
  cupRef.value = (tsp / 48).toFixed(2);
  ozRef.value = (tsp / 6).toFixed(2);
  mlRef.value = (tsp * 5).toFixed(1);
};

let convertFromCups = () => {
  let cups = cupRef.value;
  tbspRef.value = (cups * 16).toFixed(1);
  tspRef.value = (cups * 48).toFixed(1);
  gmsRef.value = (cups * 200).toFixed(1);
  ozRef.value = (cups * 8).toFixed(1);
  mlRef.value = (cups * 240).toFixed(1);
};

let convertFromMl = () => {
  let ml = mlRef.value;
  cupRef.value = (ml / 240).toFixed(3);
  tspRef.value = (ml / 5).toFixed(2);
  tbspRef.value = (ml / 15).toFixed(2);
  gmsRef.value = (ml * 1).toFixed(1);
  ozRef.value = (ml / 30).toFixed(2);
};

// convert baking temperatures
let convertFromDegC = () => {
  let degC = degCRef.value;
  degFRef.value = (degC * (9 / 5) + 32).toFixed(1);
};

let convertFromDegF = () => {
  let degF = degFRef.value;
  degCRef.value = ((degF - 32) * (5 / 9)).toFixed(1);
};

// adding event listeners to all input values and adding load listener to window to begin converting from 1 cup as soon as window loads

gmsRef.addEventListener("input", convertFromGrams);
ozRef.addEventListener("input", convertFromOz);
cupRef.addEventListener("input", convertFromCups);
tbspRef.addEventListener("input", convertFromTbsp);
tspRef.addEventListener("input", convertFromTsp);
mlRef.addEventListener("input", convertFromMl);

degCRef.addEventListener("input", convertFromDegC);
degFRef.addEventListener("input", convertFromDegF);

window.addEventListener("load", convertFromCups);
window.addEventListener("load", convertFromDegC);

// end of script for conversion feature for baking purposes
