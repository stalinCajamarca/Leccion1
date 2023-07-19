import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {

  heroes:any[]=[]
  termino:string | undefined;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService){}



  ngOnInit(){
    
    this.activatedRoute.params.subscribe(params =>{
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarheroes(params['termino'])
      console.log(this.heroes)
    })

  }

}