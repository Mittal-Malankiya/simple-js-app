let pokemonList = [
{ name: 'Bulbasaur', type: ['grass', 'poison'], level: 7 },
{ name: 'Charmander', type: ['Fire'], level: 7 },
{ name: 'Squirtle', type: ['Water'], level: 8 },
]; 
for (let i = 0; i < pokemonList.length; i++) {
    document.write(`<p>${pokemonList[i].name} (height: ${pokemonList[i].level})</p>`);
  }