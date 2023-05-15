export class Proyectos {
    id?: number;
    nombreP: string;
    descripcionP: string;
    fotoP: string;
    periodoP: string;

    constructor(nombreP: string, descripcionP: string, fotoP: string, periodoP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fotoP = fotoP;
        this.periodoP = periodoP;
    }
}