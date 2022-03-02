import React, {useState} from 'react';
import "./Pokemon.css"
import PokemonServices from '../services/Pokemon.service'

const Pokemon = ({id}:{id:string}) => {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonImg, setPokemonImg] = useState("")
    const [pokemonFirstAbility, setPokemonFirstAbility] = useState("")
    const [pokemonWeight, setPokemonWeight] = useState(0)

    fetch("https://pokeapi.co/api/v2/pokemon/"+ id +"/").then(response =>response.json()).then(data=>{
        setPokemonName(data.name)
        setPokemonImg(data.sprites.front_default)
        setPokemonFirstAbility(PokemonServices.getFirstAbility(data))
        setPokemonWeight(PokemonServices.convertPoundsToKilograms(data))
    })

    return (
        <div className="pokemon_card">
            <div>
                <strong>
                    {pokemonName}
                </strong>
            </div>
            <img src={pokemonImg} alt=""/>
            <div>First ability: {pokemonFirstAbility}</div>
            <div>Weight: {pokemonWeight} kg</div>
        </div>
    )
}

export default Pokemon;