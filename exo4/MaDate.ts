export class MaDate {
    private jour: number;
    private mois: number;
    private annee: number;

    constructor(jour: number, mois: number, annee: number) {
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    // getters
    public getJour(): number {
        return this.jour;
    }

    public getMois(): number {
        return this.mois;
    }

    public getAnnee(): number {
        return this.annee;
    }

    // setters
    public setJour(jour: number): void {
        this.jour = jour;
    }

    public setMois(mois: number): void {
        this.mois = mois;
    }

    public setAnnee(annee: number): void {
        this.annee = annee;
    }

    // verifie si l annee est bissextile
    private estBissextile(): boolean {
        return (
            (this.annee % 4 === 0 && this.annee % 100 !== 0) ||
            this.annee % 400 === 0
        );
    }

    // renvoie le nombre de jours du mois courant
    private nbJoursDuMois(): number {
        switch (this.mois) {
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return this.estBissextile() ? 29 : 28;
            default:
                return 31;
        }
    }

    // ajoute un jour a la date
    public ajouterUnJour(): void {
        this.jour += 1;
        if (this.jour > this.nbJoursDuMois()) {
            this.jour = 1;
            this.mois += 1;
        }
        if (this.mois > 12) {
            this.mois = 1;
            this.annee += 1;
        }
    }

    // ajoute plusieurs jours
    public ajouterPlusieursJours(n: number): void {
        for (let i = 0; i < n; i++) {
            this.ajouterUnJour();
        }
    }

    // ajoute un mois
    public ajouterUnMois(): void {
        this.mois += 1;
        if (this.mois > 12) {
            this.mois = 1;
            this.annee += 1;
        }
        const maxJours = this.nbJoursDuMois();
        if (this.jour > maxJours) {
            this.jour = maxJours;
        }
    }

    // ajoute un an
    public ajouterUnAn(): void {
        this.annee += 1;
        if (this.mois === 2 && this.jour === 29 && !this.estBissextile()) {
            this.jour = 28;
        }
    }

    // affiche la date
    public afficher(): void {
        console.log(`${this.jour}/${this.mois}/${this.annee}`);
    }
}
