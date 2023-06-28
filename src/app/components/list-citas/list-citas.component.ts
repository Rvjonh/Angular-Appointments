import { Component, Input } from '@angular/core';

import { Appointment } from 'src/interfaces/appointment';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {

  @Input() listAppointments:Appointment[]=[];

}
