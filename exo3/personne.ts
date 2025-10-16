import { Adresse } from "./adresse";

export class Personne {
    private nom: string;

    private sexe: string;

    private adresse: Adresse;

    constructor(nom: string, sexe: string, adresse: Adresse) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresse = adresse;
        if (this.sexe !== "M" && this.sexe !== "F") {
            throw new Error("Le sexe doit  tre M ou F");
        }
    }

    public getNom(): string {
        return this.nom;
    }

    public getSexe(): string {
        return this.sexe;
    }

    public getAdresse(): Adresse {
        return this.adresse;
    }

    public setNom(nom: string) {
        this.nom = nom;
    }

    public setSexe(sexe: string) {
        this.sexe = sexe;
    }

    public setAdresse(adresse: Adresse) {
        this.adresse = adresse;
    }
}
