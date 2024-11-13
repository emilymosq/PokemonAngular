import { Component, OnInit } from '@angular/core';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {Pokemon, PokemonApi} from '../services/interfaces/pokemon';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonApi | null = {
      name: "",
      url: ""
    }
  detallesPokemon: any;

  constructor(
      private pokemonDetailService: PokemonDetailService,
      private http: HttpClient,
      private route: ActivatedRoute
  ) {
    }

    ngOnInit () {

      const pokemonName = this.route.snapshot.paramMap.get('name');

      if (pokemonName) {
        this.pokemon = { name: pokemonName, url: "" };
        this.getPokemonDetails();
      }

      this.pokemonDetailService.infoApi$.subscribe(pk => {
        this.pokemon = pk;
      })
    }

    getPokemonDetails(){
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${this.pokemon?.name}`)
        .subscribe(data => this.detallesPokemon = data);
    }
}
