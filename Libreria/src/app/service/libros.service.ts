import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Libro } from '../model/Libro';
import { Autor } from '../model/Autor';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private urlEndPoint: string =
    'http://localhost:8080/apiBiblioteca/libros';
  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });
  constructor(private http: HttpClient) {}

  recuperarLibros(): Observable<Libro[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Libro[]));
      
  }

  crearLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.urlEndPoint, libro, {
      headers: this.httpHeaders,
    });
  }

  leerLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.urlEndPoint}/${id}`);
  }

  actualizarLibro(libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(
      `${this.urlEndPoint}/${libro.idLibro}`,
      libro,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarLibro(id: number): Observable<Libro> {
    return this.http.delete<Libro>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  obtenerAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>('http://localhost:8080/apiBiblioteca/autores');
  }

  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:8080/apiBiblioteca/categorias');
  }

}
