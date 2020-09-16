import { Component, OnInit } from '@angular/core';
import {CursoService  } from "../../services/curso.service";
import { Router } from '@angular/router';
import { modelocurso } from '../../models/modelocurso';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.css']
})
export class VisualizacionComponent implements OnInit {

  constructor(
    public service:CursoService,public router:Router
    ) { }
  
  respuesta: any = [];

  datos = {
    carnet: '',
    codigo_curso: ''
  };

  public error=false;
  public c;

  cursos: any=[];
  nombrecurso:string="";
  descripcion:string="";
  creditos="";
  estado="";
  carnet = "201213223";
  sumar=2;
  ngOnInit() {
    this.obtenerCursos();
    this.suma(2);
  }

  suma(n){
    this.sumar=n;
    this.error=false;
     return this.sumar;
  }
  obtenerCursos()
  {
    this.service.getCurso(this.carnet)
    .subscribe(
      res => {
        this.cursos = res;
        this.c=res;
      },
      
      err =>   this.error=true
    
    )
  }

  recibirCurso(curso)
  {
    this.datos.carnet = curso.carnet;
    this.datos.codigo_curso = curso.codigo_curso;

     this.service.getDetalleCurso(this.datos)
    .subscribe(
      res => {
        this.nombrecurso = res[0].nombre_curso;
        this.creditos = res[0].creditos;
        
        if(res[0].estado == 1)
        {
          this.estado = 'CURSO APROBADO';
        }
        else
        {
          this.estado = 'CURSO NO APROBADO';
        }
      console.log(res);
      },
      err => console.log(err)
    
    )
  }

  

  
 

}
