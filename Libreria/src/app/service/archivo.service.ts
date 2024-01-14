import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Archivo } from '../model/Archivo';

@Injectable({
  providedIn: 'root',
})
export class ArchivoService {
  private urlEndPoint: string = 'http://localhost:8080/apiDocumentos/archivos';
  private httpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    // Configura las cabeceras para manejar datos binarios
    this.httpHeaders = this.httpHeaders.set('Accept', 'application/json');
  }

  recuperarArchivos(): Observable<Archivo[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(
        map((response) => response as Archivo[]),
        catchError((error) => {
          console.error('Error al recuperar archivos:', error);
          throw error;
        })
      );
  }
  

  guardarArchivo(archivo: File): Observable<Archivo> {
    const formData: FormData = new FormData();
    formData.append('archivo', archivo, archivo.name);

    return this.http.post<Archivo>(this.urlEndPoint + '/guardar', formData);
  }

  descargarArchivo(id: number): Observable<Blob> {
    return this.http.get(this.urlEndPoint + '/descargar/' + id, {
      responseType: 'blob',
    });
  }
}
