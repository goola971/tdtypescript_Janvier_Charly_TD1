import { Adresse } from "./adresse";
import { Personne } from "./personne";
import { ListePersonnes } from "./listePersonnes";

// creation de quelques adresses
const a1 = new Adresse("10 rue Victor Hugo", "Paris", "75000");
const a2 = new Adresse("5 avenue des Fleurs", "Lyon", "69003");
const a3 = new Adresse("8 place du Marche", "Marseille", "13001");

// creation de personnes
const p1 = new Personne("Alice Dupont", "F", a1);
const p2 = new Personne("Jean Martin", "M", a2);
const p3 = new Personne("Lucie Bernard", "F", a3);

// liste des personnes
const liste = new ListePersonnes([p1, p2, p3]);

// affichage de toutes les personnes
console.log("liste des personnes :");
for (const pers of liste.getPersonnes()) {
    console.log(
        `- ${pers.getNom()} (${pers.getSexe()}) — ${pers
            .getAdresse()
            .getVille()} (${pers.getAdresse().getCodePostal()})`
    );
}

// recherche par nom
console.log("\nrecherche par nom 'Jean Martin' :");
console.log(liste.findByNom("Jean Martin"));

// recherche par code postal
console.log("\npersonnes habitant le code postal 75000 :");
console.log(liste.findByCodePostal("75000"));

// nombre de personnes par ville
console.log("\nnombre de personnes a Lyon :", liste.countPersonneVille("Lyon"));

// modification du nom d une personne
liste.editPersonneNom("Alice Dupont", "Alice Durand");
console.log("\napres modification du nom d alice :");
console.log(liste.findByNom("Alice Durand"));

// modification de la ville d une personne
liste.editPersonneVille("Lucie Bernard", "Nice");
console.log("\napres demenagement de lucie :");
console.log(liste.findByNom("Lucie Bernard"));
