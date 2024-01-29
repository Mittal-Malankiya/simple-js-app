let pokemonRepository = (() =>
{ 
    // Private variables
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

// Function to show details of a Pokémon in a modal
  function showModal(item) {
      let modalTitle = $(".modal-title");
      let modalBody = $(".modal-body #pokemon-details");
      modalTitle.empty();
      modalBody.empty();

// Creating elements to display Pokémon details in the modal
      let nameElement = $("<h1>" + item.name + "</h1>");
      let imageElementFront = $('<img class="modal-img" style="width: 50%">').attr("src", item.imageUrlFront);
      let imageElementBack = $('<img class="modal-img" style="width: 50%">').attr("src", item.imageUrlBack);
      let heightElement = $("<p>" + "Height: " + item.height + "</p>");
      let weightElement = $("<p>" + "Weight: " + item.weight + "</p>");
      let typesElement = $("<p>" + "Types: " + item.types.join(", ") + "</p>");
      let abilitiesElement = $("<p>" + "Abilities: " + item.abilities.join(", ") + "</p>");

      // Appending elements to the modal
      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(imageElementBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
      modalBody.append(abilitiesElement);
  }

// Function to add a Pokémon to the list
  function add(pokemon) {
      pokemonList.push(pokemon);
  }

// Function to get the list of all Pokémon
 let  getAll = () => pokemonList;
  
// Function to fetch and load the Pokémon list from the API
  function loadList() {
      return fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              data.results.forEach(pokemon => {
                  let pokemonDetails = {
                      name: pokemon.name,
                      detailsUrl: pokemon.url
                  };
                  add(pokemonDetails);
              });
          })
          .catch(error => console.error(error));
  }
// Function to fetch and load details for a specific Pokémon
  function loadDetails(pokemon) {
      return fetch(pokemon.detailsUrl)
          .then(response => response.json())
          .then(details => {
              pokemon.imageUrlFront = details.sprites.front_default;
              pokemon.imageUrlBack = details.sprites.back_default;
              pokemon.height = details.height;
              pokemon.weight = details.weight;
              pokemon.types = details.types.map(type => type.type.name);
              pokemon.abilities = details.abilities.map(ability => ability.ability.name);
          })
          .catch(error => console.error(error));
  }

// Function to show details of a Pokémon (loads details and then shows modal)
  function showDetails(pokemon) {
      loadDetails(pokemon).then(() =>{
          showModal(pokemon);
      });
  }

// Public API (exposed methods)
  return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
  };
})();

// Fetch and load the Pokémon list, then create list items for each Pokémon
pokemonRepository.loadList().then(() => {
  let pokemonList = pokemonRepository.getAll();
  pokemonList.forEach((pokemon) =>{
      // Create list item for each Pokemon
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerText = pokemon.name;

      // // Add click event to show details in modal
      listItem.addEventListener("click", () =>{
           pokemonRepository.showDetails(pokemon);
           $("#exampleModal").modal("show");
       });

      $(".list-group").append(listItem);
  });
});
