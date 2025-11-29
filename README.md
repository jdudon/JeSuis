# JeSuis
Une boutique de goodies JS en ligne
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
- Créer une variable pour le nom de la boutique
- Créer une variable pour la ville
- Créer une variable booléenne pour savoir si la boutique est ouverte
- Créer une variable pour le nombre de produits
- Créer une variable pour le slogan

- Afficher un message de bienvenue dans la console
  (indice : concaténer texte + variables)

- Afficher le slogan dans la console

- Selon la variable qui indique si la boutique est ouverte :
  - afficher dans la console un message “ouverte”
  - ou un message “fermée”
  (indice : utiliser une condition simple avec if / else)

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
- Définir une fonction qui :
    • reçoit un prix HT en paramètre
    • calcule le prix TTC (en réutilisant la formule de l’exercice 3)
    • renvoie le prix TTC

- Définir une autre fonction qui :
    • reçoit un prix (nombre)
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

- Créer des variables pour :
  nom du produit, prix HT, description, image

- Récupérer la section HTML où afficher le produit
  (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)

- Définir une fonction qui :
    • crée un conteneur pour la carte  
      (indice : il existe une méthode du DOM pour créer un élément HTML)
    • crée une image :
        - lui donner l’URL
        - lui donner un texte alternatif
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
- Créer un tableau contenant plusieurs noms de produits
  (au moins 3)

- Créer un deuxième tableau contenant les prix HT
  dans le même ordre que les noms

- Afficher dans la console la taille du tableau de noms
  (indice : utiliser la propriété qui donne le nombre d’éléments d’un tableau)

- Définir une fonction qui :
    • parcourt les tableaux avec une boucle
      (indice : utiliser un index numérique qui commence à 0)
    • pour chaque position :
        - récupérer le nom du produit
        - récupérer le prix HT correspondant
        - calculer le prix TTC avec la fonction prévue pour ça
        - formater le prix TTC
        - construire une phrase avec le nom et le prix TTC
        - afficher cette phrase dans la console

- Appeler cette fonction pour vérifier que tous les produits sont affichés

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
- Créer des variables globales pour représenter l’état du panier :
    • nombre d’articles
    • total du panier (en TTC)

- Définir une fonction qui :
    • reçoit un total en paramètre
    • retourne un texte différent selon la valeur du total :
        - si le total est égal à 0 → message “panier vide”
        - si le total est inférieur à un certain seuil → message d’encouragement
        - sinon → message indiquant un avantage (ex : livraison offerte)
      (indice : utiliser une structure avec if / else if / else)

- Récupérer dans le DOM :
    • l’élément qui affiche le nombre d’articles
    • l’élément qui affiche le total
    • l’élément qui affiche le message du panier

- Définir une fonction qui :
    • met à jour l’affichage du nombre d’articles
    • met à jour l’affichage du total
      (indice : penser à réutiliser la fonction de formatage de prix)
    • met à jour le message du panier en utilisant la fonction de génération de message

- Modifier manuellement les valeurs du nombre d’articles et du total
  dans le code pour simuler différents cas :
    • panier vide
    • panier avec un total faible
    • panier avec un total suffisant pour obtenir l’avantage

- Appeler la fonction de mise à jour de l’affichage après chaque modification
  pour vérifier le comportement dans chaque cas

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
- Vérifier que l’on dispose :
    • du tableau de produits
    • des variables qui représentent le panier (nombre d’articles + total)
    • des fonctions pour calculer le prix TTC et pour formater le prix
    • de la fonction qui met à jour l’affichage du panier
      (nombre, total, message)

- Dans la fonction qui crée une carte produit :
    • ajouter un bouton pour permettre l’ajout au panier
    • ajouter un écouteur d’événement sur ce bouton
      (indice : utiliser la méthode qui permet de réagir à un "click")
    • dans cet écouteur, appeler une fonction responsable d’ajouter ce produit au panier

- Définir une fonction qui :
    • reçoit un produit en paramètre
    • calcule le prix TTC de ce produit
    • ajoute ce montant au total du panier
    • augmente le nombre d’articles dans le panier
    • appelle la fonction de mise à jour de l’affichage du panier

- Au chargement de la page :
    • afficher tous les produits (en utilisant la fonction de l’exercice précédent)
    • initialiser l’affichage du panier une première fois

- Tester en cliquant sur différents boutons d’ajout au panier
  pour vérifier que :
    • le nombre d’articles augmente
    • le total se met à jour
    • le message du panier change en fonction du total

```

