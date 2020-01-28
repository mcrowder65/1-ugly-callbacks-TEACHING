const utilities = require("./utilities")

function getDogNames(dogBreeds) {
  return dogBreeds.map(dogBreed => dogBreed.name)
}

function getDog(breed) {
  return function(names) {
    return names.find(name => name === breed) || "Not Found"
  }
}
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(getDog("Golden Retriever"))
  .then(console.log)
