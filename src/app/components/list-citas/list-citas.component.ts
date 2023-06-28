import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Appointment } from 'src/interfaces/appointment';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {

  @Input() listAppointments:Appointment[]=[];
  @Output() deleteAppointment = new EventEmitter<number>();

  removeAppointment(index:number){
    this.deleteAppointment.emit(index);
  }
}
