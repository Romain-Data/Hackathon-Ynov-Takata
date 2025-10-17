# Hackathon - Ynov Toulouse 2025 : Babyfoot du futur - IoT & Mobile - Systèmes Embarqués

## Equipe

- Systèmes Embarqués 1 : PESCAY Maxime & AUBIN DE BELLEVUE Maïka

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

Afin de mener à bien ce projet, nous avons fait en sorte que nos systèmes soient les points de départ de chaque fonctionnalité. Nous avons donc souhaité concevoir plusieurs systèmes embarqués permettant de fiabiliser un maximum d’informations et d’améliorer l’expérience de jeu.

Tout d’abord, qu’avons-nous mis en place ?
Afin de comptabiliser le nombre de relances dans une partie, nous avons mis au point un lanceur de balle qui affiche le nombre de relances effectuées sur un afficheur 7 segments. Ensuite, pour suivre le déroulement du match, nous avons mis en place deux systèmes de comptabilisation des points.

# Technologies utilisées

Pour intégrer un maximum de fonctionnalités sur un seul et même système, nous avons choisi d’utiliser un Raspberry Pi 5. Grâce à ses nombreux GPIO et à ses capacités réseau, nous avons pu envoyer les données de chaque match à la partie applicative.
La configuration a été réalisée sous Raspberry Pi OS, avec une connexion SSH pour la communication et le déploiement du code.
Afin de centraliser nos données, la création d’une branche SYS_embarqués nous a permis de développer sans interférer avec la branche principale du projet.
L’ensemble des capteurs et actionneurs a été programmé en Python.

Nous avons utilisé un capteur à ultrason (HC-SR04) pour détecter le passage d’une balle dans le but, indiquant qu’un point a été marqué.
De l’autre côté du babyfoot, un bouton poussoir permet également de signaler un but, offrant ainsi deux manières différentes d’ajouter un point au score total.

Pour le lancement de la balle, on nous a modélisé en 3D une bascule mécanique actionnée par un servomoteur. Ce dernier est activé par la pression d’un bouton et revient automatiquement à sa position initiale après le lancement.
Chaque fois qu’une balle est relancée, un afficheur 7 segments s’incrémente pour indiquer le nombre total de relances effectuées pendant la partie.
L’ensemble du câblage a été réalisé à l’aide d’une breadboard, de résistances et de fils Dupont.

Enfin, les données sont envoyées via requête HTTP vers une autre Raspberry Pi qui gère l’infrastructure du backend.
Ce système relie parfaitement la partie embarquée au reste du projet et permet de proposer une application de babyfoot connectée complète et interactive.

# Composants utilisés

Voici la liste des composants utilisés et leur rôle dans le projet :

Raspberry Pi 5 : Microcontrôleur principal : exécute le code Python, gère les capteurs, le servomoteur et la communication avec le backend

Capteur ultrason HC-SR04 : Détecte le passage de la balle dans le but pour comptabiliser un point

Joystick (B105348) :	Permet d’ajouter manuellement un point pour l’équipe bleue

Servomoteur : Actionne mécaniquement une bascule pour relancer la balle

Buzzer piézo :	Joue une courte mélodie (Do-Ré-Mi) à chaque but ou relance

Afficheur 7 segments 5641AS :	Affiche le nombre de relances effectuées pendant la partie

Câblage GPIO (fils Dupont, résistances, breadboard) :	Relie l’ensemble des composants au Raspberry Pi et assure le bon fonctionnement électrique du système

# Conclusion

Ce projet nous a permis de concevoir un système complet de babyfoot connecté, intégrant à la fois la partie embarquée et la communication avec un backend. Nous avons appris à gérer les capteurs, les actionneurs et l’affichage local tout en envoyant les données vers une infrastructure distante pour centraliser les scores et les relances. Cette expérience nous a permis de comprendre l’importance de l’intégration entre le matériel et le logiciel pour créer une application interactive et fiable.