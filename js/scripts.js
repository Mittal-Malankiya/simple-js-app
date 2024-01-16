
  let pokemonRepository =(function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return pokemonList;

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
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

   pokemonList.forEach(pokemon => {
        addListItem(pokemon);
    });
    return {
      add:add,
      getAll:getAll,
        addListItem: addListItem,
        showDetails:showDetails
    };
  }();
});


