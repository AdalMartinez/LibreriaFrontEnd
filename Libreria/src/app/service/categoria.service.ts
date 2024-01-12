import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private urlEndPoint: string =
    'http://localhost:8080/apiBiblioteca/categorias';
  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });
  constructor(private http: HttpClient) {}

  recuperarCategorias(): Observable<Categoria[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Categoria[]));
      
  }

  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlEndPoint, categoria, {
      headers: this.httpHeaders,
    });
  }

  leerCategoriar(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlEndPoint}/${id}`);
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      `${this.urlEndPoint}/${categoria.idCategoria}`,
      categoria,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarCategoria(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

}
