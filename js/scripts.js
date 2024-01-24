let pokemonRepository = (function() 
{
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  function showModal(item) {
      let modalTitle = $(".modal-title");
      let modalBody = $(".modal-body #pokemon-details");
      modalTitle.empty();
      modalBody.empty();

      let nameElement = $("<h1>" + item.name + "</h1>");
      let imageElementFront = $('<img class="modal-img" style="width: 50%">').attr("src", item.imageUrlFront);
      let imageElementBack = $('<img class="modal-img" style="width: 50%">').attr("src", item.imageUrlBack);
      let heightElement = $("<p>" + "Height: " + item.height + "</p>");
      let weightElement = $("<p>" + "Weight: " + item.weight + "</p>");
      let typesElement = $("<p>" + "Types: " + item.types.join(", ") + "</p>");
      let abilitiesElement = $("<p>" + "Abilities: " + item.abilities.join(", ") + "</p>");

      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(imageElementBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
      modalBody.append(abilitiesElement);
  }

  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  function getAll() {
      return pokemonList;
  }

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

  function showDetails(pokemon) {
      loadDetails(pokemon).then(function() {
          showModal(pokemon);
      });
  }

  return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  let pokemonList = pokemonRepository.getAll();
  pokemonList.forEach(function(pokemon) {
      // Create list item for each Pokemon
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerText = pokemon.name;

      // // Add click event to show details in modal
      listItem.addEventListener("click", function() {
           pokemonRepository.showDetails(pokemon);
           $("#exampleModal").modal("show");
       });

      $(".list-group").append(listItem);
  });
});
