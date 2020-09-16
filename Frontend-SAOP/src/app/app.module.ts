import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule,HttpClient} from '@angular/common/http';
import {CursoService} from './services/curso.service';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {  HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VisualizacionComponent,
    HomeComponent,
    LoginComponent,
    PrincipalComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule,
    ReactiveFormsModule
  
  ],
  providers: [
    CursoService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
