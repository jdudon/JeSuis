# JeSuis
Une boutique de goodies JS en ligne
# 🌍 Projet Fil Rouge — JeSuis - un iencli  
## 📘 Fichier Global  
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

## 📝 Consignes détaillées
1. Crée une variable contenant le **nom de la boutique**.  
2. Crée une variable contenant la **ville** où se situe la boutique.  
3. Crée une variable **booléenne** indiquant si la boutique est **ouverte** ou **fermée**.  
4. Crée une variable contenant le **nombre de produits disponibles**.  
5. Crée une variable contenant un **slogan** (une phrase courte).  
6. Affiche dans la console :  
   - un message de bienvenue contenant le nom de la boutique et la ville  
   - le slogan  
   - un message indiquant que la ouverte.

> 💡 Avant de choisir comment déclarer chaque variable, pose-toi la question :  
> “Est-ce que cette valeur est amenée à changer pendant l’exécution du programme ?”

## 🧩 Pseudo-code
```
- Créer une variable pour le nom de la boutique
- Créer une variable pour la ville
- Créer une variable booléenne pour savoir si la boutique est ouverte
- Créer une variable pour le nombre de produits
- Créer une variable pour le slogan

- Afficher un message de bienvenue dans la console

- Afficher le slogan dans la console

  - afficher dans la console un message “ouverte”
  - ou un message “fermée”

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
- Partir du slogan déjà créé à l’exercice 1

- Créer un premier message de bienvenue en collant du texte et des variables
  (indice : utiliser l’opérateur pour concaténer des chaînes)

- Créer un deuxième message de bienvenue en utilisant une autre syntaxe
  qui permet d’injecter des variables dans une chaîne
  (indice : pensez au gabarit de chaîne avec ${...})

- Calculer la longueur du slogan

- Créer une version en majuscules du slogan

- Créer une version du slogan où un mot est remplacé par un autre
  (indice : il existe une méthode pour remplacer une partie d’un texte)

- Afficher les deux messages, la longueur, la version majuscule
  et la version modifiée dans la console

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
- Créer une variable contenant un prix HT d’exemple

- Créer une variable contenant le taux de TVA
  (par exemple 0.2 pour 20%)

- Calculer le prix TTC à partir du prix HT et de la TVA
  (indice : utiliser une addition et une multiplication)

- Afficher le prix HT et le prix TTC dans la console

- Créer une variable pour compter le nombre de ventes
  (commencer à 0)

- Simuler une nouvelle vente en augmentant ce compteur
  (indice : utiliser l’opérateur pour ajouter 1)

- Afficher la nouvelle valeur du compteur dans la console

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
- Définir une fonction (calculatePriceTTC(priceHT)) qui :
    • reçoit un prix HT en paramètre
    • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
    • renvoie le prix TTC

- Définir une autre fonction (formatPrice(price)) qui :
    • reçoit un prix ( type :nombre)
    • arrondit ce prix à 2 décimales
    • ajoute le symbole de la monnaie
    • renvoie le résultat sous forme de texte
      (indice : il existe une méthode pour formater un nombre avec un certain nombre de décimales)

- Tester ces fonctions :
    • appeler la fonction de calcul du TTC avec différents prix HT
    • passer le résultat dans la fonction de formatage
    • afficher le résultat final dans la console

```
---

# 🟥 EXERCICE 5 — Afficher un produit dans la page (DOM)

### 🎯 Objectifs
- Manipuler le DOM avec JavaScript  
- Créer plusieurs éléments HTML avec `createElement()`  
- Remplir ces éléments avec des variables simples  
- Assembler une carte produit complète en JS  
- Afficher un seul produit dans la page  

---

## 📚 Notions utilisées
- `document.getElementById()`  
- `document.createElement()`  
- `.textContent`  
- `.src` / `.alt`  
- `appendChild()`  
- Fonctions déjà créées : `calculatePriceTTC()` et `formatPrice()`  

---

## 📝 Consignes détaillées

1. Crée quatre variables représentant le produit vedette :  
   - `featuredProductName` : le nom du produit  
   - `featuredProductPriceHT` : le prix HT  
   - `featuredProductDescription` : la description du produit  
   - `featuredProductImage` : l’URL de son image  

2. Récupère dans le DOM l’élément qui accueillera le produit.  
   Il s’agit de la section suivante dans ton HTML :  
```html
   <section id="product-list"></section>
```
   En JavaScript, tu devras récupérer cet élément via :  
```js
   const productList = document.getElementById("product-list")
```
3. Crée une fonction `createFeaturedProductCard()` qui devra :  
   - créer un élément `<article>`  
   - créer un `<img>` et définir sa `src` et son `alt`  
   - créer un `<h3>` contenant le nom du produit  
   - calculer le prix TTC du produit à partir du prix HT  
   - formater ce prix TTC avec `formatPrice()`  
   - créer un `<p>` contenant le prix TTC  
   - créer un `<p>` contenant la description du produit  
   - ajouter tous ces éléments dans l’article  
   - retourner l’article  

4. Affiche ton produit vedette dans la page :  
   - vide le contenu de `#product-list`  
   - appelle la fonction `createFeaturedProductCard()`  
   - ajoute la carte retournée dans `productList` avec `appendChild()`  

---

## 🧩 Pseudo-code
```
- Créer des variables pour :
  nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)

- Récupérer la section HTML où afficher le produit
  (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)

- Définir une fonction (createFeaturedProductCard()) qui :
    • crée un conteneur pour la carte  
      (indice : il existe une méthode du DOM pour créer un élément HTML)
    • crée une image :
        - lui donner la source de l'image
      (indice : pensez aux propriétés des balises <img>)
    • crée un titre et lui mettre le nom du produit  
      (indice : une propriété permet d’écrire du texte dans un élément)
    • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
      (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
    • formate ce prix TTC avec la fonction prévue pour ça
    • crée un paragraphe pour afficher le prix TTC
    • crée un autre paragraphe pour la description
    • assemble tous les éléments dans le conteneur
      (indice : pensez à une méthode qui ajoute un enfant dans un élément)
    • retourne ce conteneur

- Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
  (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)

- Appeler la fonction pour créer la carte

- Ajouter le résultat dans la section prévue
  (indice : même méthode que pour assembler les éléments dans la carte)
```
---

## 🧪 EXERCICE 6 — Boucle foreach & tableaux simples

### 🎯 Objectifs
- manipuler des tableaux simples
- comprendre comment `forEach()` parcourt un tableau
- réutiliser les fonctions de calcul/formatage déjà créées
- afficher des résultats structurés dans la console

### 📝 Consignes détaillées
1. Crée un tableau (productNames) contenant **les noms de plusieurs produits** (au moins 3).
2. Crée un second tableau (productPricesHT) contenant **les prix HT correspondants**, dans le même ordre que les noms.
3. Affiche dans la console :
   - la **taille** du tableau des produits
4. Crée une fonction `afficherProduitsConsole()` qui :
   - parcourt les noms de produits avec **forEach()**
   - récupère le prix HT correspondant (indice : utiliser l’index fourni par `forEach`)
   - calcule le prix TTC avec la fonction déjà créée
   - formate ce prix avec la fonction déjà créée
   - affiche dans la console une phrase du type :
     ```
     Produit : Nom — Prix : XX,XX €
     ```
5. Appelle la fonction pour vérifier l'affichage.

### 🔍 Pseudo-code
```
- créer tableau (productNames)
- créer tableau (productPricesHT)
- afficher dans la console la longueur du tableau (le nombre d'éléments à l'intérieur)
- définir fonction (afficherProduitsConsole()):
  - `Pour chaque nom dans mon tableau productNames:`
    (indice : il faudra récupérer l'index de chaque nom en plus. Donc on doit récupérer 2 informations.)
      - récupérer prix HT via `prixHT[index]`
      - calculer le prix TTC (avec une fonction créée plus tôt dans nos exercices)
      - formatter prix (avec une fonction créée plus tôt dans nos exercices)
      - afficher dans la console la phrase : "Produit : Nom — Prix : XX,XX €"
- appeler la fonction
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
3. Assure-toi que ta fonction `createProductCard(product)` fonctionne correctement avec les objets du tableau en la recréant (sert toi de l'ancienne version de la fonction pour t'aider).  
4. Crée une fonction `displayProductsInPage()` qui :
   - vide le conteneur  
   - parcourt le tableau `products`  
   - crée une carte produit pour chaque élément  
   - ajoute chaque carte dans la page  
5. Appelle `displayProductsInPage()` pour afficher tous les produits.

> 💡 Par rapport à l’Exercice 6 : ici on regroupe toutes les infos d’un produit au même endroit, ce qui rend le code plus clair et plus facile à maintenir.

## 🧩 Pseudo-code
```
- Créer un tableau contenant plusieurs produits
  (chaque produit regroupe ses informations dans une même structure)
  (indice : utiliser une syntaxe qui permet de stocker plusieurs propriétés ensemble)

- Chaque produit doit au minimum contenir :
    • un identifiant
    • un nom
    • un prix HT
    • une description
    • une image (URL)

- Récupérer la zone du DOM où tous les produits doivent être affichés

- Adapter ou créer une fonction qui :
    • reçoit un produit en paramètre
    • crée un conteneur pour la carte
    • crée les éléments nécessaires (image, nom, prix TTC, description)
    • utilise les propriétés du produit pour remplir ces éléments
    • réutilise les fonctions de calcul et de formatage de prix
    • renvoie la carte complète

- Créer une fonction qui :
    • vide le contenu de la zone d’affichage des produits
    • parcourt le tableau de produits
    • pour chaque produit :
        - crée une carte à partir de ce produit
        - ajoute cette carte dans la zone d’affichage

- Appeler cette fonction pour afficher tous les produits dans la page

```
---

## 💻📝 EXERCICE 8 — Panier & conditions (sans clics)

### 🎯 Objectifs
- Gérer un **état de panier** avec des variables globales
- Afficher cet état dans **plusieurs zones du DOM** (header + aside + message)
- Utiliser des **conditions** (`if / else if / else`) pour afficher un message différent selon le total
- Réutiliser la fonction `formatPrice()` déjà créée

---

## 📚 Notions utilisées
- Variables globales
- Conditions : `if`, `else if`, `else`
- Comparateurs : `===`, `<`, `>=`
- DOM : `document.getElementById()`, `.textContent`
- Réutilisation de fonctions existantes (`formatPrice()`)

---

## 🧱 Variables, fonctions & éléments DOM à utiliser

- Variables globales du panier :
  - `cartItemCount` (nombre total d’articles dans le panier)
  - `cartTotal` (total du panier en TTC)

- Fonctions à créer :
  - `getCartMessage(total)` → retourne un texte selon la valeur de `total`
  - `updateCartDisplay()` → met à jour l’affichage du panier dans la page

- Éléments du DOM à récupérer (avec `getElementById`) :
  - `cart-count` → le nombre d’articles dans la navbar (header)
  - `cart-total` → le total du panier dans la navbar (header)
  - `cart-count-aside` → le nombre d’articles dans l’aside
  - `cart-total-aside` → le total du panier dans l’aside
  - `cart-message` → le message affiché dans l’aside (sous le panier)

---

## 📝 Consignes détaillées

1. **Créer les variables globales du panier :**
   - Crée une variable `cartItemCount` initialisée à `0`.  
   - Crée une variable `cartTotal` initialisée à `0`.  

2. **Récupérer les éléments du DOM :**
   - Récupère l’élément du header qui affiche le nombre d’articles (`id="cart-count"`) et stocke-le dans `cartCountHeader`.
   - Récupère l’élément du header qui affiche le total (`id="cart-total"`) et stocke-le dans `cartTotalHeader`.
   - Récupère l’élément de l’aside qui affiche le nombre d’articles (`id="cart-count-aside"`) et stocke-le dans `cartCountAside`.
   - Récupère l’élément de l’aside qui affiche le total (`id="cart-total-aside"`) et stocke-le dans `cartTotalAside`.
   - Récupère l’élément qui affichera le message (`id="cart-message"`) et stocke-le dans `cartMessage`.

3. **Créer la fonction `getCartMessage(total)` :**
   - Cette fonction prend un paramètre `total`.
   - À l’intérieur, utilise une structure :
     - si `total` est égal à `0`, retourne un message du type : “Votre panier est vide.”
     - sinon, si `total` est inférieur à `50`, retourne un message du type : “Ajoutez encore des produits…”
     - sinon, retourne un message du type : “Livraison offerte 🎉 …”
   - Utilise des comparateurs (`===`, `<`) et un `if / else if / else`.

4. **Créer la fonction `updateCartDisplay()` :**
   - À l’intérieur, mets à jour :
     - le texte de `cartCountHeader` avec `cartItemCount`
     - le texte de `cartTotalHeader` avec `cartTotal` formaté grâce à `formatPrice(cartTotal)`
     - le texte de `cartCountAside` avec `cartItemCount`
     - le texte de `cartTotalAside` avec `cartTotal` formaté
     - le texte de `cartMessage` avec le résultat de `getCartMessage(cartTotal)`
   - Pense à vérifier que chaque élément du DOM existe avant de modifier son `textContent` (optionnel mais conseillé).

5. **Tester plusieurs états du panier (manuellement dans le code) :**
   - Modifie la valeur de `cartItemCount` et `cartTotal` pour simuler un panier vide, un panier sous 50€ et un panier au-dessus de 50€.
   - Après chaque modification, appelle `updateCartDisplay()` pour voir le résultat dans la page.
   - Exemple d’ordre de tests :
     - `cartItemCount = 0; cartTotal = 0;`
     - `cartItemCount = 2; cartTotal = 30;`
     - `cartItemCount = 4; cartTotal = 60;`

---

## 🧩 Pseudo-code (version guidée)
```
- Définir `cartItemCount = 0`
- Définir `cartTotal = 0`

- Récupérer les éléments du DOM :
  - `cartCountHeader` ← élément avec id `"cart-count"`
  - `cartTotalHeader` ← élément avec id `"cart-total"`
  - `cartCountAside` ← élément avec id `"cart-count-aside"`
  - `cartTotalAside` ← élément avec id `"cart-total-aside"`
  - `cartMessage` ← élément avec id `"cart-message"`

- Définir la fonction `getCartMessage(total)` :
  - si `total === 0` → retourner message panier vide
  - sinon si `total < 50` → retourner message d’encouragement
  - sinon → retourner message livraison offerte

- Définir la fonction `updateCartDisplay()` :
  - mettre à jour le texte des éléments du header avec `cartItemCount` et `formatPrice(cartTotal)`
  - mettre à jour le texte des éléments de l’aside avec `cartItemCount` et `formatPrice(cartTotal)`
  - mettre à jour le texte du message en appelant `getCartMessage(cartTotal)`

- Tester :
  - changer `cartItemCount` et `cartTotal`
  - appeler `updateCartDisplay()`
  - répéter pour différents cas (0, < 50, >= 50)
```
---

---

## 💻📝 EXERCICE 9 — Panier interactif (version complète)

### 🎯 Objectifs
- Réutiliser le panier de l’exercice 8 (variables + affichage)
- Ajouter des produits au panier **avec un clic sur un bouton**
- Utiliser un **événement** (`click`) avec `addEventListener`
- Mettre à jour le DOM de manière dynamique à chaque clic

---

## 📚 Notions utilisées
- Événements : `addEventListener("click", ...)`
- Fonctions avec paramètres (`addToCart(product)`)
- Réutilisation :
  - `calculatePriceTTC()`
  - `formatPrice()`
  - `updateCartDisplay()`
  - `products` (tableau d’objets)
  - `createProductCard(product)` et `displayProductsInPage()`

---

## 🧱 Variables, fonctions, classes & éléments DOM à utiliser

- Variables globales (déjà créées à l’exo 8, réutilisées) :
  - `cartItemCount`
  - `cartTotal`

- Fonctions à réutiliser :
  - `calculatePriceTTC(priceHT)`
  - `formatPrice(price)`
  - `getCartMessage(total)`
  - `updateCartDisplay()`

- Fonctions à créer ou modifier :
  - `addToCart(product)` → ajoute un produit au panier et appelle `updateCartDisplay()`
  - nouvelle version de `createProductCard(product)` → ajoute un bouton et branche l’événement
  - `displayProductsInPage()` → affiche les produits avec les nouveaux boutons

- Éléments du DOM :
  - Section des produits : `productListSection` liée à l’élément avec `id="product-list"`

- Classe CSS pour le bouton “Ajouter au panier” :
  - `btn-add` (à ajouter avec `classList.add("btn-add")` sur le bouton)

---

## 📝 Consignes détaillées

1. **Réinitialiser l’état du panier au début de l’exercice 9 :**
   - Remets `cartItemCount` à `0`.
   - Remets `cartTotal` à `0`.
   - Appelle `updateCartDisplay()` une première fois pour partir d’un panier vide.

2. **Créer la fonction `addToCart(product)` :**
   - Cette fonction prend un paramètre `product`.
   - À l’intérieur :
     - calcule le prix TTC du produit à partir de `product.priceHT` en utilisant `calculatePriceTTC()`.
     - ajoute ce montant à `cartTotal`.
     - augmente `cartItemCount` de 1.
     - appelle `updateCartDisplay()` pour mettre à jour l’interface.

3. **Mettre à jour la fonction `createProductCard(product)` :**
   - Reprends la fonction qui :
     - crée un `<article>`
     - crée l’image, le nom, le prix TTC, la description
     - utilise les propriétés de `product` (`product.image`, `product.name`, `product.priceHT`, `product.description`)
   - Ajoute un bouton :
     - crée un élément `<button>`.
     - change son texte : “Ajouter au panier”.
     - ajoute la classe CSS `btn-add` avec `button.classList.add("btn-add")`.
   - Ajoute un gestionnaire d’événement sur ce bouton avec `addEventListener("click", ...)` :
     - dans la fonction appelée au clic, appelle `addToCart(product)`.
   - Ajoute le bouton à la fin de la carte avant de retourner l’`<article>`.

4. **Mettre à jour ou recréer `displayProductsInPage()` :**
   - Récupère la section des produits (`productListSection`) liée à `id="product-list"`.
   - Vide son contenu (`innerHTML = ""`).
   - Parcourt le tableau `products` (tableau d’objets).
   - Pour chaque produit :
     - crée une carte via `createProductCard(product)`.
     - ajoute la carte dans la section des produits.

5. **Initialisation finale :**
   - Appelle `displayProductsInPage()` pour afficher tous les produits avec le bouton “Ajouter au panier”.
   - Appelle `updateCartDisplay()` une dernière fois pour s’assurer que l’affichage du panier est correct au départ.
   - Teste dans le navigateur :
     - clique plusieurs fois sur les boutons “Ajouter au panier”
     - vérifie que le nombre d’articles et le total se mettent bien à jour
     - vérifie que le message `cart-message` change en fonction du total.

---

## 🧩 Pseudo-code (version guidée)
```
- Remettre `cartItemCount = 0`
- Remettre `cartTotal = 0`
- Appeler `updateCartDisplay()`

- Définir `addToCart(product)` :
  - calculer `priceTTC` à partir de `product.priceHT`
  - ajouter `priceTTC` à `cartTotal`
  - augmenter `cartItemCount`
  - appeler `updateCartDisplay()`

- Mettre à jour `createProductCard(product)` :
  - créer un conteneur (article)
  - créer et remplir les éléments (image, titre, prix TTC, description)
  - créer un bouton
    - texte : “Ajouter au panier”
    - classe CSS : `btn-add`
    - au clic → appeler `addToCart(product)`
  - retourner le conteneur

- Définir `displayProductsInPage()` :
  - vider le contenu de `productListSection`
  - pour chaque `product` dans `products` :
    - créer une carte avec `createProductCard(product)`
    - l’ajouter à `productListSection`

- À la fin du script :
  - appeler `displayProductsInPage()`
  - appeler `updateCartDisplay()`
```

