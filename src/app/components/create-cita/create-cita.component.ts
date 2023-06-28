import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.css']
})
export class CreateCitaComponent {

  isIncorrectForm:boolean = false;

  onSubmit(form: NgForm){
    if(form.value.date === '' || form.value.name === '' || form.value.symptoms === '' || form.value.time === ''){
      this.isIncorrectForm = true;
      return;
    }
    this.isIncorrectForm = false;

    const APPOINTMENT = {...form.value}
    form.resetForm();

    console.log(APPOINTMENT)
  }

}
