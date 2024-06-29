/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function generadordedominio() {
    let pronombres = ["the", "this", "that"];
    let adjetivos = ["free", "amazing", "efficiente"];
    let nombres = ["webside", "course", "academy"];
    let dominios = [];

    pronombres.forEach(pronombre => {
      adjetivos.forEach(adjetivo => {
        nombres.forEach(nombre => {
          dominios.push(pronombre + adjetivo + nombre + ".com");
        });
      });
    });
    return dominios.join("<br>");
  }

  document.getElementById(
    "generadordedominio"
  ).innerHTML = generadordedominio();
};
