import { Component, OnInit } from '@angular/core';
import { Autor } from '../model/Autor';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutorService } from '../service/autor.service';

@Component({
  selector: 'app-autorform',
  templateUrl: './autorform.component.html',
  styleUrl: './autorform.component.css'
})
export class AutorformComponent implements OnInit {
  titulo: string = 'Autor form';
  autor: Autor = new Autor();
  constructor(
    private autorService: AutorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.autorService
        .leerAutor(id)
        .subscribe((elAutor) => (this.autor = elAutor));
    });


  }

  registrarAutor(): void {
      this.autorService
        .crearAutor(this.autor)
        .subscribe((elAsistente) => {
          this.router.navigate(['/autores']);
          Swal.fire(
            'Autor registrado',
            ` ${this.autor.nombreAutor} Se ha registrado correctamente.`,
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


  actualizarAutor(): void {
    this.autorService
      .actualizarAutor(this.autor)
      .subscribe((elAutor) => {
        this.router.navigate(['/autores']);
      });
    Swal.fire(
      'Actualizar Autor',
      `${this.autor.nombreAutor} Se ha actualizado correctamente.`,
      'success'
    );
  }

}
