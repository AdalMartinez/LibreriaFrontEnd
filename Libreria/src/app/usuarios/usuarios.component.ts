import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  titulo: string = 'Listado de Usuarios';
  listaDeUsuarios: Usuario[] = [];
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.usuarioService
      .recuperarUsuarios()
      .subscribe((lista) => (this.listaDeUsuarios = lista));
  }

  actualizarUsuario(id: number): void{
    this.router.navigateByUrl('/usuariosForm/'+id);
    
  }

  deleteUsuario(id: number): void {
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
        this.usuarioService.eliminarUsuario(id).subscribe();
        window.location.reload();
      }
    }); 
  }

  descargarReporte(): void{
    this.usuarioService.generarReportePDF().subscribe(
      (reporteBlob: Blob) => {
        const blobUrl = URL.createObjectURL(reporteBlob);
        window.open(blobUrl, '_blank');
      },
      (error) => console.error('Error al generar el reporte PDF', error)
    );
    
  }
}
