import { Component, OnInit } from '@angular/core';
import { Archivo } from '../model/Archivo';
import { ArchivoService } from '../service/archivo.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivo-form',
  standalone: true,
  imports: [],
  templateUrl: './archivo-form.component.html',
  styleUrl: './archivo-form.component.css'
})
export class ArchivoFormComponent implements OnInit{
  archivo: Archivo = new Archivo();
  archivoSeleccionado: File | undefined;

  constructor(
    private archivoService: ArchivoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Puedes realizar inicializaciones aquí si es necesario
  }

  onFileSelected(event: any): void {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.archivoSeleccionado = input.files[0];
    }
  }

  guardarArchivo(): void {
    if (this.archivoSeleccionado) {
      // Aquí puedes utilizar this.archivoSeleccionado para enviar el archivo al servicio
      // Por ejemplo, llamando a archivoService.guardarArchivo(this.archivoSeleccionado);
      this.archivoService.guardarArchivo(this.archivoSeleccionado).subscribe((elArchivo) => {
        this.router.navigate(['/listadoArchivos']);
        Swal.fire(
          'Registrar Archivo',
          `${this.archivo.nombreArchivo} Se ha registrado correctamente.`,
          'success'
        );
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: "No se pudo registrar",
          text: "revise que cumpla los requisitos!",
        });
      });
      
    }
  }

}
