# Hackathon - Ynov Toulouse 2025 : Babyfoot du futur - IoT & Mobile - Systèmes Embarqués

## Equipe

- Systèmes Embarqués 1 : PESCAY Maxime & AUBIN DE BELLEVUE Maika

Et si on réinventait l’expérience babyfoot à Ynov ? L’objectif de ce hackathon est de moderniser et digitaliser l’usage des babyfoots présents dans le Souk pour créer un service _next-gen_, pensé pour près de 1000 étudiants !

Que ce soit via des gadgets connectés, un système de réservation intelligent, des statistiques en temps réel ou des fonctionnalités robustes pour une utilisation massive, nous cherchons des solutions innovantes qui allient créativité et technologie.

Toutes les filières sont invitées à contribuer : Dev, Data, Infra, IoT, Systèmes embarqués… chaque idée compte pour rendre le babyfoot plus fun, plus pratique et plus connecté.

Votre mission : transformer le babyfoot classique en expérience high-tech pour Ynov !

---

> Ce fichier contient les informations spécifiques aux IoT/Mobile / Systèmes Embarqués de votre projet. Il suffit d'en remplir une seule fois, même si vous êtes plusieurs IoT/Mobile / Systèmes Embarqués dans l'équipe.

# Requis

Ce README contient les requis fonctionnels de la partie IA Data de votre projet. Il doit compléter le README principal à la racine du projet, et servira la partie de votre note propre à votre spécialité.

Basez-vous sur les spécifications dans [SPECIFICATIONS.md](../SPECIFICATIONS.md) pour remplir ce document.

Décrivez ici les actions que vous avez menées, votre démarche, les choix techniques que vous avez faits, les difficultés rencontrées, etc. Précisez également dans quelle mesure vous avez pu collaborer avec les autres spécialités.

Autrement, il n'y a pas de format imposé, mais essayez de rester clair et concis, je ne vous demande pas de rédiger un roman, passez à l'essentiel, et épargnez-moi de longues pages générées par IA (malusée).

En conclusion, cela doit résumer votre travail en tant qu'expert.e IoT / Systèmes Embarqués, et vous permettre de garder un trace écrite de votre contribution au projet.

Merci de votre participation, et bon courage pour la suite du hackathon !


# Notre travail : 

Afin de mener à bien ce projet nous avons fais en sorte que nos systèmes soient les points de départs de chaque fonctionnalités. Nous avons donc souhaités concevoir plusieurs systèmes embarqués permettants de fiabiliser un maximum d'informations et améliorer l'expérience de jeu. 
Tout d'abord, qu'avons nous mis en place ? 
Afin de comptabiliser le nombre de relances dans une partie nous avons mis au point un lanceur de balle qui affiche digitalement le nombre de relances dans une partie. Ensuite, afin de suivre le cours du match nous avons mis en place deux systèmes de comptabilisation des points. 

Quelles sont les technologies utilisées pour mener à bien ces actions ? 

Afin de mettre en place le maximum de technologies sur une seul même système nous avons optés pour le choix d'un raspberry PI5. Grâce aux nombreux GPIO de la raspberry ainsi que ses fonctionnalités réseaux nous avons pus envoyer à la partie application les données de chaque matchs.
Pour la mis en place de la raspberry nous avons utilisés raspbian OS et mis en place une connexion en SSH pour communiquer avec. Afin de centraliser nos données la créeation d'une branche SYSembarqués nous as permis de pouvoir travailler sur notre projet sans génere au dévleoppemtn sur la branche main. 
Le codage de tous les capteurs a été fait en python. 

Nous avons donc choisis de prendre des capteurs à ultrason afin de détecter le passage d'une main lors du ramassage de la balle, ce qui signifie qu'un but a été mis. 
De l'autre côté du babyfoot se trouve un capteur à bouton pour signifieer que vous venez de marquer un but. donc deux manières différentes de rajouter un point au score total. 
Afin de mettre en place le lancement de la balle nous avons modélisés en 3D une bascule qui s'active lors de la préssion d'un bouton qui active lui même un servomoteur pour une bascule complète. Le servomoteur reviens ensuite à sa place afin de relever le lanceur. A chaque fois qu'une balle est envoyée un compteur analogique s'incrémente et annonce le nombre de relances dans une partie. 
Tout ça dans une démarche de proposer des aides personnalisées sur ses parties. Une version compétitive du babyfoot !
Le cablage de tous ces systèmes a été fait à l'aide d'une breadboard, de résistances et de fil dupont.

Une fois nos données récupérées nous avons pensés à un envoie par https à l'autre raspberry qui comprends l'infrastructure. 
Nous relions donc parfaitement notre domaine aux autres et proposons une application complète. 
