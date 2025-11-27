/*************************************************
 * EXERCICE 1 - Variables & infos de base
 *************************************************/

// Données de la boutique
const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

// Affichages dans la console
console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

// Mise à jour de la tagline
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

// Année dans le footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

console.log("Exercice 1 chargé ✅");
