/*************************************************
 * EXERCICE 8 - Panier & conditions (affichage sans clic)
 * Notions : comparaisons, if/else, mise à jour DOM
 *************************************************/

/* --- Correction Exercice 1 à 7 --- */

// Données de la boutique
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

// TVA et fonctions prix
const VAT = 0.2;

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

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

// Conteneur produits
const productListElement = document.getElementById("product-list");

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
  buttonElement.textContent = "Ajouter au panier"; // encore inactif

  card.appendChild(titleElement);
  card.appendChild(priceElement);
  card.appendChild(descriptionElement);
  card.appendChild(buttonElement);

  return card;
}

function displayProductsInPage() {
  if (!productListElement) return;

  productListElement.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = createProductCard(product);
    productListElement.appendChild(card);
  }
}

displayProductsInPage();

/* --- Nouveautés Exercice 8 : état du panier + conditions --- */

// État du panier
let cartItemCount = 0;
let cartTotal = 0;

/**
 * Retourne un message de panier différent selon le total
 */
function generateCartMessage(total) {
  if (total === 0) {
    return "Votre panier est vide";
  } else if (total < 50) {
    return "Ajoutez encore des produits pour atteindre 50 € et débloquer la livraison offerte.";
  } else {
    return "Livraison offerte 🎉 Merci pour votre commande !";
  }
}

// Références DOM panier
const cartCountHeader = document.getElementById("cart-count");
const cartTotalHeader = document.getElementById("cart-total");
const cartCountAside = document.getElementById("cart-count-aside");
const cartTotalAside = document.getElementById("cart-total-aside");
const cartMessageElement8 = document.getElementById("cart-message");

/**
 * Met à jour l'affichage du panier dans la page
 */
function updateCartDisplay() {
  if (cartCountHeader) {
    cartCountHeader.textContent = cartItemCount.toString();
  }
  if (cartCountAside) {
    cartCountAside.textContent = cartItemCount.toString();
  }

  if (cartTotalHeader) {
    cartTotalHeader.textContent = formatPrice(cartTotal);
  }
  if (cartTotalAside) {
    cartTotalAside.textContent = formatPrice(cartTotal);
  }

  if (cartMessageElement8) {
    cartMessageElement8.textContent = generateCartMessage(cartTotal);
  }
}

/* --- Tests de différents cas (optionnel, tu peux ajuster) --- */

// Cas 1 : panier vide
cartItemCount = 0;
cartTotal = 0;
updateCartDisplay();

// Tu peux commenter les blocs suivants si tu veux un seul état final :

/*
// Cas 2 : panier avec total < 50
cartItemCount = 2;
cartTotal = 30;
updateCartDisplay();

// Cas 3 : panier avec total >= 50
cartItemCount = 4;
cartTotal = 60;
updateCartDisplay();
*/

console.log("Exercice 8 chargé ✅");
