import { Autor } from "./Autor";
import { Categoria } from "./Categoria";

export class Libro {
    idLibro: number = 0;
    tituloLibro: string = '';
    anoPublicacion: string = '';
    editorial: string = '';
    ejemplaresDisponibles: number = 0;
    totalEjemplares: number = 0;
    idAutor: Autor = new Autor();
    autores: Array<Autor> = [];
    idCategoria: Categoria = new Categoria();
    categorias: Array<Categoria> = [];
}