export class Stagiaire {
    private nom: string;
    private notes: number[];
    constructor(nom: string, notes: number[]) {
        this.nom = nom;
        this.notes = notes;
    }

    public getNom(): string {
        return this.nom;
    }

    public getNotes(): number[] {
        return this.notes;
    }

    public setNom(nom: string) {
        this.nom = nom;
    }

    public setNote(note: number) {
        this.notes.push(note);
    }

    public calculerMoyenne(): number {
        let somme = 0;
        for (let note of this.notes) {
            somme += note;
        }
        return somme / this.notes.length;
    }

    public trouveMax(): number {
        let max = 0;
        for (let note of this.notes) {
            if (max < note) {
                max = note;
            }
        }
        return max;
    }

    public trouverMin(): number {
        let min = this.notes[0];
        for (let note of this.notes) {
            if (min > note) {
                min = note;
            }
        }
        return min;
    }
}
