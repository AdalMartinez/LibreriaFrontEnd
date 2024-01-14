import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-usuariosform',
  templateUrl: './usuariosform.component.html',
  styleUrl: './usuariosform.component.css'
})
export class UsuariosformComponent {
  titulo: string = 'Usuario form';
  usuario: Usuario = new Usuario();
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.usuarioService
        .leerUsuario(id)
        .subscribe((elAutor) => (this.usuario = elAutor));
    });


  }

  registrarUsuario(): void {
    this.usuarioService
      .crearUsuario(this.usuario)
      .subscribe((elAsistente) => {
        this.router.navigate(['/usuarios']);
        Swal.fire(
          'Usuario registrado',
          `${this.usuario.nombreUsuario} Se ha registrado correctamente.`,
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

  actualizarUsuario(): void {
    this.usuarioService
      .actualizarUsuario(this.usuario)
      .subscribe((elAutor) => {
        this.router.navigate(['/usuarios']);
        Swal.fire(
          'Actualizar Usuario',
          `${this.usuario.nombreUsuario} Se ha actualizado correctamente.`,
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
