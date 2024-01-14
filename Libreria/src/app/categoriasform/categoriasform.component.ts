import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoriasform',
  templateUrl: './categoriasform.component.html',
  styleUrl: './categoriasform.component.css'
})
export class CategoriasformComponent implements OnInit{
  titulo: string = 'Categoria form';
  categoria: Categoria = new Categoria();
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.categoriaService
        .leerCategoriar(id)
        .subscribe((elAutor) => (this.categoria = elAutor));
    });


  }

  registrarCategoria(): void {
    this.categoriaService
      .crearCategoria(this.categoria)
      .subscribe((elAsistente) => {
        this.router.navigate(['/categorias']);
        Swal.fire(
          'Categoria registrado',
          `${this.categoria.nombreCategoria} Se ha registrado correctamente.`,
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

  actualizarCategoria(): void {
    this.categoriaService
      .actualizarCategoria(this.categoria)
      .subscribe((elAutor) => {
        this.router.navigate(['/categorias']);
        Swal.fire(
          'Actualizar Categoria',
          `${this.categoria.nombreCategoria} Se ha actualizado correctamente.`,
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
