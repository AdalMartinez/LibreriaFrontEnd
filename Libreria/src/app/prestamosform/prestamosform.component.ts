import { Component } from '@angular/core';
import { Prestamo } from '../model/Prestamo';
import { Libro } from '../model/Libro';
import { Usuario } from '../model/Usuario';
import { PrestamoService } from '../service/prestamo.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamosform',
  templateUrl: './prestamosform.component.html',
  styleUrl: './prestamosform.component.css'
})
export class PrestamosformComponent {
  titulo: string = 'Prestamo form';
  prestamo: Prestamo= new Prestamo();
  listaDeLibros: Libro[] = [];
  listaDeUsuarios: Usuario[] = [];
  fecha1: string;
  constructor(
    private prestamoService: PrestamoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.prestamoService
        .leerPrestamo(id)
        .subscribe((elAutor) => (this.prestamo = elAutor,
            this.prestamo.fechaDevolucionPrevista = elAutor.fechaDevolucionPrevista.substring(0,10),
            this.prestamo.fechaDevolucionReal = elAutor.fechaDevolucionReal.substring(0,10)
          ));
    });

    this.prestamoService.obtenerUsuarios().subscribe((usuarios) => {this.listaDeUsuarios = usuarios})
    this.prestamoService.obtenerLibros().subscribe((libros) => {this.listaDeLibros = libros})


  }

  registrarPrestamo(): void {
    this.prestamoService
      .crearPrestamo(this.prestamo)
      .subscribe((elAsistente) => {
        this.router.navigate(['/prestamos']);
        Swal.fire(
          'Prestamo registrado',
          `${this.prestamo.fechaPrestamo} Se ha registrado correctamente.`,
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

  actualizarPrestamo(): void {
    this.prestamoService
      .actualizarPrestamo(this.prestamo)
      .subscribe((elAutor) => {
        this.router.navigate(['/prestamos']);
        Swal.fire(
          'Actualizar Prestamo',
          `${this.prestamo.fechaPrestamo} Se ha actualizado correctamente.`,
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
