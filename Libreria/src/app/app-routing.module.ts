import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutorformComponent } from './autorform/autorform.component';
import { AutoresComponent } from './autores/autores.component';
import { CategoriasformComponent } from './categoriasform/categoriasform.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosformComponent } from './usuariosform/usuariosform.component';
//import { EventosComponent } from './eventos/eventos.component';
//import { AsistenteComponent } from './asistente/asistente.component';
//import { AsistenteformComponent } from './asistenteform/asistenteform.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  //  { path: 'eventos', component: EventosComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'autoresForm/:id', component: AutorformComponent },
  { path: 'autoresForm', component: AutorformComponent },

  { path: 'categorias', component: CategoriasComponent },
  { path: 'categoriasForm/:id', component: CategoriasformComponent },
  { path: 'categoriasForm', component: CategoriasformComponent },

  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuariosForm/:id', component: UsuariosformComponent },
  { path: 'usuariosForm', component: UsuariosformComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
