import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{
  titulo: string = 'Listado de Categorias';
  listaDeCategorias: Categoria[] = [];
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.categoriaService
      .recuperarCategorias()
      .subscribe((lista) => (this.listaDeCategorias = lista));
  }

  actualizarCategoria(id: number): void{
    this.router.navigateByUrl('/categoriasForm/'+id);
    
  }

  deleteCategoria(id: number): void {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminar!',
          text: 'El registro se eliminó satisfactoriamente.',
          icon: 'success',
        });
        this.categoriaService.eliminarCategoria(id).subscribe();
        window.location.reload();
      }
    });
  }
}
