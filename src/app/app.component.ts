import { Component } from '@angular/core';
import { Appointment } from 'src/interfaces/appointment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listAppointments:Appointment[] = [];

  addAppointment(appointment: Appointment){
    this.listAppointments.push(appointment);
  }

}
