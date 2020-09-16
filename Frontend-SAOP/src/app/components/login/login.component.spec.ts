import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
      ReactiveFormsModule,FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('aqui loguear',()=>{
    it('entro a loguear', function() {
const res=[];
var s =new  LoginComponent(component.service,component.router);
//spyOn(s,'loguear').and.returnValue();
component.loguear;
expect(component.error).toBeFalsy;
expect(component.respuesta).toEqual(res);
      
    });
  });


});
