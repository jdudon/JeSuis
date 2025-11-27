# 🌍 Projet Fil Rouge — Ma Boutique JS  
## 📘 Fichier Global (FR + EN) — Version Élèves  
Contient : Objectifs, Notions, Consignes, Pseudo-code (sans corrections ni solutions)

---

# 🧭 TABLE DES MATIÈRES

1. Exercice 1 — Variables & Informations de base  
2. Exercice 2 — Chaînes de caractères  
3. Exercice 3 — Nombres, Calculs & TVA  
4. Exercice 4 — Fonctions  
5. Exercice 5 — Afficher 1 produit dans la page  
6. Exercice 6 — Tableaux & boucle console  
7. Exercice 7 — Afficher plusieurs produits dans la page  
8. Exercice 8 — Panier & conditions  
9. Exercice 9 — Panier interactif  

---

# 🟦 EXERCICE 1 — Variables & informations de base

## 🎯 Objectifs
- Déclarer des variables
- Stocker des informations simples
- Utiliser différents types de données
- Afficher des données dans la console

## 🧠 Notions
- let / const  
- string, number, boolean  
- console.log()  
- Condition simple (if / else)

## 📝 Consignes détaillées
1. Crée une variable contenant le **nom de la boutique**.  
2. Crée une variable contenant la **ville** où se situe la boutique.  
3. Crée une variable **booléenne** indiquant si la boutique est **ouverte** ou **fermée**.  
4. Crée une variable contenant le **nombre de produits disponibles**.  
5. Crée une variable contenant un **slogan** (une phrase courte).  
6. Affiche dans la console :  
   - un message de bienvenue contenant le nom de la boutique et la ville  
   - le slogan  
   - un message indiquant si la boutique est ouverte ou fermée  

> 💡 Avant de choisir comment déclarer chaque variable, pose-toi la question :  
> “Est-ce que cette valeur est amenée à changer pendant l’exécution du programme ?”

## 🧩 Pseudo-code
```
shopName = ...
city = ...
isOpen = ...
productCount = ...
slogan = ...

console.log("Bienvenue dans " + shopName + " à " + city)
console.log(slogan)

if (isOpen):
    afficher "La boutique est ouverte"
else:
    afficher "La boutique est fermée"
```
---

# 🟩 EXERCICE 2 — Chaînes de caractères & messages

## 🎯 Objectifs
- Manipuler des chaînes de caractères
- Créer des messages dynamiques
- Utiliser concaténation et template strings
- Transformer et analyser un texte

## 🧠 Notions
- Concaténation (`+`)
- Template strings (`` `texte ${variable}` ``)
- `.length`
- `.toUpperCase()`
- `.replace()`

## 📝 Consignes détaillées
1. Crée une variable `welcomeMessage` contenant un message construit avec une **concaténation**.  
2. Crée une variable `welcomeMessage2` contenant le même message, mais cette fois avec une **template string**.  
3. Stocke la **longueur du slogan** dans une variable.  
4. Crée une variable contenant une **version en majuscules** du slogan.  
5. Modifie le slogan en changeant **un mot** grâce à `.replace()`.  
6. Affiche dans la console :
   - `welcomeMessage`
   - `welcomeMessage2`
   - la longueur du slogan
   - la version en majuscules
   - la version modifiée du slogan  

> 💡 Rappelle-toi : les template strings sont souvent plus lisibles que les concaténations classiques.

## 🧩 Pseudo-code
```
welcomeMessage = "Bienvenue dans " + shopName
welcomeMessage2 = `Bienvenue dans ${shopName}`

sloganLength = slogan.length
sloganUppercase = slogan.toUpperCase()
sloganModified = slogan.replace("motÀChanger", "nouveauMot")

console.log(welcomeMessage)
console.log(welcomeMessage2)
console.log(sloganLength)
console.log(sloganUppercase)
console.log(sloganModified)
```
---

# 🟧 EXERCICE 3 — Nombres, calculs & TVA

## 🎯 Objectifs
- Manipuler des valeurs numériques
- Effectuer des opérations mathématiques simples
- Comprendre le calcul d’un prix TTC
- Manipuler un compteur

## 🧠 Notions
- Opérations : `+`, `*`
- Incrémentation : `++`
- Affichage de résultats numériques
- Principe du calcul TVA

## 📝 Consignes détaillées
1. Crée une variable contenant un **prix HT** d’exemple (un nombre).  
2. Crée une variable `VAT` contenant le **taux de TVA** (ex : `0.2`).  
3. Calcule le **prix TTC** et stocke-le dans une nouvelle variable.  
4. Affiche dans la console :  
   - le prix HT  
   - le prix TTC  
5. Crée une variable `salesCount` initialisée à `0`, puis :  
   - incrémente-la à l’aide de `++`  
   - affiche sa nouvelle valeur dans la console  

> 💡 Le calcul TTC suit toujours la formule : `TTC = HT + (HT × TVA)`.

## 🧩 Pseudo-code
```
priceHT = ...
VAT = 0.2

priceTTC = priceHT + priceHT * VAT

console.log(priceHT)
console.log(priceTTC)

salesCount = 0
salesCount++      // augmente de 1
console.log(salesCount)
```
---

# 🟨 EXERCICE 4 — Fonctions de prix

## 🎯 Objectifs
- Créer des fonctions simples
- Comprendre le rôle des paramètres
- Utiliser `return` pour renvoyer une valeur
- Formater correctement un prix en euros

## 🧠 Notions
- Déclaration de fonction
- Paramètres
- Return
- `.toFixed()`
- Appel de fonction

## 📝 Consignes détaillées
1. Crée une fonction `calculatePriceTTC(priceHT)` qui :
   - reçoit un prix HT en paramètre  
   - calcule le prix TTC  
   - **renvoie** ce prix TTC  
2. Crée une fonction `formatPrice(price)` qui :
   - reçoit un nombre  
   - arrondit la valeur à **2 décimales**  
   - renvoie une chaîne de caractères du type : `"12,99 €"`  
3. Teste les deux fonctions en affichant le résultat formaté dans la console pour plusieurs prix HT de ton choix.

> 💡 Une fonction doit idéalement faire **une seule chose**, mais bien.

## 🧩 Pseudo-code
```
function calculatePriceTTC(priceHT):
    TTC = priceHT + priceHT * VAT
    return TTC

function formatPrice(price):
    formatted = price.toFixed(2)
    return formatted + " €"

test1 = calculatePriceTTC(10)
console.log(formatPrice(test1))

test2 = calculatePriceTTC(19.99)
console.log(formatPrice(test2))
```
---

# 🟥 EXERCICE 5 — Afficher un produit dans la page (DOM)

## 🎯 Objectifs
- Manipuler le DOM en JavaScript
- Créer et insérer des éléments HTML dynamiquement
- Construire une carte produit simple
- Réutiliser les fonctions de prix créées précédemment

## 🧠 Notions
- `document.getElementById()`
- `document.createElement()`
- `appendChild()`
- `classList.add()`
- Recalcul et formatage du prix TTC

## 📝 Consignes détaillées
1. Crée un objet `featuredProduct` contenant au minimum :
   - `name` → nom du produit  
   - `priceHT` → prix hors taxes  
   - `description` → courte phrase  
   - `image` → URL d'une image  
2. Récupère dans le DOM l’élément `<section id="product-list">`.  
3. Crée la fonction `createProductCard(product)` qui :
   - crée un élément `<article>`  
   - crée un élément `<img>` pour l’image  
   - crée un élément `<h3>` pour afficher le nom  
   - crée un élément `<p>` pour afficher le prix TTC  
   - crée un élément `<p>` pour afficher la description  
   - assemble ces éléments et renvoie `<article>`  
4. Vide le conteneur puis ajoute **une carte** correspondant au produit vedette.

> 💡 Cet exercice permet de comprendre le lien entre données → HTML généré par JavaScript.

## 🧩 Pseudo-code
```
featuredProduct = {
    name: "...",
    priceHT: ...,
    description: "...",
    image: "..."
}

productList = getElementById("product-list")

function createProductCard(product):
    article = createElement("article")
    img = createElement("img")
    title = createElement("h3")
    priceElt = createElement("p")
    desc = createElement("p")

    img.src = product.image
    title.textContent = product.name
    priceElt.textContent = formatPrice(calculatePriceTTC(product.priceHT))
    desc.textContent = product.description

    article.appendChild(img)
    article.appendChild(title)
    article.appendChild(priceElt)
    article.appendChild(desc)

    return article

productList.innerHTML = ""
card = createProductCard(featuredProduct)
productList.appendChild(card)
```
---

# 🟫 EXERCICE 6 — Tableaux simples & boucle for

## 🎯 Objectifs
- Manipuler des tableaux simples
- Comprendre l’indexation : `array[i]`
- Parcourir un tableau avec une boucle `for`
- Réutiliser les fonctions `calculatePriceTTC()` et `formatPrice()`

## 🧠 Notions
- Tableaux `[]`
- Propriété `.length`
- Boucle `for`
- Appels de fonctions dans une boucle

## 📝 Consignes détaillées
1. Crée un tableau `productNames` contenant les **noms de plusieurs produits** (au moins 3).  
2. Crée un tableau `productPricesHT` contenant leurs **prix HT**, dans le **même ordre**.  
3. Affiche dans la console la **longueur** du tableau `productNames`.  
4. Crée une fonction `displayProductsInConsole()` qui :
   - parcourt les deux tableaux avec une boucle `for`  
   - récupère le **nom** du produit avec `productNames[i]`  
   - récupère le **prix HT** avec `productPricesHT[i]`  
   - calcule le **prix TTC** grâce à `calculatePriceTTC()`  
   - formate le prix TTC grâce à `formatPrice()`  
   - affiche une ligne du type :  
     `"Produit 1 : Mug JS — 14,99 € TTC"`  
5. Appelle la fonction.

> 💡 Cet exercice introduit la logique “deux tableaux synchronisés”, avant de passer aux objets dans l’exercice suivant.

## 🧩 Pseudo-code
```
productNames = ["...", "...", "..."]
productPricesHT = [12.5, 19.99, 7.5]

console.log(productNames.length)

function displayProductsInConsole():
    for i allant de 0 à productNames.length:
        name = productNames[i]
        priceHT = productPricesHT[i]
        TTC = calculatePriceTTC(priceHT)
        formatted = formatPrice(TTC)
        console.log(name + " — " + formatted)

displayProductsInConsole()
```
---

# 🟪 EXERCICE 7 — Tableau d’objets & affichage dynamique dans la page

## 🎯 Objectifs
- Structurer les données d’un produit avec des objets
- Manipuler un tableau d’objets
- Générer plusieurs cartes produit à partir d’un tableau
- Réutiliser `createProductCard()` pour un affichage dynamique

## 🧠 Notions
- Objet `{ clé: valeur }`
- Tableau d’objets `[ {}, {}, ... ]`
- Boucle `for`
- Génération dynamique d’éléments HTML
- Réutilisation de fonctions

## 📝 Consignes détaillées
1. Crée un tableau `products` contenant plusieurs objets.  
   Chaque objet doit avoir au minimum :
   - `id`  
   - `name`  
   - `priceHT`  
   - `description`  
   - `image` (URL)  
2. Récupère dans le DOM l’élément `<section id="product-list">`.  
3. Assure-toi que ta fonction `createProductCard(product)` fonctionne correctement avec les objets du tableau.  
4. Crée une fonction `displayProductsInPage()` qui :
   - vide le conteneur  
   - parcourt le tableau `products`  
   - crée une carte produit pour chaque élément  
   - ajoute chaque carte dans la page  
5. Appelle `displayProductsInPage()` pour afficher tous les produits.

> 💡 Par rapport à l’Exercice 6 : ici on regroupe toutes les infos d’un produit au même endroit, ce qui rend le code plus clair et plus facile à maintenir.

## 🧩 Pseudo-code
```
products = [
    { id: 1, name: "...", priceHT: ..., description: "...", image: "..." },
    { id: 2, name: "...", priceHT: ..., description: "...", image: "..." },
    ...
]

productList = getElementById("product-list")

function displayProductsInPage():
    productList.innerHTML = ""
    for chaque product dans products:
        card = createProductCard(product)
        productList.appendChild(card)

displayProductsInPage()
```
---

# 🟫 EXERCICE 8 — Panier & conditions (sans clic)

## 🎯 Objectifs
- Gérer un état global de panier (nombre d’articles + total)
- Générer un message différent selon le montant du panier
- Mettre à jour le DOM en fonction de cet état
- Tester plusieurs scénarios de panier (vide, partiel, livraison offerte)

## 🧠 Notions
- Variables globales (`cartItemCount`, `cartTotal`)
- Comparaisons (`===`, `<`, `>=`)
- Conditions `if / else if / else`
- Mise à jour du DOM avec `.textContent`
- Réutilisation de fonctions

## 📝 Consignes détaillées
1. Crée deux variables globales pour représenter l’état du panier :
   - `cartItemCount` (nombre d’articles dans le panier)  
   - `cartTotal` (total du panier en TTC)  
2. Crée une fonction `generateCartMessage(total)` qui renvoie :
   - `"Votre panier est vide."` si `total` vaut `0`  
   - un message d’incitation si `total` est **strictement inférieur** à `50`  
   - un message `"Livraison offerte 🎉"` (ou équivalent) si `total` est **supérieur ou égal** à `50`  
3. Récupère les éléments liés au panier dans le DOM, par exemple :
   - `cart-count` → affichage du nombre d’articles  
   - `cart-total` → affichage du total formaté  
   - `cart-message` → affichage du message généré  
4. Crée une fonction `updateCartDisplay()` qui :
   - met à jour l’affichage du **nombre d’articles**  
   - met à jour l’affichage du **total** (tu peux utiliser `formatPrice(cartTotal)`)  
   - met à jour le **message** du panier avec `generateCartMessage(cartTotal)`  
5. Modifie manuellement dans ton code les valeurs de `cartItemCount` et `cartTotal` pour tester :
   - un panier **vide**  
   - un panier avec total **< 50**  
   - un panier avec total **≥ 50**  
   À chaque fois, appelle `updateCartDisplay()` et observe le rendu dans la page.

> 💡 Ici, on “triche” encore un peu : on change les valeurs à la main pour tester la logique.  
> Dans l’exercice suivant, ce sera fait automatiquement grâce aux clics sur les boutons.

## 🧩 Pseudo-code
```
cartItemCount = 0
cartTotal = 0

function generateCartMessage(total):
    if (total === 0):
        return "Votre panier est vide."
    else if (total < 50):
        return "Ajoutez encore des produits pour atteindre 50 € et débloquer la livraison offerte."
    else:
        return "Livraison offerte 🎉 Merci pour votre commande !"

cartCountElement = getElementById("cart-count")
cartTotalElement = getElementById("cart-total")
cartMessageElement = getElementById("cart-message")

function updateCartDisplay():
    cartCountElement.textContent = cartItemCount
    cartTotalElement.textContent = formatPrice(cartTotal)
    cartMessageElement.textContent = generateCartMessage(cartTotal)

// Tests manuels
cartItemCount = 0
cartTotal = 0
updateCartDisplay()

cartItemCount = 2
cartTotal = 30
updateCartDisplay()

cartItemCount = 4
cartTotal = 60
updateCartDisplay()
```
---

# 🟥 EXERCICE 9 — Panier interactif (avec clics)

## 🎯 Objectifs
- Rendre la boutique interactive
- Réagir à un clic sur “Ajouter au panier”
- Mettre à jour l’état du panier (nombre d’articles + total)
- Actualiser le DOM automatiquement après chaque action

## 🧠 Notions
- `addEventListener("click", ...)`
- Fonctions avec paramètres (`addToCart(product)`)
- Réutilisation d’un état global (`cartItemCount`, `cartTotal`)
- Mise à jour du DOM (textContent)
- Réutilisation de fonctions existantes (`calculatePriceTTC`, `formatPrice`, `updateCartDisplay`, `generateCartMessage`)

## 📝 Consignes détaillées
1. Vérifie que tu disposes bien :
   - du tableau `products` (tableau d’objets produit)  
   - des fonctions `calculatePriceTTC(priceHT)` et `formatPrice(price)`  
   - des variables globales `cartItemCount` et `cartTotal`  
   - de la fonction `generateCartMessage(total)`  
   - de la fonction `updateCartDisplay()` qui met à jour le DOM du panier  
2. Modifie la fonction `createProductCard(product)` pour :
   - créer un bouton (par ex. `<button>Ajouter au panier</button>`)  
   - ajouter une classe CSS si besoin (ex: `"btn-add"`)  
   - ajouter un écouteur d’événement :
     - sur le clic (`"click"`)  
     - qui appelle la fonction `addToCart(product)`  
3. Crée une fonction `addToCart(product)` qui :
   - reçoit un objet `product` en paramètre  
   - calcule le **prix TTC** du produit avec `calculatePriceTTC(product.priceHT)`  
   - ajoute ce montant à `cartTotal`  
   - incrémente `cartItemCount` de 1  
   - appelle `updateCartDisplay()` pour mettre à jour le DOM (compteur, total, message)  
4. Vérifie que ta fonction `displayProductsInPage()` :
   - vide bien le conteneur de produits  
   - parcourt le tableau `products`  
   - crée une carte pour chaque produit (avec le bouton inclus)  
   - ajoute toutes les cartes dans la page  
5. Au chargement de la page :
   - appelle `displayProductsInPage()` pour afficher les produits  
   - appelle `updateCartDisplay()` une première fois pour initialiser l’affichage du panier (0 article, total 0, message de base)  
6. Teste le comportement :
   - clique plusieurs fois sur “Ajouter au panier” pour différents produits  
   - observe comment évoluent :
     - le nombre d’articles  
     - le total  
     - le message du panier  

> 💡 Cet exercice relie enfin toutes les briques :  
> données (products) → affichage (DOM) → interactions (clics) → mise à jour du panier.

## 🧩 Pseudo-code
```
cartItemCount = 0
cartTotal = 0

function addToCart(product):
    priceTTC = calculatePriceTTC(product.priceHT)
    cartTotal = cartTotal + priceTTC
    cartItemCount = cartItemCount + 1
    updateCartDisplay()

function createProductCard(product):
    card = createElement("article")
    // ... image, titre, prix, description ...
    button = createElement("button")
    button.textContent = "Ajouter au panier"

    button.addEventListener("click", function():
        addToCart(product)
    )

    card.appendChild(button)
    return card

function displayProductsInPage():
    productList.innerHTML = ""
    pour chaque product dans products:
        card = createProductCard(product)
        productList.appendChild(card)

displayProductsInPage()
updateCartDisplay()
```

