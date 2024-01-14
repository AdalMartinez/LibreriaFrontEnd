import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private router: Router,
  ) {}

  consultarAutores(){
    this.router.navigate(['/autores']);
  }

  agregarAutores(){
    this.router.navigate(['/autoresForm']);
  }

  consultarCategorias(){
    this.router.navigate(['/categorias']);
  }

  agregarCategorias(){
    this.router.navigate(['/categoriasForm']);
  }

  consultarUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  agregarUsuarios(){
    this.router.navigate(['/usuariosForm']);
  }

  consultarLibros(){
    this.router.navigate(['/libros']);
  }

  agregarLibros(){
    this.router.navigate(['/librosForm']);
  }

  consultarPrestamos(){
    this.router.navigate(['/prestamos']);
  }

  agregarPrestamos(){
    this.router.navigate(['/prestamosForm']);
  }

  consultarMultas(){
    this.router.navigate(['/multas']);
  }

  agregarMulta(){
    this.router.navigate(['/multasForm']);
  }

  prueba(){
    this.router.navigateByUrl('/autoresForm/'+3)
  }

  consultarArchivos(){
    this.router.navigateByUrl('/listadoArchivos');
  }
}


