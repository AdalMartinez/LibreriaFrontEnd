import { Component } from '@angular/core';
import { Libro } from '../model/Libro';
import { LibroService } from '../service/libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Autor } from '../model/Autor';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-librosform',
  templateUrl: './librosform.component.html',
  styleUrl: './librosform.component.css'
})
export class LibrosformComponent {
  titulo: string = 'Libro form';
  libro: Libro= new Libro();
  listaDeAutores: Autor[] = [];
  listaDeCategorias: Categoria[] = [];
  constructor(
    private libroService: LibroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.libroService
        .leerLibro(id)
        .subscribe((elAutor) => (this.libro = elAutor));
    });

    this.libroService.obtenerAutores().subscribe((autores) => {this.listaDeAutores = autores})
    this.libroService.obtenerCategorias().subscribe((categorias) => {this.listaDeCategorias = categorias})


  }

  registrarLibro(): void {
    this.libroService
      .crearLibro(this.libro)
      .subscribe((elAsistente) => {
        this.router.navigate(['/libros']);
        Swal.fire(
          'Libro registrado',
          `${this.libro.tituloLibro} Se ha registrado correctamente.`,
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

  actualizarLibro(): void {
    this.libroService
      .actualizarLibro(this.libro)
      .subscribe((elAutor) => {
        this.router.navigate(['/libros']);
        Swal.fire(
          'Actualizar Libro',
          `${this.libro.tituloLibro} Se ha actualizado correctamente.`,
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
