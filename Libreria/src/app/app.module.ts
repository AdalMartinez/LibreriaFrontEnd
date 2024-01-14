import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
//import { EventosComponent } from './eventos/eventos.component';
import {MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutorformComponent } from './autorform/autorform.component';
//import { AsistenteformComponent } from './asistenteform/asistenteform.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CategoriasformComponent } from './categoriasform/categoriasform.component';
import {MatTableModule} from '@angular/material/table';
import { LibrosformComponent } from './librosform/librosform.component';
import { UsuariosformComponent } from './usuariosform/usuariosform.component';
import { PrestamosformComponent } from './prestamosform/prestamosform.component';
import { MultasformComponent } from './multasform/multasform.component';

import { CommonModule } from '@angular/common';
import { ListadoArchivosComponent } from './listado-archivos/listado-archivos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AutorformComponent,
    CategoriasformComponent,
    LibrosformComponent,
    UsuariosformComponent,
    PrestamosformComponent,
    MultasformComponent,
    ListadoArchivosComponent
  //  EventosComponent,
  //  AsistenteComponent,
   // AsistenteformComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatTableModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
