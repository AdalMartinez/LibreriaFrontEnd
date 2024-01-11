import {Usuario} from "./Usuario"
import {Libro} from "./Libro";

export class Prestamo {
    idPrestamo: number = 0;
    fechaPrestamo: string = '';
    fechaDevolucionPrevista: string = '';
    fechaDevolucionReal: string = '';
    estadoPrestamo: string = '';
    
    idUsuario: Usuario = new Usuario();
    usuarios: Array<Usuario> = [];
    idLibro: Libro = new Libro();
    libros: Array<Libro> = [];
}