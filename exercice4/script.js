/*************************************************
 * EXERCICE 4 - Fonctions de prix
 * Notions : function, paramètres, return, toFixed
 *************************************************/

/* --- Correction Exercice 1, 2 & 3 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

const VAT = 0.2;
let examplePriceHT = 20;
let examplePriceTTC = examplePriceHT + examplePriceHT * VAT;
let salesCount = 2;

/* --- Nouveautés Exercice 4 --- */

// Fonction qui calcule un prix TTC à partir d'un prix HT
function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

// Fonction qui formate un prix en "xx,xx €"
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

// Tests dans la console
console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
console.log(
  "Prix TTC pour 19,99€ HT :",
  formatPrice(calculatePriceTTC(19.99))
);

/* --- Rendu visuel Exo 4 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
}

console.log("Exercice 4 chargé ✅");
