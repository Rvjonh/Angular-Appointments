import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Appointment } from 'src/interfaces/appointment';
@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.css']
})
export class CreateCitaComponent {

  isIncorrectForm:boolean = false;

  @Output() newAppointment = new EventEmitter<Appointment>();

  onSubmit(form: NgForm){
    if(!form.value.date || !form.value.name || !form.value.symptoms || !form.value.time){
      this.isIncorrectForm = true;
      return;
    }
    this.isIncorrectForm = false;

    const APPOINTMENT:Appointment = {...form.value, symptoms: form.value.symptoms.split('\n').filter((item:string)=>item)}
    form.resetForm('');
    this.newAppointment.emit(APPOINTMENT)
  }

}
