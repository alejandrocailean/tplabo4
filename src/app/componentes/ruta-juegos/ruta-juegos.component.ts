import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Servicios/Data-service/data.service';

@Component({
  selector: 'app-ruta-juegos',
  templateUrl: './ruta-juegos.component.html',
  styleUrls: ['./ruta-juegos.component.css']
})
export class RutaJuegosComponent implements OnInit {

  
  countries;
  constructor(
    private data:DataService
  ) { }

  ngOnInit(): void {

    this.data.setDatos({name:'pepe'});
     this.data.getCountries()
    .subscribe(paises=>{
      this.countries=paises;
      console.log(paises);
    });  
    
   
  }

  verDetalles(e){
    console.log('Nombre: '+e.name+' Region: '+e.region);
    
  }



  
  

}
