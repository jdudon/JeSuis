/*************************************************
 * EXERCICE 6 - Tableaux de produits & boucle for
 * Objectif : travailler les tableaux + for
 * (sans objets ni DOM supplémentaires)
 *************************************************/

/* --- Correction Exercice 1 à 4 --- */

// Données de la boutique
const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

// Tagline et année dans le footer
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Exemple de messages (Exo 2)
let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

// TVA et fonctions de prix (Exo 3 & 4)
const VAT = 0.2;

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

/* --- Correction Exercice 5 : afficher 1 produit vedette --- */

// Produit vedette
const featuredProduct = {
  name: "T-shirt Code & Chill",
  priceHT: 19.99,
  description: "Un t-shirt confortable pour coder des heures.",
  image:
    "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=600",
};

// Conteneur DOM
const productListElement = document.getElementById("product-list");

// Créer une carte produit pour UN produit
function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.classList.add("product-image");
  img.src = product.image;
  img.alt = product.name;

  const titleElement = document.createElement("h3");
  titleElement.classList.add("product-name");
  titleElement.textContent = product.name;

  const priceElement = document.createElement("p");
  priceElement.classList.add("product-price");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElement.textContent = formatPrice(priceTTC);

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("product-desc");
  descriptionElement.textContent = product.description;

  article.appendChild(img);
  article.appendChild(titleElement);
  article.appendChild(priceElement);
  article.appendChild(descriptionElement);

  return article;
}

// Afficher uniquement le produit vedette dans la page
if (productListElement) {
  productListElement.innerHTML = "";
  const card = createProductCard(featuredProduct);
  productListElement.appendChild(card);
}

/* --- Nouveautés Exercice 6 : tableaux simples + boucle for --- */

// Tableaux parallèles : noms et prix HT (sans objets)
const productNames = [
  "T-shirt Code & Chill",
  'Mug "Bug Hunter"',
  "Stickers Full-Stack Dev",
];

const productPricesHT = [19.99, 12.5, 4.99];

// Afficher le nombre de produits dans la console
console.log("Nombre de produits dans les tableaux :", productNames.length);

/**
 * Affiche tous les produits définis dans les tableaux
 * productNames et productPricesHT dans la console
 */
function displayProductsInConsole() {
  for (let i = 0; i < productNames.length; i++) {
    const name = productNames[i];
    const priceHT = productPricesHT[i];
    const priceTTC = calculatePriceTTC(priceHT);
    const priceFormatted = formatPrice(priceTTC);

    console.log(
      "Produit " + (i + 1) + " : " + name + " - " + priceFormatted + " TTC"
    );
  }
}

// Appel de la fonction pour afficher les produits
displayProductsInConsole();

/* --- Rendu visuel Exo 6 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Exercice 6 : ouvre la console pour voir la liste des produits (boucles & tableaux) 🧾";
}

console.log("Exercice 6 chargé ✅");
