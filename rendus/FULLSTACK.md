# Hackathon - Ynov Toulouse 2025 : Babyfoot du futur - FullStack

## Equipe

- Dev' FullStack 1 : ANTRAYGUES Bastien
- Dev' FullStack 2 : BERNARD Julien
- Dev' FullStack 3 : NOM Prénom

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

## Back-end
- Initialisation du projet avec création des entités : User, Game, BabyFoot_table, User_Game
- Ajout du CRUD Pour chaque entité ( Repository, Service, Controller )
- Création d'un service et d'un controller généric possèdant la logique du CRUD qui est hérité par tout les services, controllers
- Ajout de la fonctionnalité d'updateScore qui attend le score à mettre à jour dans la base de donnée.
- Création de DTO : BabyFoot_tableDTO, UserDto, GameDto, User_GameDto, GameResultDto

# Technologies utilisées

## Angular

**Rôle** :\

**Pourquoi ce choix** :
- framework connu par l'équipe dev
- simple d'utilisation

**Impact** :


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

# Difficulté rencontré
- Créer un prototype en 1 journée qui communique la partie des système embarqué, le déploiements du site.
