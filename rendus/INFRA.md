# Hackathon - Ynov Toulouse 2025 : Babyfoot du futur - Cloud & Infrastructure

## Equipe

- Cloud & Infra 1 : BESOMBES Aurélien
- Cloud & Infra 2 : TEHAHE Haunui
- Cloud & Infra 3 : CENAC Lucille

Et si on réinventait l’expérience babyfoot à Ynov ? L’objectif de ce hackathon est de moderniser et digitaliser l’usage des babyfoots présents dans le Souk pour créer un service _next-gen_, pensé pour près de 1000 étudiants !

Que ce soit via des gadgets connectés, un système de réservation intelligent, des statistiques en temps réel ou des fonctionnalités robustes pour une utilisation massive, nous cherchons des solutions innovantes qui allient créativité et technologie.

Toutes les filières sont invitées à contribuer : Dev, Data, Infra, IoT, Systèmes embarqués… chaque idée compte pour rendre le babyfoot plus fun, plus pratique et plus connecté.

Votre mission : transformer le babyfoot classique en expérience high-tech pour Ynov !

---

> Ce fichier contient les informations spécifiques au Cloud & Infra de votre projet. Il suffit d'en remplir une seule fois, même si vous êtes plusieurs Cloud & Infra dans l'équipe.

# Requis

Ce README contient les requis fonctionnels de la partie Cloud & Infra de votre projet. Il doit compléter le README principal à la racine du projet, et servira la partie de votre note propre à votre spécialité.

Basez-vous sur les spécifications dans [SPECIFICATIONS.md](../SPECIFICATIONS.md) pour remplir ce document.

Décrivez ici les actions que vous avez menées, votre démarche, les choix techniques que vous avez faits, les difficultés rencontrées, etc. Précisez également dans quelle mesure vous avez pu collaborer avec les autres spécialités.

Autrement, il n'y a pas de format imposé, mais essayez de rester clair et concis, je ne vous demande pas de rédiger un roman, passez à l'essentiel, et épargnez-moi de longues pages générées par IA (malusée).

En conclusion, cela doit résumer votre travail en tant qu'expert.e infra, et vous permettre de garder un trace écrite de votre contribution au projet.

Merci de votre participation, et bon courage pour la suite du hackathon !

----

# Technologies utilisées

## Docker

**Rôle** :\
Docker permet d’isoler chaque service dans un conteneur indépendant (application, base de données, monitoring…).
Cela garantit une installation homogène, reproductible et simple à déployer.

**Pourquoi ce choix** :
- Compatible ARM (Raspberry Pi 5).
- Simplifie le déploiement : une seule commande docker compose up -d.
- Facilite le rollback et la maintenance. 
- Chaque service a ses dépendances isolées.

**Impact** :\
→ Déploiement reproductible, facile à documenter et portable sur n’importe quel environnement.


## Docker Compose

**Rôle** :\
Orchestre tous les services Docker (app, DB, proxy, monitoring) à partir d’un seul fichier YAML.

**Pourquoi ce choix** :
- Centralise la configuration de l’infrastructure.
- Permet de démarrer ou arrêter l’ensemble de l’environnement en une seule commande.
- Simplifie le partage du projet entre membres de l’équipe.

**Impact** :\
→ Répond directement à la contrainte de simplicité de déploiement.

## Nginx (Reverse Proxy)

**Rôle** :\
Assure la redirection du trafic HTTP/HTTPS vers le bon conteneur applicatif.
C’est aussi un point d’entrée unique qui renforce la sécurité réseau.

**Pourquoi ce choix** :
- Léger et stable, idéal pour le Raspberry Pi.
- Supporte SSL/TLS et la compression Gzip.
- Peut facilement évoluer vers du load balancing.

**Impact** :\
→ Sécurisation + scalabilité future de l’application.

## MariaDB

**Rôle** :\
Système de gestion de base de données relationnelle, utilisé pour stocker les données persistantes de l’application (utilisateurs, logs, etc.).

**Pourquoi ce choix** :
- Léger et rapide, très bien adapté au matériel limité du Raspberry Pi.
- Compatible avec MySQL (large écosystème et support communautaire).
- Facile à intégrer dans Docker grâce à l’image officielle mariadb:latest.
- Sauvegardes simples via mysqldump et restauration rapide.

**Sauvegarde mise en place** :\
Un script backup.sh exécute automatiquement un dump SQL régulier stocké sur le Pi.

**Impact** :\
→ Données fiables, sauvegardées et restaurables en cas de problème.

## Monitoring : Prometheus + Grafana + Node Exporter

**Rôle** :\
Surveiller en temps réel l’état du Raspberry Pi et des conteneurs.
- Node Exporter : collecte les métriques système (CPU, RAM, disque, uptime).
- Prometheus : centralise et stocke les métriques dans une base de données temporelle.
- Grafana : visualise les données via des dashboards personnalisés.

**Pourquoi ce choix** :
- Léger, open-source et parfaitement intégré à Docker.
- Configuration simple, visualisation claire.
- Compatible ARM64.

**Impact** :\
→ Répond à la section Monitoring avec suivi du host + services, et possibilité d’alerter.

## CI/CD avec GitHub Actions

**Rôle** :\
Automatiser les tests, le build et le déploiement de l’application à chaque commit.

**Pourquoi ce choix** :
- Gratuit et intégré à GitHub, parfait pour un hackathon.
- Exécute automatiquement :
  - Linting du code (qualité),
  - Tests unitaires (fiabilité),
  - Build Docker (cohérence),
  - Déploiement SSH vers le Raspberry Pi.

**Impact** :\
→ Garantit que le code déployé est toujours testé et fonctionnel.

---

# Etat des lieux

L'infrastructure est opérationnelle :
- Déploiement de l'infrastructure via docker compose
- Restriction des flux réseaux des conteneurs docker, ce qui permet de limiter les risques de propagation en cas d’attaque
- Mise en place de monitoring fonctionnel sur la partie hardware
- Serveur web et reverse proxy
- Communication entre Spring boot et Angular

Cependant, suite à des problèmes rencontrés avec la base de données, l'API backend (spring boot) ne fonctionne pas correctement, empêchant l'accès aux données via l'API.

De plus, impossible de tester nos configurations ansible car nous sommes bloqués par d'autres étapes antérieures

Par ailleurs, suite à un manque de matériel, de temps et de connaissances nous n'avons pas pu finaliser la partie CI/CD avec Github Actions

# Axes d'améliorations

Plusieurs évolutions sont prévues pour fiabiliser davantage notre infrastructure :

**Mettre en place le conteneur de sauvegarde MariaDB** \
Pour l’instant, aucune sauvegarde automatisée n’est opérationnelle. La création de ce conteneur est donc essentielle afin de garantir la protection des données et de pouvoir les restaurer en cas de défaillance.

**Garantir la haute disponibilité du serveur web** \
Nginx fonctionne correctement, mais il repose sur une seule instance. En cas de panne, tout le service devient indisponible. Mettre en place un mécanisme de redondance ou de bascule permettra d’assurer une continuité de service.

**Étendre la supervision à tous les conteneurs Docker** \
Aujourd’hui, seule la machine hôte est supervisée. En intégrant également chaque conteneur dans la surveillance, on obtient une vision complète du système et on détecte plus rapidement les anomalies.

**Ajouter un système d’alerting avec Prometheus** \
Les métriques sont visibles dans Grafana, mais uniquement via consultation manuelle. En activant l’alerting, on recevra automatiquement des notifications en cas de dépassement de seuil ou de comportement anormal.
Mettre en place un serveur DNS pour la résolution de noms.\
Aujourd’hui, les services sont accessibles via leurs adresses IP. L’ajout d’un DNS permettrait d’utiliser des noms clairs et mémorisables (ex : grafana.local ou api.local), ce qui simplifierait la gestion et l’accès aux différents services.