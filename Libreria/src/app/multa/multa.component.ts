import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MultaService } from '../service/multa.service';
import { Router } from '@angular/router';
import { Multa } from '../model/Multa';

@Component({
  selector: 'app-multa',
  templateUrl: './multa.component.html',
  styleUrl: './multa.component.css'
})
export class MultaComponent implements OnInit{
  titulo: string = 'Listado de Multas';
  listaDeMultas: Multa[] = [];
  constructor(
    private multaService: MultaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.multaService
      .recuperarMultas()
      .subscribe((lista) => (this.listaDeMultas = lista));
  }

  actualizarMulta(id: number): void{
    this.router.navigateByUrl('/multasForm/'+id);
    
  }

  deleteMulta(id: number): void {
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
        this.multaService.eliminarMulta(id).subscribe();
        window.location.reload();
      }
    }); 
  }
}
