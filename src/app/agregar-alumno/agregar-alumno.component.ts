import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { historialAlumno } from '../agregar-alumno';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})
export class AgregarAlumnoComponent {

  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<historialAlumno>();
  public historialAlumno : historialAlumno = {
    nombre: '',
    apellido: '',
    run: '',
    edad: ''
  }
  public cambiarNombre(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.historialAlumno.nombre = elemento.value;
    this.salida.emit();
  }
  public cambiarApellido(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.historialAlumno.apellido = elemento.value;
    this.salida.emit();
  }
  public cambiarRun(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.historialAlumno.run = elemento.value;
    this.salida.emit();
  }
  public cambiarEdad(evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.historialAlumno.edad = elemento.value;
    this.salida.emit();
  }
}
