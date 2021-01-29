import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/services/map.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var L: any;

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  public id: any;
  public evento: any;
  public usuarios: any;

  
  public marcadores = L.layerGroup();
  public mapa: any;
  public datosevento = {
    latitud: 0,
    longitud: 0,
    pointer: L.layerGroup()
  };

  constructor(public servicioEventos: EventosService, private router: Router,private rutaActiva: ActivatedRoute, private servicioUsuarios: UsuariosService) { }


  ngOnInit() {
    this.cargarMarcadores(this.marcadores);
    this.id = this.rutaActiva.snapshot.params.id;
    localStorage.setItem('idEvento', this.id);
    console.log("id: ", this.id);
    this.servicioEventos.verEvento(this.id).subscribe(
      res => {
        console.log(res[0]);
        res[0].fecha = this.formatDate(res[0].fecha);
        this.evento = res;
        this.usuarios = res[0].lista_users;
        const ubi = {
          lat: res[0].latitud,
          long: res[0].longitud
        }
        this.cargarMapa(ubi);
      },
      err => {
        console.log(err);
      }
    );
    
    const ubi= {
      latitud: 30,
      longitud: 12,
    }
  }

  borrarEvento() {
    const idEvento = localStorage.getItem('idEvento');
    this.servicioEventos.deleteEvento(idEvento).subscribe(
      res => {
        console.log(res);
        localStorage.removeItem('idEvento');
        console.log('Evento borrado correctamente');
      },
      err => {
        console.log(err);
        this.router.navigate(['/events']);
        console.log('No se puede borrar el evento');
      }
    )
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  estuyo(dato) {
    var user_id = localStorage.getItem('id');
    if(dato == user_id){
      return true;
    }else{
      return false;
    }
  }

  apuntarse() {
    var user_id = localStorage.getItem('id');
    var ids = [];
    this.usuarios.forEach(usu => {
      ids.push(usu.id)
    });
    if(ids.includes(parseInt(user_id))){
      alert('Ya estás inscrito en este evento');
    }else{
      const inscripcion = {
        id_evento: this.id,
        id_usuario: parseInt(user_id)
      }
      console.log('apuntando');

      this.servicioEventos.apuntarse(inscripcion).subscribe(
        res => {
          console.log(res);
          location.reload();
        },
        err => {
          console.log(err);
        }
      )
    }
  }


  /* MAPA */
  cargarMapa(datos) {       // CREAR LOS MAPAS
    this.mapa = L.map('mapaevento',{
      center: [datos.lat, datos.long],
      zoom: 13
  });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributon: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapa);
    
    this.marcadores.addTo(this.mapa);

    this.mapa.setZoom(10);
  }

  cargarMarcadores(marcas: any) {  // CARGAR LOS MARCADORES DE LOS USUARIOS

    this.servicioEventos.getEventos().subscribe(
      res => {
        res.forEach(event => {
          var mar = L.marker([event.latitud, event.longitud], {
            icon: L.icon({
              iconUrl: './assets/img/iconos/mapa/event.png',
              iconSize: [20, 20],
            })
          }).bindPopup('<h5>Evento</h5><p>' + event.descripcion + '</p><a href="/events/' + event.id_evento + '">Ver Evento</a>');
          marcas.addLayer(mar);
        });
      },
      err => {
        console.log(err);
      });

  
    this.servicioUsuarios.getUsuarios().subscribe(
      res => {
        res.forEach(usu => {

          if (usu.id != localStorage.getItem('id') && usu.last_latitud != 0 && usu.last_longitud != 0) {
            const mar = L.marker([usu.last_latitud, usu.last_longitud], {
              icon: L.icon({
                iconUrl: './assets/img/iconos/mapa/user-pointer.png',
                iconSize: [20, 20],
              })
            }).bindPopup('<h5>' + usu.nombre + ' ' + usu.apellidos + '</h5><br><a href="mailto:' + usu.email + '">' + usu.email + '</a>');
            marcas.addLayer(mar);
          }

        });
      },
      err => {
        console.log(err);
      });

  }


}
