import { Autor } from "./Autor";

export class Libro {
    idLibro: number = 0;
    tituloLibro: string = '';
    añoPublicacion: string = '';
    editorial: string = '';
    ejemplaresDisponibles: number = 0;
    totalEjemplares: number = 0;
    idAutor: Autor = new Autor();
    eventos: Array<Autor> = [];
}