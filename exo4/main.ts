import { MaDate } from "./MaDate";

const d1 = new MaDate(31, 12, 2016);
d1.ajouterUnJour();
console.log("apres ajout d un jour a 31/12/2016 :");
d1.afficher();

const d2 = new MaDate(28, 2, 2018);
d2.ajouterUnJour();
console.log("apres ajout d un jour a 28/02/2018 :");
d2.afficher();

const d3 = new MaDate(28, 2, 2020);
d3.ajouterUnJour();
console.log("apres ajout d un jour a 28/02/2020 (annee bissextile) :");
d3.afficher();

const d4 = new MaDate(30, 11, 2021);
d4.ajouterPlusieursJours(5);
console.log("apres ajout de 5 jours a 30/11/2021 :");
d4.afficher();

const d5 = new MaDate(31, 1, 2023);
d5.ajouterUnMois();
console.log("apres ajout d un mois a 31/01/2023 :");
d5.afficher();

const d6 = new MaDate(29, 2, 2020);
d6.ajouterUnAn();
console.log("apres ajout d un an a 29/02/2020 :");
d6.afficher();
