/*************************************************
 * EXERCICE 7 - Afficher plusieurs produits dans la page
 * Notions : objets, tableaux d'objets, for, DOM
 *************************************************/

/* --- Correction Exercice 1 à 4 --- */

// Données de la boutique
const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

// Tagline et année
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// TVA et fonctions de prix (Exercice 4)
const VAT = 0.2;

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

/* --- Correction Exercice 6 (version tableaux simples) --- */

const productNames = [
  "T-shirt Code & Chill",
  'Mug "Bug Hunter"',
  "Stickers Full-Stack Dev",
];

const productPricesHT = [19.99, 12.5, 4.99];

console.log("Nombre de produits (tableaux simples) :", productNames.length);

function displayProductsInConsole() {
  for (let i = 0; i < productNames.length; i++) {
    const name = productNames[i];
    const priceHT = productPricesHT[i];
    const priceTTC = calculatePriceTTC(priceHT);
    const priceFormatted = formatPrice(priceTTC);

    console.log(
      "Produit " + (i + 1) + " : " + name + " - " + priceFormatted
    );
  }
}

displayProductsInConsole();

/* --- Nouveautés Exercice 7 : tableau d'objets + DOM --- */

// Tableau d'objets produits
const products = [
  {
    id: 1,
    name: "T-shirt Code & Chill",
    priceHT: 19.99,
    description: "Un t-shirt confortable pour coder des heures.",
  },
  {
    id: 2,
    name: 'Mug "Bug Hunter"',
    priceHT: 12.5,
    description: "Le mug officiel des chasseurs de bugs.",
  },
  {
    id: 3,
    name: "Stickers Full-Stack Dev",
    priceHT: 4.99,
    description: "Des stickers pour afficher ton statut de dev.",
  },
];

// Conteneur DOM
const productListElement = document.getElementById("product-list");

/**
 * Crée un élément de carte produit à partir d'un objet product
 */
function createProductCard(product) {
  const card = document.createElement("article");
  card.classList.add("product-card");

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

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn-add");
  buttonElement.textContent = "Ajouter au panier"; // pas encore actif ici

  card.appendChild(titleElement);
  card.appendChild(priceElement);
  card.appendChild(descriptionElement);
  card.appendChild(buttonElement);

  return card;
}

/**
 * Affiche tous les produits du tableau products dans la page
 */
function displayProductsInPage() {
  if (!productListElement) return;

  // On vide d'abord le conteneur
  productListElement.innerHTML = "";

  // Puis on ajoute une carte pour chaque produit
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = createProductCard(product);
    productListElement.appendChild(card);
  }
}

// Affichage initial
displayProductsInPage();

/* --- Rendu visuel Exo 7 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =
    "Tous les produits du tableau sont affichés dans la page 👀";
}

console.log("Exercice 7 chargé ✅");
