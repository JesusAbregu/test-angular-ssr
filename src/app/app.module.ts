// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Módulos personalizados
import { SharedModule } from './shared/shared.module';
import { LoadingModule } from './loading/loading.module';
import { UsuarioListadoComponent } from './usuarios/components/usuario-listado/usuario-listado.component';
import { UsuarioFormularioComponent } from './usuarios/components/usuario-formulario/usuario-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListadoComponent,
    UsuarioFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
