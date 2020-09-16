import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VisualizacionComponent } from './visualizacion.component';
import {CursoService  } from "../../services/curso.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';




describe('VisualizacionComponent', () => {
  let component: VisualizacionComponent;
  let fixture: ComponentFixture<VisualizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
      declarations: [ VisualizacionComponent ],
      providers: [ CursoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
 /* describe('aqui obtenerCursos() is called',()=>{
    it('should handle error', () => {
const cursos =[] as any;
var s = new component.obtenerCursos();
spyOn(s,'obtenerCursos').and.returnValue(cursos);
component.obtenerCursos();
expect(component.error).toBeFalsy;
expect(component.cursos).toEqual(cursos);
      
    });
  });*/


  describe('aqui suma() is called',()=>{
    it('should be Autumn', function() {
const sum=2;
var s =new  VisualizacionComponent(component.service,component.router);
spyOn(s,'suma').and.returnValue(sum);
component.suma;
expect(component.error).toBeFalsy;
expect(component.sumar).toEqual(sum);
      
    });
  });

/*  describe('spyOn() Demo. Season', function() {
    it('should be Autumn', function() {
        var s = new component.obtenerCursos();
        spyOn(s, 'obtenerCursos').and.returnValue('Autumn');
        s.getNextSeason();
        expect(s.nextSeason()).toEqual('Autumn');
    });
});*/
});
