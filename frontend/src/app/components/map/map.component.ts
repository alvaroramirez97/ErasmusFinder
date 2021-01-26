import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EventosService } from 'src/app/services/eventos.service';

declare var $: any;
declare var L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  public paises = [];
  public datosuser = {
    latitud: 0,
    longitud: 0,
    pointer: L.layerGroup()
  };
  public marcadores = L.layerGroup();
  public mapa: any;
  public coordBuscada = {
    lati: 0,
    longi: 0
  };

  constructor(private servicioPaises: MapService, private servicioUsuarios: UsuariosService, private servicioEventos: EventosService) { }

  ngOnInit() {
    this.cargarMarcadores(this.marcadores);
    this.servicioPaises.verPaises().subscribe(
      res => {
        res.forEach(pais => {
          const objeto = {
            label: pais.nombre,
            coord: [pais.latitud, pais.longitud]
          };
          this.paises.push(objeto);
        });
      },
      err => {
        console.log(err);
      }
    );

    this.cargarMapa(this.datosuser);
    this.updateDatos(this.datosuser, this);
  }

  updateDatos(datos: any, pointto: any) { // Actualizar datosuser
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log('Position:', position);
        datos.latitud = position.coords.latitude;
        datos.longitud = position.coords.longitude;
        if (!!localStorage.getItem('id')) {
          pointto.updateBD(position.coords.latitude, position.coords.longitude);
        }
      });
    }
  }


  autocompletar(lista: Array<any>, coor: any) {// AUTOCOMPLETAR CAMPOS DE BUSQUEDA

    $('#pais_buscado').autocomplete({
      source: lista,
      minLength: 2,
      classes: {
        'ui-autocomplete': 'lista_autocomplete',
        'ui-menu-item': 'elemento_autocomplete'
      },
      focus(event, ui) {
        event.preventDefault();
        $('#lati_buscada').val(ui.item.coord[0]);
        $('#long_buscada').val(ui.item.coord[1]);
        $('#pais_buscado').val(ui.item.label);
        coor.lati = ui.item.coord[0];
        coor.longi = ui.item.coord[1];
      },
      select(event, ui) {
        event.preventDefault();
        $('#lati_buscada').val(ui.item.coord[0]);
        $('#long_buscada').val(ui.item.coord[1]);
        $('#pais_buscado').val(ui.item.label);
        coor.lati = ui.item.coord[0];
        coor.longi = ui.item.coord[1];
      }
    });
  }


  cargarMapa(datos: any) {       // CREAR LOS MAPAS
    this.mapa = L.map('mapamundi');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributon: '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapa);
    datos.pointer.addTo(this.mapa);
    this.marcadores.addTo(this.mapa);

    this.mapa.setZoom(10);
    this.cargarUbi(datos);
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
          }).bindPopup('<h5>EVENTO</h5><p>' + event.descripcion + '</p><a href="/events/' + event.id_evento + '">Ver Evento</a>');
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

  cargarUbi(datos: any) {     // CARGAR MI UBICACION
    datos.pointer.clearLayers();
    this.mapa.locate({ setView: true, maxZoom: 16 })
      .on('locationfound', function (e) {

        var marcador = L.marker([e.latitude, e.longitude], {
          icon: L.icon({
            iconUrl: './assets/img/iconos/mapa/you.png',
            iconSize: [23, 23],
          }),
        }).bindPopup('<h5>Tu ubicacion</h5>');
        datos.latitud = e.latitude;
        datos.longitud = e.longitude;
        const radio = L.circleMarker([e.latitude, e.longitude], {
          radius: 20,
          weight: 1,
          color: 'white',
          fillColor: '#34ebb7',
          fillOpacity: 0.2
        });
        datos.pointer.addLayer(marcador);
        datos.pointer.addLayer(radio);
        console.log('Datos:', datos);
      })
      .on('locationerror', function (e) {
        console.log(e);
        alert('Debes permitir la geolocalizacion');
      });

  }

  updateBD(lat : any, long : any) {
    const datos_ubi = {
      email: localStorage.getItem('id'),
      last_longitud: long,
      last_latitud: lat,
    }
    if (datos_ubi.last_latitud !=0 && datos_ubi.last_longitud !=0 ) {
      this.servicioUsuarios.updateUbi(datos_ubi).subscribe(
        res =>{
          console.log('ubicación actualizada:', res, datos_ubi);
        },
        err => {
          console.log(err);
        }
      );
      
    }else{
      console.log('hay 0')
    }

  }

  miUbi() { // BOTON MI UBICACION
    this.updateDatos(this.datosuser, this);
    console.log('MI UBI', this.datosuser.latitud, this.datosuser.longitud);
    this.mapa.flyTo([this.datosuser.latitud, this.datosuser.longitud], 15);
  }

  buscar() {  // BOTON BUSCAR
    const lon = $('#long_buscada').val();
    const lati = $('#lati_buscada').val();

    this.mapa.flyTo([lati, lon], 7);
  }

}
