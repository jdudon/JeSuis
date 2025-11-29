/*************************************************
 * EXERCICE 8 - Panier & conditions (sans clic)
 * Notions : variables globales, if / else if / else,
 *           DOM, réutilisation des fonctions
 *************************************************/

/* --- Correction Exercice 1 - Variables & infos de base --- */

const shopName = "Ma Boutique JS";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";

console.log("Bienvenue dans " + shopName + " située à " + city);
console.log("Slogan :", slogan);

if (isOpen) {
  console.log("La boutique est ouverte.");
} else {
  console.log("La boutique est fermée.");
}

// Tagline dans le header (si présente)
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

// Année dans le footer (si présente)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --- Correction Exercice 2 - Chaînes de caractères & messages --- */

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

console.log("welcomeMessage :", welcomeMessage);
console.log("welcomeMessage2 :", welcomeMessage2);
console.log("Longueur du slogan :", sloganLength);
console.log("Slogan en majuscules :", sloganUppercase);
console.log("Slogan modifié :", sloganModified);

const cartMessageElementEx2 = document.getElementById("cart-message");
if (cartMessageElementEx2) {
  cartMessageElementEx2.textContent =
    sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
}

/* --- Correction Exercice 3 - Nombres & calculs --- */

let priceHTExample = 20;
const VAT = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * VAT;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* --- Correction Exercice 4 - Fonctions de prix --- */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

const testPrice1 = calculatePriceTTC(10);
const testPrice2 = calculatePriceTTC(19.99);

console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

/* --- Correction Exercice 5 - Produit vedette (DOM, sans objets) --- */

let featuredProductName = "T-shirt Code & Chill";
let featuredProductPriceHT = 19.99;
let featuredProductDescription = "Parfait pour coder confortablement.";
let featuredProductImage = "images/tshirt-code-chill.jpg"; // à adapter

const productList = document.getElementById("product-list");

function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = featuredProductName;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(featuredProductPriceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

if (productList) {
  productList.innerHTML = "";
  const card = createFeaturedProductCard();
  productList.appendChild(card);
}

/* --- Correction Exercice 6 - Tableaux simples & boucle for --- */

const productNames = ["T-shirt JS", "Mug Debug", "Sticker Bug Free"];
const productPricesHT = [19.99, 9.99, 2.5];

console.log("Nombre de produits (tableaux simples) :", productNames.length);

function displayProductsInConsole() {
  for (let i = 0; i < productNames.length; i++) {
    const name = productNames[i];
    const priceHT = productPricesHT[i];
    const priceTTC = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(priceTTC);

    console.log(`${i + 1} - ${name} — ${formattedPrice} TTC`);
  }
}

displayProductsInConsole();

/* --- Correction Exercice 7 - Tableau d'objets & affichage DOM --- */

const products = [
  {
    id: 1,
    name: "T-shirt JS",
    priceHT: 19.99,
    description: "T-shirt confortable pour développeurs JavaScript.",
    image: "images/tshirt-js.jpg"
  },
  {
    id: 2,
    name: "Mug Debug",
    priceHT: 9.99,
    description: "Mug pour déboguer avec du café ☕.",
    image: "images/mug-debug.jpg"
  },
  {
    id: 3,
    name: "Sticker Bug Free",
    priceHT: 2.5,
    description: "Un sticker pour célébrer les bugs corrigés.",
    image: "images/sticker-bug-free.jpg"
  }
];

const productListSection = document.getElementById("product-list");

function createProductCard(product) {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = product.name;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(product.priceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

function displayProductsInPage() {
  if (!productListSection) return;

  productListSection.innerHTML = "";

  for (const product of products) {
    const card = createProductCard(product);
    productListSection.appendChild(card);
  }
}

displayProductsInPage();

/* --- Nouveautés Exercice 8 - Panier & conditions (sans clic) --- */

// Variables globales du panier
let cartItemCount = 0;
let cartTotal = 0;

// Génère un message selon le total du panier
function generateCartMessage(total) {
  if (total === 0) {
    return "Votre panier est vide.";
  } else if (total < 50) {
    return "Ajoutez encore des produits pour profiter de la livraison offerte à partir de 50 €.";
  } else {
    return "Livraison offerte 🎉 Merci pour votre commande !";
  }
}

// Récupération des éléments du DOM liés au panier
const cartCountElement = document.getElementById("cart-count");
const cartTotalElement = document.getElementById("cart-total");
const cartMessageElement = document.getElementById("cart-message");

// Met à jour l'affichage du panier
function updateCartDisplay() {
  if (cartCountElement) {
    cartCountElement.textContent = cartItemCount.toString();
  }

  if (cartTotalElement) {
    cartTotalElement.textContent = formatPrice(cartTotal);
  }

  if (cartMessageElement) {
    cartMessageElement.textContent = generateCartMessage(cartTotal);
  }
}

/* Tests manuels de l'état du panier */

// Cas 1 : panier vide
cartItemCount = 0;
cartTotal = 0;
updateCartDisplay();

// Cas 2 : panier avec total < 50
cartItemCount = 2;
cartTotal = 30;
updateCartDisplay();

// Cas 3 : panier avec total >= 50
cartItemCount = 4;
cartTotal = 60;
updateCartDisplay();

console.log("Exercice 8 chargé ✅");
