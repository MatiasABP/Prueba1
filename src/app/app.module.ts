import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearClaseComponent } from './crear-clase/crear-clase.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { ListarClasesComponent } from './listar-clases/listar-clases.component';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearClaseComponent,
    AgregarAlumnoComponent,
    ListarClasesComponent,
    ListarAlumnosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
