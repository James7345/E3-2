/*
Auteur : James Bourassa-Arvisais
Date   : 6 février 2025
Sujet  : Fichier principal
*/

import promptSync from 'prompt-sync'// À commenter si vous travaillez avec un navigateur
const prompt = promptSync();

// VARIABLES / CONSTANTES
const OPTIONS_MENU_PRINCIPAL = ["Afficher les ouvrages", "Ajouter un ouvrage", "Modifier un ouvrage", "Supprimer un ouvrage", "Emprunt/Retour d'un ouvrage", "Afficher des statistiques", "Quitter"];
const OPTIONS_SOUS_MENU_FILTRER = ["Tous les ouvrages", "Filtrer les ouvrages (par genre)", "Trier les ouvrages (par titre ou année)"];
const OPTIONS_SOUS_MENU_TRIER = ["Titre", "Année"];
const OPTIONS_SOUS_MENU_AJOUTER = ["Livre","Film"];
let choix = "";

// PROGRAMME PRINCIPAL
// Afficher le menu principal en boucle
do {
    console.log("\nMenu Principal");
    OPTIONS_MENU_PRINCIPAL.forEach( (element, indice) => console.log(`${indice + 1}. ${element}`) );
    choix = prompt("Votre choix : ").trim();
    switch(choix) {
        case "1":
            console.log("Afficher les ouvrages");
            
            break;
        case "2":
            console.log("Ajouter un ouvrage");
        break;
        case "3":
            console.log("Modifier un ouvrage");
            break;
        case "4":
            console.log("Supprimer un ouvrage");
            break;    
        case "5":
            console.log("Emprunt/Retour d'un ouvrage");
            break;  
        case "6":
            console.log("Afficher des statistiques");
            break;  
        case "7":
            break;
        default:
            console.log("Choix invalide, veuillez recommencer.");
            break;
    }

} while(choix !== "7");