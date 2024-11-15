import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonApi } from '../services/interfaces/pokemon'
import {InformacionService} from '../services/modales/informacion.service'
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service'
import {PokemonApiService} from '../services/pokemon/pokemon-api.service'
import {Router} from '@angular/router'
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit{
  mostrarModal: boolean = false;

  pokemonsApi: PokemonApi[] = [

    ]

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private pokemonApiService: PokemonApiService,
    private pokemonDetailService: PokemonDetailService,
    private router: Router
    ){}

  ngOnInit() {
    this.informacionService.modal$.subscribe(modal => {
      this.mostrarModal = modal;
      })

    this.pokemonApiService.getAllPokemon().subscribe({
      //obligatorios: next, error
      //opcional:  complete

      //si la comunicacion y la respuesta esta ok
        next: data => {
         // console.log(data.results)
          this.pokemonsApi = data.results;
          console.log(this.pokemonsApi);
        },
      //si hay error a la hora de comunicarnos con la api o problema con el servicio de
        error: error => {
          console.log('Error al obtener los pokemons:', error);
        },
      //Se ejecuta este bien o este mal
        complete: () => {
          console.log('Obtención de pokemons completada');
        }
      })
    }

  toggleModal(pk: Pokemon) {
    this.enviarPokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
   }

  pokemons: Pokemon[] = [
    { id: 1, nombre: 'Squirtle', descripcion: 'Es un Pokémon de tipo agua.', image_url: '1.jpg' },
    { id: 2, nombre: 'Pikachu', descripcion: 'Es un Pokémon de tipo electrico.', image_url: '2.jpg' },
    { id: 3, nombre: 'Bulbasaur', descripcion: 'Es un Pokémon de tipo planta.', image_url: '3.jpg' },
    { id: 4, nombre: 'Charmander', descripcion: 'Es un Pokémon de tipo fuego.', image_url: '4.jpg' },
  ]

  detallesPokemon(pk: PokemonApi){
    this.pokemonDetailService.updatePokemonApi(pk)
    //this.router.navigate([`/detalles/${pk.name}`])
    window.open(`/detalles/${pk.name}`, '_blank');

  }
}

