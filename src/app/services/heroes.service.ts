import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes:Heroe[]= [
    {
      origen: "Azuay",
      destino: "Machala",
      precio: "$25",
      descripcion: "bus 2, anden 7",
      tipo: "interno"
    },
    {
      origen: "Chimborazo",
      destino: "Guayaquil",
      precio: "$20",
      descripcion: "bus 10, anden 5",
      tipo: "externo"
    },
    {
      origen: "Napo",
      destino: "Quito",
      precio: "$35",
      descripcion: "bus 12, anden 7",
      tipo: "interno"
    },
    {
      origen: "Pinchincha",
      destino: "Portoviejo",
      precio: "$25",
      descripcion: "bus 10, anden 5",
      tipo: "externo"
    },
    {
      origen: "Riobamba",
      destino: "Machala",
      precio: "$45",
      descripcion: "bus 7, anden 7",
      tipo: "interno"
    },
    {
      origen: "Tungurahua",
      destino: "Loja",
      precio: "$40",
      descripcion: "bus 2, anden 5",
      tipo: "externo"
    },
    {
      origen: "Loja",
      destino: "Santa Elena",
      precio: "$34",
      descripcion: "bus 5, anden 7",
      tipo: "interno"
    },
    {
      origen: "Loja",
      destino: "Machala",
      precio: "$12",
      descripcion: "bus 8, anden 5",
      tipo: "externo"
    },
    {
      origen: "Esmeralda",
      destino: "Guayaquil",
      precio: "$34",
      descripcion: "bus 2, anden 7",
      tipo: "interno"
    },
    {
      origen: "Cuenca",
      destino: "Quito",
      precio: "$15",
      descripcion: "bus 9, anden 5",
      tipo: "externo"
    }
  ];

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx: number){
    return this.heroes[idx];
  }

  constructor() {
    console.log ("A sus servivios")
   }
   buscarheroes(termino:string){
    let heroesArr:Heroe[]=[];
    termino = termino.toLowerCase();
  
    for(let heroe of this.heroes){
      let CiudadOrigen = heroe. origen.toLowerCase();
      if(CiudadOrigen.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
      let CiudadDestino = heroe. destino.toLowerCase();
      if(CiudadDestino.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
    }
      return heroesArr;
  
    }
  
   }



export interface Heroe{
  origen: string;
  destino: string;
  precio: string;
  descripcion: string;
  tipo: string;

}
