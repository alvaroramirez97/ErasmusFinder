import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public lista_eventos: any;
  public id: any;

  constructor( public servicioEventos: EventosService) { }

  ngOnInit() {
    this.servicioEventos.setId(this.id);
    this.servicioEventos.getEventos().subscribe(
      res => {
        console.log(res);
        this.lista_eventos = res;
      },
      err => {
        console.log(err);
      }
    );

  }
  setId(id: any) {
    localStorage.setItem('id_event', id);
    console.log(id);
  }



}
