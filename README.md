# Boucle-la-doc

## Présentation du projet

- Cette application a été créée pour présenter le thème WordPress développé. Vous y trouverez une documentation complète regroupant :

- Les fonctionnalités uniques intégrées au thème

- Les instructions d'installation et de configuration

- Une FAQ pour répondre aux questions les plus fréquentes

L'objectif est d'offrir une ressource claire et accessible pour tirer pleinement parti du thème.

## Technologies utilisé

- [NextJS](https://nextjs.org/) est un framework basé sur React qui propose toutes les fonctionnalités avancées de React, ainsi que de nombreuses améliorations supplémentaires (comme le SSR Server Side Rendering, Routing intégré Optimisation du chargement JavaScript,... ).
- [SaSS](https://sass-lang.com/documentation/breaking-changes/import/) est un préprocesseur CSS pour rendre le css encore plus agréable à écrire mais également pour utiliser les variables, mixin fonction et conditions qui permette d'inclure un peu de logique dans le style (même si c'est pas vraiment là que la logique devrait vivre)

## Prérequis

- [Télécharger NodeJS 22.15.0 (LTS)](https://nodejs.org/en/download/current) sur le site sélectionner la version de NodeJS mentionner 22.15.0
- Requis npm -> s'installe en même temps que NodeJS
- [Installer Docker](https://docs.docker.com/engine/install/) Si vous optez pour la solution d'installation numéro 2 alors il faudra installer Docker

**_Vérifier les installation pour celà il suffit d'ouvrir un terminal et de faire `node -v` & `npm -v` ci vous avez une version alors félicitations vous pouvez passez à l'installation d'un projet._**

## Version actuel et amélioration future

- **Version** : La documentation est en version **_1.0_**
- **Amélioration**:
  - Sur /documentation/developer-guide/developer-php problème de style pour la sidebar à améliorer
  - Pour toutes les partie utilisant le composant Code il y a un problème au niveau du responsive j'ai implémenter un "workaround" en attendant de trouver une solution plus viable
  - sur documentation/developer-guide/developer- problème de slug incomplet il devrait se finir par developer-php **_Résolu mais pas encore déployer en prod_**
  - Refactorisation de certains éléments qui peuvent êtr edécouper en composant réutilisable
  - Idem pour le ScSS certaines classes peuvent être transformer en mixin
  - Certains liens (et je pense à tout les liens redirigeant vers la demo) ne mène nulle part pour l'instant car le thème n'a pas encore été déployer.
  - trouver un moyen de générer un build de fichier statique fonctionnel (problème avec la solution actuel css, ne charge pas correctement)

## Installation

Pour ce projet il existe à l'heure actuel 2 manières de le lancer comme je le mentionne plus haut je n'ai pas été capable de générer un build de fichier static (HTML/CSS/JS) viable.

### Méthode 1 - Serveur Local

La 1er méthode consiste à faire tourner un serveur local fournis avec NextJS pour celà il suffit de suivre les étapes ci-dessous

1. `cd sur le dossier du projet`
2. `npm run install` // Pour installer toutes les dépendances, pour celà il est nécessaire de posséder NodeJS et npm d'installer
3. une fois l'installation finis exécuter la commande `npm run dev`
4. celà va lancer le serveur et vous devriez normalement pouvoir ouvrir le navigateur à l'adress [http://127.0.0.1:3000](http://127.0.0.1:3000)

### Méthode 2 - Docker

**_Cet étape requiert d'avoir Docker d'installer sur votre machine et en train de tourner_**

1. `cd dans le dossier du projet`
2. `Docker compose up --build` // Celà va lancer la commande pour builder l'image et celà va lancer le serveur
3. une fois le serveur lancer vous pouvez aller sur l'adresse [http://127.0.0.1:3210](http://127.0.0.1:3210)

!! Attention lorsque vous quitter l'application n'oublie pas de faire `ctrl c` dans le terminal ou tourne le conteneur (vous le verrez car le terminal retourne le journal d'évènement du conteneur) il faudra également faire `docker compose down` pour nettoyer conteneur !!
