import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Multa } from '../model/Multa';
import { Prestamo } from '../model/Prestamo';


@Injectable({
  providedIn: 'root',
})
export class MultaService {
  private urlEndPoint: string =
    'http://localhost:8080/apiBiblioteca/multas';
  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });
  constructor(private http: HttpClient) {}

  recuperarMultas(): Observable<Multa[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Multa[]));
      
  }

  crearMulta(multa: Multa): Observable<Multa> {
    return this.http.post<Multa>(this.urlEndPoint, multa, {
      headers: this.httpHeaders,
    });
  }

  leerMulta(id: number): Observable<Multa> {
    return this.http.get<Multa>(`${this.urlEndPoint}/${id}`);
  }

  actualizarMulta(multa: Multa): Observable<Multa> {
    return this.http.put<Multa>(
      `${this.urlEndPoint}/${multa.idMulta}`,
      multa,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarMulta(id: number): Observable<Multa> {
    return this.http.delete<Multa>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  obtenerPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>('http://localhost:8080/apiBiblioteca/prestamos');
  }


}
