/*************************************************
 * EXERCICE 2 - Messages & chaînes de caractères
 * Notions : concaténation, template string,
 *           length, toUpperCase, replace
 *************************************************/

/* --- Correction Exercice 1 --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- Nouveautés Exercice 2 --- */

// 1) messageBienvenue avec concaténation
let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";

// 2) messageBienvenue2 avec template string
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

// 3) Longueur du slogan
let sloganLength = slogan.length;

// 4) Slogan en majuscules
let sloganUppercase = slogan.toUpperCase();

// 5) Modifier le slogan avec replace
let sloganModified = slogan.replace("goodies", "trésors");

// 6) Affichages console
console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

/* --- Rendu visuel Exo 2 --- */

const cartMessageElement = document.getElementById("cart-message");
// if (cartMessageElement) {
  cartMessageElement.textContent =
    sloganModified +
    ` (${sloganLength} caractères dans le slogan original)`;
// }

console.log("Exercice 2 chargé ✅");

