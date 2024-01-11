let pokemonRepository = (function() {
  let pokemonList = [
    { name: 'Bulbasaur', type: ['grass', 'poison'], level: 7 },
    { name: 'Charmander', type: ['Fire'], level: 7 },
    { name: 'Squirtle', type: ['Water'], level: 8 },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();
  pokemonList.forEach(function(pokemon, index) {
    console.log(`Pokemon at index ${index}:`);
    console.log(`Name: ${pokemon.name}`);
    console.log(`Type: ${pokemon.type}`);
    console.log(`Level: ${pokemon.level}`);
    console.log('  ');
  });
