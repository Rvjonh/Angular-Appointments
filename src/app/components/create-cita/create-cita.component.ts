import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.css']
})
export class CreateCitaComponent {


  onSubmit(form: NgForm){
    console.log(form.value)
  }
}
