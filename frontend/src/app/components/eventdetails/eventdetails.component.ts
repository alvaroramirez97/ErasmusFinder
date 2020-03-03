import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/services/map.service';

declare var L: any;

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  public id: any;
  public evento: any;

  public datosevento = {
    latitud: 0,
    longitud: 0,
    pointer: L.layerGroup()
  };
  public mapa: any;

  constructor(public servicioEventos: EventosService, private rutaActiva: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
    console.log("id: ", this.id);
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
