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

  prueba(){
    this.router.navigateByUrl('/autoresForm/'+3)
  }
}


