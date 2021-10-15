# Créez un réseau social d’entreprise
###  Projet 7 Openclassrooms
#
# [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)]() [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)]()
#
## 🚀 Installation & démarrage
#
* Lancer votre serveur ` SQL `
* Installer la base de données à l'aide du fichier `initializeDatabase.sql` fournit dans le dossier ` './SQL' ` du repository API BackEnd.
> Si vous souhaitez modifier le nom de la base de donnée ( DB_connect.js, Ligne 7 => database : 'databaseName'

* Cloner le [repository (API - backend end)](https://github.com/Jokdeve-0/GeoregsRamos_7_05102021)
* Exécuter la commande `Nodemon` à la racine de celui-ci pour lancer le serveur - Port: 3000
> ❗️ L’application front est configurer pour requêter sur le port 3000 ❗️ 

* Cloner le [repository (APP – front end)](https://github.com/Jokdeve-0/GeorgesRamos_7_01102021)
* Execute la commande `yarn start`  à la racine de celui-ci 
> ❗️ Evidement ne pas utiliser le port 3000 étant déjà utilisé par l’API 🤔 ❗️

## 👨🏼‍🏫 Consignes du projet
#
> * la présentation des fonctionnalités doit être simple.
> * la création d’un compte doit être simple et possible depuis un téléphone mobile.
> * le profil doit contenir très peu d’informations pour que sa complétion soit rapide.
> * la suppression du compte doit être possible.
> * l’accès à un forum où les salariés publient des contenus multimédias doit être présent.
> * l’accès à un forum où les salariés publient des textes doit être présent.
> * les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés.
> * le ou la chargé (e) de communication Groupomania doit pouvoir modérer les interactions entre salariés.
> * L’utilisateur doit pouvoir requêter les données requises depuis SQL et soumettre ces changements à la base de données SQL. 
> * Les données de connexion doivent également être sécurisées.
> * Les pages devront respecter les standards WCAG.

## 🛠 Outils utilisés
#
### APP front end
* React 
* Booststrap
* Sass
### API back end
* Express
* Bcrypt
* Mysql
* JsonWebToken
* Multer
* Nodemon

## ⚙️ Les Fonctionnalités proposées
#
* les employés partagent les gifs avec d'autres collègues
* les employés écrivent des articles pour partager avec leurs collègues sur des sujets qui les intéressent.