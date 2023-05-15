export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fotoE : string;
    periodoE : string;

    constructor(nombreE: string, descripcionE: string, fotoE: string, periodoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fotoE = fotoE;
        this.periodoE = periodoE;
    }
}