import { Component, OnInit } from '@angular/core';
import { MultaService } from '../service/multa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Multa } from '../model/Multa';
import { Prestamo } from '../model/Prestamo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multasform',
  templateUrl: './multasform.component.html',
  styleUrl: './multasform.component.css'
})
export class MultasformComponent implements OnInit{
  titulo: string = 'Multa form';
  multa: Multa= new Multa();
  lsitaDePrestamos: Prestamo[] = [];
  constructor(
    private multaService: MultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.multaService
        .leerMulta(id)
        .subscribe((elAutor) => (this.multa = elAutor));
    });

    this.multaService.obtenerPrestamos().subscribe((usuarios) => {this.lsitaDePrestamos = usuarios})


  }

  registrarMulta(): void {
    this.multaService
      .crearMulta(this.multa)
      .subscribe((elAsistente) => {
        this.router.navigate(['/multas']);
        Swal.fire(
          'Multa registrado',
          `${this.multa.montoMulta} Se ${this.multa.idMulta} ${this.multa.idPrestamo} ha registrado correctamente.`,
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

  actualizarMulta(): void {
    this.multaService
      .actualizarMulta(this.multa)
      .subscribe((elAutor) => {
        this.router.navigate(['/multas']);
        Swal.fire(
          'Actualizar Multa',
          `${this.multa.montoMulta} Se ha actualizado correctamente.`,
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
