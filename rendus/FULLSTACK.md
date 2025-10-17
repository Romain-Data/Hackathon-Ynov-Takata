# Hackathon - Ynov Toulouse 2025 : Babyfoot du futur - FullStack

## Equipe

- Dev' FullStack 1 : ANTRAYGUES Bastien
- Dev' FullStack 2 : BERNARD Julien
- Dev' FullStack 3 : ABADIE Thomas

Et si on réinventait l’expérience babyfoot à Ynov ? L’objectif de ce hackathon est de moderniser et digitaliser l’usage des babyfoots présents dans le Souk pour créer un service _next-gen_, pensé pour près de 1000 étudiants !

Que ce soit via des gadgets connectés, un système de réservation intelligent, des statistiques en temps réel ou des fonctionnalités robustes pour une utilisation massive, nous cherchons des solutions innovantes qui allient créativité et technologie.

Toutes les filières sont invitées à contribuer : Dev, Data, Infra, IoT, Systèmes embarqués… chaque idée compte pour rendre le babyfoot plus fun, plus pratique et plus connecté.

Votre mission : transformer le babyfoot classique en expérience high-tech pour Ynov !

---

> Ce fichier contient les informations spécifiques au développement FullStack de votre projet. Il suffit d'en remplir une seule fois, même si vous êtes plusieurs développeurs FullStack dans l'équipe.

# Requis

Ce README contient les requis fonctionnels de la partie FullStack de votre projet. Il doit compléter le README principal à la racine du projet, et servira la partie de votre note propre à votre spécialité.

Basez-vous sur les spécifications dans [SPECIFICATIONS.md](../SPECIFICATIONS.md) pour remplir ce document.

Décrivez ici les fonctionnalités que vous avez implémentées, votre démarche, les choix techniques que vous avez faits, les difficultés rencontrées, etc. Précisez également dans quelle mesure vous avez pu collaborer avec les autres spécialités.

Autrement, il n'y a pas de format imposé, mais essayez de rester clair et concis, je ne vous demande pas de rédiger un roman, passez à l'essentiel, et épargnez-moi de longues pages générées par IA (malusée).

En conclusion, cela doit résumer votre travail en tant que développeur.se FullStack, et vous permettre de garder un trace écrite de votre contribution au projet.

Merci de votre participation, et bon courage pour la suite du hackathon !

# Les fonctionallités implémentées

## Front-end
- Initialisation du projet **Angular**.
- Création du **store** pour les entités `User`, `Game` et `Babyfoot`, avec des données en dur en attendant l’évolution du back-end.
- Création de la **page d’accueil**, contenant un tableau permettant de suivre les scores des parties en cours.
- Création de la **page d’authentification** et de la **page de création de compte**.
- Création de la **page Dashboard**, avec un tableau récapitulant les informations sur les babyfoots et offrant la possibilité de `modifier` ou `supprimer` un babyfoot.
- Création de la **page User**, affichant les informations de l’utilisateur et permettant de `créer une partie`.

## Back-end
- Initialisation du projet avec création des entités : User, Game, BabyFoot_table, User_Game
- Ajout du CRUD Pour chaque entité ( Repository, Service, Controller )
- Création d’un service et d’un contrôleur génériques contenant la logique du CRUD, hérités par l’ensemble des services et contrôleurs spécifiques.
- Ajout d’une fonctionnalité `updateScore` permettant de mettre à jour le score d’une partie dans la base de données.
- Création de DTO : BabyFoot_tableDTO, UserDto, GameDto, User_GameDto, GameResultDto

# Technologies utilisées

## Angular

**Rôle** :
- Framework javascript Front-end

**Pourquoi ce choix** :
- framework connu par l'équipe dev
- simple d'utilisation

**Impact** :
- Initialisation rapide des pages et séquencement des fichiers pour une meilleur organisation dans le projet.

## Spring Boot
**Rôle** :
- Framework Java en back-end
- API Rest qui communique avec le front-end, et la base de donnée

**Pourquoi ce choix** :
- Framework connu et à l'aise pour faire une API REST
- Simple et éfficace pour créer une API REST
- Facile d'utilisation pour créer un CRUD avec les controllers, les services et repository

## MariaDB
**Rôle**
Système de gestion de base de donnée, utilisé pour stocker les données sur des TABLES.

**Pourquoi ce choix**: 
MariaDb est facile à mettre en place.

# Architecture globale

Le projet suit une architecture en trois couches : le front Angular communique avec le back-end Spring Boot via des endpoints REST, et le back-end interagit avec la base MariaDB via JPA/Hibernate.

# Difficulté rencontré
- Créer un prototype en une journée intégrant la communication avec le système embarqué et le déploiement complet du site.
- Relier le front, le back et la base de donnée entre eux tout en ayant déployer le site.
- Créer l’API sans base de données finalisée dans le temps imparti et assurer la communication entre le front-end et le back-end.
- Utilisation de **Chart.js** pour la création des graphiques destinés aux utilisateurs.
- Développement de l’ensemble des fonctionnalités prévues pour le front-end dans le temps imparti.

# Collaboration avec les autre filliaire

## Data
Nous avons pu travailler ensemble sur la création de la base de donnée en créant les tables et les élèments qu'il contiendrait. Pour chaque changement dans les entitées créer je communiquer les changements avec ma team DATA.

## Sytème Embarqué
Nous avons collaboré pour définir la communication entre le système embarqué et le back-end. Après discussion, nous avons décidé que le back-end recevrait les scores des équipes bleue et rouge directement depuis le système embarqué.

## Infra
J’ai mis à disposition le back-end sur GitHub et accompagné l’équipe Infra pour le déploiement. J’ai également aidé à résoudre un problème d’accès aux routes API lors du déploiement (redondance dans l’URL : `URL_API/api/api/user`), en le détectant via des tests Postman. Le problème a ensuite été corrigé par mes camarades de l’équipe Infra.