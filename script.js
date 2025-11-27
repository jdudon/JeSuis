/*************************************************
 * EXERCICE 9 - Panier interactif & boutique complète
 * Notions : addEventListener, fonctions avec paramètres,
 *           mise à jour de l'état et du DOM
 *************************************************/

/* --- Correction Exercice 1 à 8 --- */

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

// TVA et fonctions de prix
const VAT = 0.2;

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * VAT;
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

// Tableau d'objets produits (avec images)
const products = [
  {
    id: 1,
    name: "T-shirt Code & Chill",
    priceHT: 19.99,
    description: "Un t-shirt confortable pour coder des heures.",
    image:
      "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: 'Mug "Bug Hunter"',
    priceHT: 12.5,
    description: "Le mug officiel des chasseurs de bugs.",
    image:
      "https://images.pexels.com/photos/29279566/pexels-photo-29279566.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Stickers Full-Stack Dev",
    priceHT: 4.99,
    description: "Des stickers pour afficher ton statut de dev.",
    image:
      "https://images.pexels.com/photos/11035473/pexels-photo-11035473.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

/* --- Nouveautés Exercice 9 : clics & mise à jour du panier --- */

// État du panier
let cartItemCount = 0;
let cartTotal = 0;

// Références DOM panier
const cartCountHeader = document.getElementById("cart-count");
const cartTotalHeader = document.getElementById("cart-total");
const cartCountAside = document.getElementById("cart-count-aside");
const cartTotalAside = document.getElementById("cart-total-aside");
const cartMessageElement = document.getElementById("cart-message");

// Conteneur des produits
const productListElement = document.getElementById("product-list");

/**
 * Retourne un message de panier différent selon le total
 */
function generateCartMessage(total) {
  if (total === 0) {
    return "Votre panier est vide.";
  } else if (total < 50) {
    return "Ajoutez encore des produits pour atteindre 50 € et débloquer la livraison offerte.";
  } else {
    return "Livraison offerte 🎉 Merci pour votre commande !";
  }
}

/**
 * Met à jour l'affichage du panier dans le DOM
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

  if (cartMessageElement) {
    cartMessageElement.textContent = generateCartMessage(cartTotal);
  }
}

/**
 * Ajoute un produit au panier
 */
function addToCart(product) {
  const priceTTC = calculatePriceTTC(product.priceHT);
  cartTotal = cartTotal + priceTTC;
  cartItemCount++;

  console.log("Produit ajouté au panier :", product.name);
  console.log("Nouveau total :", formatPrice(cartTotal));

  updateCartDisplay();
}

/**
 * Crée une carte produit avec un bouton "Ajouter au panier"
 */
function createProductCard(product) {
  const card = document.createElement("article");
  card.classList.add("product-card");

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

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn-add");
  buttonElement.textContent = "Ajouter au panier";

  // Clic sur le bouton : ajouter ce produit au panier
  buttonElement.addEventListener("click", function () {
    addToCart(product);
  });

  card.appendChild(img);
  card.appendChild(titleElement);
  card.appendChild(priceElement);
  card.appendChild(descriptionElement);
  card.appendChild(buttonElement);

  return card;
}

/**
 * Affiche tous les produits dans la page
 */
function displayProductsInPage() {
  if (!productListElement) return;

  productListElement.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = createProductCard(product);
    productListElement.appendChild(card);
  }
}

// Initialisation de la boutique
displayProductsInPage();
updateCartDisplay();

console.log("Exercice 9 chargé ✅ — Boutique interactive prête 🎉");
