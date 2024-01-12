import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Autor } from '../model/Autor';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  private urlEndPoint: string =
    'http://localhost:8080/apiBiblioteca/autores';
  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });
  constructor(private http: HttpClient) {}

  recuperarAutores(): Observable<Autor[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Autor[]));
      
  }

  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.urlEndPoint, autor, {
      headers: this.httpHeaders,
    });
  }

  leerAutor(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.urlEndPoint}/${id}`);
  }

  actualizarAutor(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(
      `${this.urlEndPoint}/${autor.idAutor}`,
      autor,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarAutor(id: number): Observable<Autor> {
    return this.http.delete<Autor>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

}
