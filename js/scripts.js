
  let pokemonRepository =(function () {
    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        
        button.innerText = pokemon.name;
        button.classList.add('custom-button');
        button.addEventListener('click', function () {
          showDetails(pokemon);
      });
        listItem.appendChild(button);
        document.querySelector('.pokemon-list').appendChild(listItem);
    }
    function showDetails(pokemon) {
      console.log('Pokemon Details:', pokemon);
    }
   let pokemonArray = [
    { name: 'Bulbasaur', type: ['grass', 'poison'], level: 7 },
    { name: 'Charmander', type: ['Fire'], level: 7 },
    { name: 'Squirtle', type: ['Water'], level: 8 },];
  
    pokemonArray.forEach(pokemon => {
        addListItem(pokemon);
    });
    return {
        addListItem: addListItem,
        showDetails:showDetails
    };
  })();


