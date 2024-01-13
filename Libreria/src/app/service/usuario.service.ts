import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlEndPoint: string =
    'http://localhost:8080/apiBiblioteca/usuarios';
  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });
  constructor(private http: HttpClient) {}

  recuperarUsuarios(): Observable<Usuario[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Usuario[]));
      
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint, usuario, {
      headers: this.httpHeaders,
    });
  }

  leerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.urlEndPoint}/${usuario.idUsuario}`,
      usuario,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  generarReportePDF(): Observable<Blob> {
    const url = `${this.urlEndPoint}/pdf`;
    return this.http
      .get(url, { responseType: 'blob' })
      .pipe(
        tap(() => console.log('Reporte PDF generado')),
      );
  }

}
