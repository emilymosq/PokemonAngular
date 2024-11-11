import { Component } from '@angular/core';
import { Pokemon } from '../services/interfaces/pokemon'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {
  pokemons: Pokemon[] = [
    { id: 1, nombre: 'Vaporeon', descripcion: 'Es un Pokémon de tipo agua.', image_url: '1.jpg' },
    { id: 2, nombre: 'Pikachu', descripcion: 'Es un Pokémon de tipo electrico.', image_url: '2.jpg' },
    { id: 3, nombre: 'Bulbasaur', descripcion: 'Es un Pokémon de tipo planta.', image_url: '3.jpg' },
    { id: 4, nombre: 'Charmander', descripcion: 'Es un Pokémon de tipo fuego.', image_url: '4.jpg' },
  ]
}
