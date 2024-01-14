import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutorformComponent } from './autorform/autorform.component';
import { AutoresComponent } from './autores/autores.component';
import { CategoriasformComponent } from './categoriasform/categoriasform.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosformComponent } from './usuariosform/usuariosform.component';
import { LibrosComponent } from './libros/libros.component';
import { LibrosformComponent } from './librosform/librosform.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { PrestamosformComponent } from './prestamosform/prestamosform.component';
import { MultaComponent } from './multa/multa.component';
import { MultasformComponent } from './multasform/multasform.component';
import { ListadoArchivosComponent } from './listado-archivos/listado-archivos.component';
import { ArchivoFormComponent } from './archivo-form/archivo-form.component';
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

  { path: 'libros', component: LibrosComponent },
  { path: 'librosForm/:id', component: LibrosformComponent },
  { path: 'librosForm', component: LibrosformComponent },

  { path: 'prestamos', component: PrestamosComponent },
  { path: 'prestamosForm/:id', component: PrestamosformComponent },
  { path: 'prestamosForm', component: PrestamosformComponent },


  { path: 'multas', component: MultaComponent },
  { path: 'multasForm/:id', component: MultasformComponent },
  { path: 'multasForm', component: MultasformComponent },

  { path: 'listadoArchivos', component: ListadoArchivosComponent},
  {path: 'guardarArchivo', component: ArchivoFormComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
