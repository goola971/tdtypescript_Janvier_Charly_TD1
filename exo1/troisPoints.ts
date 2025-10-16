import { Point } from "./point";

export class TroisPoints {
    // variable globale
    private premier: Point;
    private deuxieme: Point;
    private troisieme: Point;

    // constructeur de la classe TroisPoints
    constructor(premier: Point, deuxieme: Point, troisieme: Point) {
        this.premier = premier;
        this.deuxieme = deuxieme;
        this.troisieme = troisieme;
    }

    // getter
    public getPremier(): Point {
        return this.premier;
    }
    public getDeuxieme(): Point {
        return this.deuxieme;
    }
    public getTroisieme(): Point {
        return this.troisieme;
    }

    // setter
    public setPremier(premier: Point) {
        this.premier = premier;
    }
    public setDeuxieme(deuxieme: Point) {
        this.deuxieme = deuxieme;
    }
    public setTroisieme(troisieme: Point) {
        this.troisieme = troisieme;
    }

    // m ́ethode TesterAlignement()
    public testerAlignement(): boolean {
        const distanceAB = this.premier.calculerDistance(this.deuxieme);
        const distanceAC = this.premier.calculerDistance(this.troisieme);
        const distanceBC = this.deuxieme.calculerDistance(this.troisieme);

        return (
            distanceAB === distanceAC + distanceBC ||
            distanceAC === distanceAB + distanceBC ||
            distanceBC === distanceAB + distanceAC
        );
    }

    // m ́ethode estIsocele()
    public estIsocele(): boolean {
        const distanceAB = this.premier.calculerDistance(this.deuxieme);
        const distanceAC = this.premier.calculerDistance(this.troisieme);
        const distanceBC = this.deuxieme.calculerDistance(this.troisieme);

        return (
            distanceAB === distanceAC ||
            distanceAB === distanceBC ||
            distanceAC === distanceBC
        );
    }
}
