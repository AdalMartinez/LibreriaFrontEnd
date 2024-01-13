import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestamo } from '../model/Prestamo';
import { Usuario } from '../model/Usuario';
import { Libro } from '../model/Libro';
@Injectable({
  providedIn: 'root',
})

export class PrestamoService {
  private urlEndPoint: string =
    'http://localhost:8080/apiBiblioteca/prestamos';
  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });
  constructor(private http: HttpClient) {}

  recuperarPrestamos(): Observable<Prestamo[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Prestamo[]));
      
  }

  crearPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.urlEndPoint, prestamo, {
      headers: this.httpHeaders,
    });
  }

  leerPrestamo(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`${this.urlEndPoint}/${id}`);
  }

  actualizarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.put<Prestamo>(
      `${this.urlEndPoint}/${prestamo.idPrestamo}`,
      prestamo,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarPrestamo(id: number): Observable<Prestamo> {
    return this.http.delete<Prestamo>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/apiBiblioteca/usuarios');
  }

  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>('http://localhost:8080/apiBiblioteca/libros');
  }

}
