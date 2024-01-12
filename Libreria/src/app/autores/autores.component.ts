import {Component, OnInit } from '@angular/core';
import { Autor } from '../model/Autor';
import { AutorService } from '../service/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css',
})
export class AutoresComponent implements OnInit{
  titulo: string = 'Listado de Autores';
  listaDeAutores: Autor[] = [];
  constructor(
    private autorService: AutorService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.autorService
      .recuperarAutores()
      .subscribe((lista) => (this.listaDeAutores = lista));
  }

  actualizarAutor(id: number): void{
    this.router.navigateByUrl('/autoresForm/'+id);
    
  }

  deleteAutor(id: number): void {
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
        this.autorService.eliminarAutor(id).subscribe();
        window.location.reload();
      }
    }); 
  }

}
