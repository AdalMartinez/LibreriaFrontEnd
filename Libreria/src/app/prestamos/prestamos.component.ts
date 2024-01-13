import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../model/Prestamo';
import { PrestamoService } from '../service/prestamo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit{
  titulo: string = 'Listado de Prestamos';
  listaDePrestamos: Prestamo[] = [];
  constructor(
    private prestamosService: PrestamoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.prestamosService
      .recuperarPrestamos()
      .subscribe((lista) => (this.listaDePrestamos = lista));
  }

  actualizarPrestamo(id: number): void{
    this.router.navigateByUrl('/prestamosForm/'+id);
    
  }

  deletePrestamo(id: number): void {
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
        this.prestamosService.eliminarPrestamo(id).subscribe();
        window.location.reload();
      }
    }); 
  }
}