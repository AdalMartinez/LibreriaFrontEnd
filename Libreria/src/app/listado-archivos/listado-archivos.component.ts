import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Archivo } from '../model/Archivo';
import { ArchivoService } from '../service/archivo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado-archivos',
  templateUrl: './listado-archivos.component.html',
  styleUrl: './listado-archivos.component.css'
})
export class ListadoArchivosComponent implements OnInit{

  titulo: string = 'Listado Archivos';
  
  listaDeArchivos: Archivo[] = [];
  archivo: Archivo = new Archivo();
  constructor(
    private archivoService: ArchivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.archivoService.recuperarArchivos()
      .subscribe((lista) => (this.listaDeArchivos = lista));
  }

  
  descargarArchivo(idArchivo: number): void {
    this.archivoService.descargarArchivo(idArchivo).subscribe(
      () => {
        // Redirige a la ruta /cargarArchivo después de que la operación de descarga haya tenido éxito
        this.router.navigate(['/cargarArchivo']);

        // Muestra el mensaje de descarga exitosa después de redirigir para evitar problemas con la UI
        Swal.fire({
          title: 'Descargado',
          text: `El archivo se descargó satisfactoriamente`,
          icon: 'success'
        });
      },
      (error) => {
        console.error('Error al descargar el archivo:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al intentar descargar el archivo.',
          icon: 'error'
        });
      }
    );
  }

}
