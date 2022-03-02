import PokemonService from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(PokemonService.getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(PokemonService.getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return null if there is weight', () => {
        expect(PokemonService.convertPoundsToKilograms(emptyPokemon)).toEqual(null);
    })
    it('Should return 6.75 for 15 pounds', () => {
        expect(PokemonService.convertPoundsToKilograms(pokemon)).toEqual(6.75);
    })
});