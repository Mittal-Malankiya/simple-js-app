let pokemonRepository = (function() {
  let pokemonList = [
    { name: 'Bulbasaur', type: ['grass', 'poison'], level: 7 },
    { name: 'Charmander', type: ['Fire'], level: 7 },
    { name: 'Squirtle', type: ['Water'], level: 8 },
  ];
<<<<<<< HEAD
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
=======
>>>>>>> a7d7ee1b2db8a0a3673254375a94903271e8b03e
  pokemonList.forEach(function(pokemon, index) {
    console.log(`Pokemon at index ${index}:`);
    console.log(`Name: ${pokemon.name}`);
    console.log(`Type: ${pokemon.type}`);
    console.log(`Level: ${pokemon.level}`);
    console.log('  ');
  });
<<<<<<< HEAD
=======
})();
>>>>>>> a7d7ee1b2db8a0a3673254375a94903271e8b03e
