import { Component, OnInit } from '@angular/core';
import { LibroService } from '../service/libros.service';
import { Router } from '@angular/router';
import { Libro } from '../model/Libro';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{
  titulo: string = 'Listado de Libros';
  listaDeLibros: Libro[] = [];
  constructor(
    private librosService: LibroService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.librosService
      .recuperarLibros()
      .subscribe((lista) => (this.listaDeLibros = lista));
  }

  actualizarLibro(id: number): void{
    this.router.navigateByUrl('/librosForm/'+id);
    
  }

  deleteLibro(id: number): void {
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
        this.librosService.eliminarLibro(id).subscribe();
        window.location.reload();
      }
    }); 
  }
}
