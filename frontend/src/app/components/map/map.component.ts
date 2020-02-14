import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public paises = [];
  constructor(private usu: UsuariosService) { }

   ngOnInit() {
  //   this.usu.verPaises().subscribe(
  //     res => {
  //       console.log(res);
  //       res.forEach(pais => {
  //         const objeto = {
  //           'label': pais.nombre,
  //           'coord': [pais.latitud, pais.longitud]
  //         };
  //         this.paises.push(objeto);
  //       });

  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );


  //   $('#pais_buscado').keyup(this.autocompletar);
  //   console.log(this.paises);
   }


  autocompletar() {//AUTOCOMPLETAR CAMPOS DE BUSQUEDA
    console.log('FUNCION-> autocompletar()');


    var prueba = ['paco', 'pepe', 'paaa', 'aa' ,'paaella', 'pancho'];

    $('#pais_buscado').autocomplete({
      source: prueba,
      minLength: 2,
      focus: function (event, ui) {
         event.preventDefault();
         $('#pais_buscado').val(ui.item.label);
         $('#ubi_buscada').val(ui.item.coord);
     },
     select: function (event, ui) {
         event.preventDefault();
         $('#ubi_buscada').val(ui.item.coord);
         $('#pais_buscado').val(ui.item.label);
         //coordenadas = ui.item.coord;
      }
    });

  }







}
