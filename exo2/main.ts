import { Stagiaire } from "./stagiaire";
import { Formation } from "./formation";

// --- Création de plusieurs stagiaires ---
const stagiaire1 = new Stagiaire("Alice", [14, 16, 12, 15]);
const stagiaire2 = new Stagiaire("Bob", [10, 11, 9, 12]);
const stagiaire3 = new Stagiaire("Charlie", [18, 17, 19, 16]);

// --- Création d'une formation ---
const formation = new Formation("Développement Web", 10, [
    stagiaire1,
    stagiaire2,
    stagiaire3,
]);

// --- Tests des méthodes ---
console.log("Formation :", formation.getDesignation());
console.log("Durée :", formation.getNbrJours(), "jours\n");

console.log(
    "Moyenne de la formation :",
    formation.calculerMoyenneFormation().toFixed(2)
);
console.log(" Meilleur stagiaire :", formation.afficherNomMax());
console.log("Note minimale du meilleur :", formation.afficherMinMax());

console.log("\n Moyenne de chaque stagiaire :");
for (let stagiaire of formation.getStagiaires()) {
    console.log(
        `- ${stagiaire.getNom()} : ${stagiaire.calculerMoyenne().toFixed(2)}`
    );
}

// --- Recherche par nom ---
const nomRecherche = "Bob";
console.log(
    `\n🔍 Moyenne de ${nomRecherche} :`,
    formation.trouverMoyenneParNom(nomRecherche)?.toFixed(2)
);
