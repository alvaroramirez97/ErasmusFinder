import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/services/map.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var L: any;
declare var $: any;

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  public id: any;
  public evento: any;
  public usuarios: any;
  public formEventos: FormGroup;
  public marcadores = L.layerGroup();
  public mapa: any;
  public datosevento = {
    latitud: 0,
    longitud: 0,
    pointer: L.layerGroup()
  };

  constructor(private formBuilder: FormBuilder, public servicioEventos: EventosService, private router: Router,private rutaActiva: ActivatedRoute, private servicioUsuarios: UsuariosService) {
    this.formEventos = formBuilder.group({
      id: ['', Validators.required],
      id_organizador: localStorage.getItem('id'),
      destino: ['', Validators.required],
      descripcion: ['',  Validators.required],
      fecha: ['',  Validators.required],
      latitud: [''],
      longitud: ['']
    });
  }


  ngOnInit() {
    this.cargarMarcadores(this.marcadores);
    this.id = this.rutaActiva.snapshot.params.id;
    localStorage.setItem('idEvento', this.id);
    console.log("id: ", this.id);
    this.servicioEventos.verEvento(this.id).subscribe(
      res => {
        console.log(res[0]);
        // res[0].fecha = this.formatDate(res[0].fecha);
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

  
  formatFecha(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    // return [day, month, year].join('/');
    return d;
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
  
  submit() {
    var formu = this.formEventos.value;
    const ev = this.evento[0];
    const objEvento={
      id_evento: ev.id_evento,
      id_organizador: parseInt(localStorage.getItem('id')),
      destino: ev.destino,
      descripcion: ev.descripcion,
      fecha: new Date(ev.fecha),
      latitud: ev.latitud,
      longitud: ev.longitud
    }
    if(formu.destino != ev.destino && formu.destino!=""){
      console.log('destino cambiado');
      objEvento.destino = formu.destino;
    }
    if(formu.descripcion != ev.descripcion && formu.descripcion!=""){
      console.log('descripcion cambiada');
      objEvento.descripcion = formu.descripcion;
    }
    if(formu.fecha != ev.fecha && formu.fecha!=''){
      console.log('fecha cambiada');
      objEvento.fecha = new Date(formu.fecha);
    }
    if(formu.latitud != ev.latitud && formu.latitud!=''){
      console.log('latitud cambiada');
      objEvento.latitud = formu.latitud;
    }
    if(formu.longitud != ev.longitud && formu.longitud!=''){
      console.log('longitud cambiada');
      objEvento.longitud = formu.longitud;
    }
    
    this.servicioEventos.editarEvento(objEvento).subscribe(
      res => {
        if (!res[0]) {
          console.log('Guardado correctamente');
          location.reload();
        } else { 
          console.log(res[0]);
          alert('Algo salió mal. Intentalo de nuevo')
        }
      },
      err => {
        console.log(err);
        this.router.navigate(['/events']);
      }
    );
  }

  abrirEditor(){
    $('#editorEvento').removeClass('oculto');
  }

  cerrarEditor(){
    $('#editorEvento').addClass('oculto');
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
