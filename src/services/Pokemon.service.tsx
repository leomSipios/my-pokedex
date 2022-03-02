const PokemonService = {
    getFirstAbility: function(pokemon : any){
        if(pokemon.abilities.length === 0){
            return null
        }

        return pokemon.abilities[0].ability.name
    },

    convertPoundsToKilograms: function(pokemon : any){
         if(pokemon.weight === null){
            return 0
         }

         return pokemon.weight*0.45
    }
}

export default PokemonService