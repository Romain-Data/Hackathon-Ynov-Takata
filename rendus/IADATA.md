# Hackathon - Ynov Toulouse 2025 : Babyfoot du futur - IA & Data

## Equipe

- IA & Data 1 : COLLERY Romain

Et si on réinventait l’expérience babyfoot à Ynov ? L’objectif de ce hackathon est de moderniser et digitaliser l’usage des babyfoots présents dans le Souk pour créer un service _next-gen_, pensé pour près de 1000 étudiants !

Que ce soit via des gadgets connectés, un système de réservation intelligent, des statistiques en temps réel ou des fonctionnalités robustes pour une utilisation massive, nous cherchons des solutions innovantes qui allient créativité et technologie.

Toutes les filières sont invitées à contribuer : Dev, Data, Infra, IoT, Systèmes embarqués… chaque idée compte pour rendre le babyfoot plus fun, plus pratique et plus connecté.

Votre mission : transformer le babyfoot classique en expérience high-tech pour Ynov !

---

> Ce fichier contient les informations spécifiques à l'IA/Data de votre projet. Il suffit d'en remplir une seule fois, même si vous êtes plusieurs IA/Data dans l'équipe.

# Requis

Ce README contient les requis fonctionnels de la partie IA Data de votre projet. Il doit compléter le README principal à la racine du projet, et servira la partie de votre note propre à votre spécialité.

Basez-vous sur les spécifications dans [SPECIFICATIONS.md](../SPECIFICATIONS.md) pour remplir ce document.

Décrivez ici les actions que vous avez menées, votre démarche, les choix techniques que vous avez faits, les difficultés rencontrées, etc. Précisez également dans quelle mesure vous avez pu collaborer avec les autres spécialités.

Autrement, il n'y a pas de format imposé, mais essayez de rester clair et concis, je ne vous demande pas de rédiger un roman, passez à l'essentiel, et épargnez-moi de longues pages générées par IA (malusée).

En conclusion, cela doit résumer votre travail en tant qu'expert.e IA Data, et vous permettre de garder un trace écrite de votre contribution au projet.

Merci de votre participation, et bon courage pour la suite du hackathon !


---

# Vision globale

Sur ce projet, avec ma (toute) petite expérience de gestion de projet, j'ai pris le lead sur l'organisation et la communication entre les membres de l'équipe.

Mon but premier était l'avancée globale de l'idée et l'échange d'info entre les différentes équipes. À interval régulier, j'ai demandé aux groupes où ils en étaient, s'ils étaient bloqués, si oui, par quoi et quelles étaient leurs prochaines étapes.

# Partie Data

## Participation à l'élaboration de la base de données de votre projet

Première étape après avoir défini la direction globale du projet, choisir de quel type de données nous aurions besoin (données utilisateurs, parties...).
Avec ces informations, nous avons pu, avec le backend, construire le modèle conceptuel de données ainsi que le modèle logique.
Le développeur backend s'est occupé de la conception physique puisqu'il souhaite utilisé Spring Boot, une techno que je ne connais pas.
Mais tout au long de la création, nous avons échanger sur les modifications à apporter avec l'affinement du besoin réel.

Malgré tout ça, au moment du déploiement, on se retrouve avec quelques problèmes de compatibilité de formats de données ou de noms de colonne.


## Nettoyage du dataset.

_merci pour ce dataset... si propre_
Pour le nettoyage, j'ai essayé de trouver un compromis entre la rapidité et l'efficacité : 

Les différentes étapes du nettoyage ont été : 
- suppression de  toutes les colonnes inutiles pour le projet ou pour les analyses demandées. 
- uniformisation au maximum du format des données pour ne garder que des formats simples (remplacement des emoji par des nombres)
- suppression des lignes dont les données paraissaient abérantes :
    - winner incompatible avec le score renseigné
    - partie de plus de 20min

Cette étape pourrait être compléteée par des vérifications plus poussées comme vérifier la cohérence du score déclaré avec la somme des buts marqués individuellement par les joueurs.


## Analyse exploratoire

L'analyse exploratoire n'a pas été très compliquée en soi.

Pour le top 10 buteurs, j'ai fait le choix de trier les joueurs par ratio buts net / match pour gommer les différences de nombre de matchs et pénaliser les joueurs qui marquent contre leur camps.
Ce top 10 pourrait être affiché en page d'accueil du site pour créer un aspect compétitif (comme sur les high score des bornes d'arcade)

Pour l'influence de la couleur sur la victoire, j'ai tout de même découvert le **Test du χ²** qui permet de déterminer si un écart entre les données réelles et théoriques sont plus ou moins du au hasard. 
Cette découvert m'a valu une discussion avec GPT jusque tard dans la nuit pour essayer de comprendre vraiment ce que les valeurs de ce test signifient :
P-value: 0.1657 (p ≥ 0.05)
Il n'y a pas de différence significative entre les données théoriques d'un jeu équilibré _(victoire à 50/50)_ et les données réelles.

Les statistiques demandées ont été générées avec python et Tableau.


### Statistique d'un joueur

À partir de données calculées sur les parties d'un joueur, nous souhaitions afficher des graphes. Les dev front end ont préféré tenter de développer ça en JavaScript mais ont manqué de temps.
J'ai tout de même créé des scripts très basiques correspondant aux stats à afficher dans le dossier [dataviz_front](data/dataviz_front)


## Bonus IA

Le projet finalisé devait comporter une partie IA pour personnaliser l'expérience utilisateur et favoriser la progression.
Dans le dashboard de l'utilisateur, à côté de ses statistiques de dernières parties, un encadré viendrait donner un conseil personnalisé pour optimiser les chances de victoires.

Seul POC a pu être créé. 
Le fichier [[donnees_utilisateurs.csv](../data/donnees_utilisateur.csv)] compile les parties du joueur à l'ID 1.
Dans le notebook [recommandation_ia.ipynb](../data/recommandation_ia.ipynb), ce fichier est analysé pour extraire des statistiques de jeu (winrate, meilleur poste, etc.)
Celles-ci sont fournis à un Gémini pour générer un conseil concis et personnalisé. Ce conseil est pour le moment exporté dans un fichier .txt

La génération de ce message est encore très long (> 15s) mais le concept est fonctionnel.
Le format d'envoi des données vers le front-end sera à définir.


# Mot de la fin

Cette expérience intense aura été très enrichissante. Je suisfier que le jury ait senti le potentiel de ce projet en nous remettant le prix du meilleur prototype.
Je souhaiterais sincèrement poursuivre son développement pour qu'une v1 prenne un jour vie car il représente ce qu'un projet interdisciplinaire peut faire de mieux.