/*************************************************
 * EXERCICE 5 - Afficher 1 produit dans la page
 * Notions : getElementById, createElement, appendChild
 *************************************************/

/* --- Correction Exercice 1 --- */

// Données de base de la boutique
const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

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

/* --- Correction Exercice 2 : chaînes de caractères --- */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";

let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log(welcomeMessage);
console.log(welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Version majuscules :", sloganUppercase);
console.log("Version modifiée :", sloganModified);

/* --- Correction Exercice 3 : Nombres & TVA --- */

const VAT = 0.2;

let examplePriceHT = 10;
let examplePriceTTC = examplePriceHT + examplePriceHT * VAT;

console.log("Exemple prix HT :", examplePriceHT);
console.log("Exemple prix TTC :", examplePriceTTC);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes :", salesCount);

/* --- Correction Exercice 4 : Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

console.log("Test format :", formatPrice(calculatePriceTTC(19.99)));

/*************************************************
 * --- Nouveautés EXERCICE 5 ---
 * Objectif : afficher UN produit dans la page
 *************************************************/

/**
 * Produit vedette (un seul produit)
 */
const featuredProduct = {
  name: "T-shirt Code & Chill",
  priceHT: 19.99,
  description: "Un t-shirt confortable pour coder des heures.",
  image:
    "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=600",
};

/**
 * Conteneur dans lequel afficher la carte du produit
 */
const productListElement = document.getElementById("product-list");

/**
 * Fonction utilitaire : crée une carte produit (DOM)
 */
function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  // Image
  const img = document.createElement("img");
  img.classList.add("product-image");
  img.src = product.image;
  img.alt = product.name;

  // Titre
  const titleElement = document.createElement("h3");
  titleElement.classList.add("product-name");
  titleElement.textContent = product.name;

  // Prix TTC
  const priceElement = document.createElement("p");
  priceElement.classList.add("product-price");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElement.textContent = formatPrice(priceTTC);

  // Description
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("product-desc");
  descriptionElement.textContent = product.description;

  // Construction de la carte
  article.appendChild(img);
  article.appendChild(titleElement);
  article.appendChild(priceElement);
  article.appendChild(descriptionElement);

  return article;
}

/**
 * Afficher la carte du produit vedette dans la page
 */
function displayFeaturedProduct() {
  if (!productListElement) return;

  productListElement.innerHTML = ""; // vider le conteneur
  const card = createProductCard(featuredProduct);
  productListElement.appendChild(card);
}

// Affichage initial
displayFeaturedProduct();

/* --- Petit message visuel pour l'exercice --- */
const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Exercice 5 : affichage du produit vedette dans la page 🛍️";
}

console.log("Exercice 5 chargé ✅");
