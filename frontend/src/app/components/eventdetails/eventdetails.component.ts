import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  public id: any;
  public evento: any;

  constructor(public servicioEventos: EventosService) { }


  ngOnInit() {
    // this.id = this.servicioEventos.getId();
    this.id = localStorage.getItem('id_event');
    console.log(this.id);
    this.servicioEventos.verEvento(this.id).subscribe(
      res => {
        console.log(res);
        this.evento = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
