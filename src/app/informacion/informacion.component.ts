import { Component } from '@angular/core';
import { Pokemon } from '../services/interfaces/pokemon'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {
  pokemons: Pokemon[] = [
    { id: 1, nombre: 'Bulbasaur', descripcion: 'Es un Pokémon de tipo planta y venenoso.', image_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png' },
    { id: 2, nombre: 'Charmander', descripcion: 'Es un Pokémon de tipo fuego.', image_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png' },
    { id: 3, nombre: 'Squirtle', descripcion: 'Es un Pokémon de tipo agua.', image_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png' },
    { id: 4, nombre: 'Pikachu', descripcion: 'Es un Pokémon de tipo electrico.', image_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png' },
  ]
}
