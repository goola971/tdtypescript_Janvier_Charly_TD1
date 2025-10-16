import { Stagiaire } from "./stagiaire";

export class Formation {
    private designation: string;
    private nbrJours: number;
    private stagiaires: Stagiaire[];

    constructor(
        designation: string,
        nbrJours: number,
        stagiaires: Stagiaire[]
    ) {
        this.designation = designation;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }

    public getDesignation(): string {
        return this.designation;
    }

    public getNbrJours(): number {
        return this.nbrJours;
    }

    public getStagiaires(): Stagiaire[] {
        return this.stagiaires;
    }

    public setDesignation(designation: string) {
        this.designation = designation;
    }

    public setNbrJours(nbrJours: number) {
        this.nbrJours = nbrJours;
    }

    public setStagiaires(stagiaires: Stagiaire[]) {
        this.stagiaires = stagiaires;
    }

    public calculerMoyenneFormation(): number {
        let somme = 0;
        for (let stagiaire of this.stagiaires) {
            somme += stagiaire.calculerMoyenne();
        }
        return somme / this.stagiaires.length;
    }

    public getIndexMax(): number {
        let max = this.stagiaires[0].calculerMoyenne();
        let indexMax = 0;
        for (let i = 1; i < this.stagiaires.length; i++) {
            if (max < this.stagiaires[i].calculerMoyenne()) {
                max = this.stagiaires[i].calculerMoyenne();
                indexMax = i;
            }
        }
        return indexMax;
    }

    public afficherNomMax(): string {
        return this.stagiaires[this.getIndexMax()].getNom();
    }

    public afficherMinMax(): string {
        return this.stagiaires[this.getIndexMax()].trouverMin().toString();
    }

    public trouverMoyenneParNom(nom: string) {
        for (let stagiaire of this.stagiaires) {
            if (stagiaire.getNom() === nom) {
                return stagiaire.calculerMoyenne();
            }
        }
    }
}
