export class Point {
    private _abs: number;
    private _ord: number;
    constructor(abs: number, ord: number) {
        this._abs = abs;
        this._ord = ord;
    }

    // getters
    public getAbs(): number {
        return this._abs;
    }
    public getOrd(): number {
        return this._ord;
    }

    // setters
    public setAbs(abs: number) {
        this._abs = abs;
    }
    public setOrd(ord: number) {
        this._ord = ord;
    }

    public calculerDistance(p: Point) {
        return Math.sqrt(
            Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2)
        );
    }

    static distance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    public calculerMilieu(p: Point) {
        return new Point((this._abs + p._abs) / 2, (this._ord + p._ord) / 2);
    }
}
