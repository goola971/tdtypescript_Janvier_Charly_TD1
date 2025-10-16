import { Personne } from "./personne";

export class ListePersonnes {
    private personnes: Personne[];

    constructor(personnes: Personne[]) {
        this.personnes = personnes;
    }

    public getPersonnes(): Personne[] {
        return this.personnes;
    }

    public setPersonnes(personnes: Personne[]) {
        this.personnes = personnes;
    }

    public findByNom(s: string): Personne[] {
        return this.personnes.filter((personne) => personne.getNom() === s);
    }

    public findByCodePostal(cp: string) {
        return this.personnes.filter(
            (personne) => personne.getAdresse().getCodePostal() === cp
        );
    }

    public countPersonneVille(ville: string): number {
        return this.personnes.filter(
            (personne) => personne.getAdresse().getVille() === ville
        ).length;
    }

    public editPersonneNom(oldNom: string, newNom: string) {
        this.personnes.forEach((personne) => {
            if (personne.getNom() === oldNom) {
                personne.setNom(newNom);
            }
        });
    }

    public editPersonneVille(nom: string, newVille: string) {
        this.personnes.forEach((personne) => {
            if (personne.getNom() === nom) {
                personne.getAdresse().setVille(newVille);
            }
        });
    }
}
