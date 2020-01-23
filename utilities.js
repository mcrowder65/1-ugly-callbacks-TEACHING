function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
const cats = [
  {
    id: "59a1c646",
    name: "Bengal"
  },
  {
    id: "23559fba",
    name: "Himalayan"
  },
  {
    id: "3237c6a6",
    name: "Persian"
  },
  {
    id: "07577aa7",
    name: "Russian Blue"
  },
  {
    id: "ff1dac77",
    name: "Siamese"
  }
]
const dogs = [
  {
    id: "2f349b0c",
    name: "Golden Retriever"
  },
  {
    id: "ea382216",
    name: "Corgi"
  },
  {
    id: "6f0e0d6e",
    name: "Yellow Lab"
  },
  {
    id: "e6450423",
    name: "Pit Bull"
  },
  {
    id: "2641706a",
    name: "German Shepherd"
  }
]
function getCatBreeds() {
  return sleep(0).then(() => {
    return cats
  })
}
function getDogBreeds() {
  return sleep(0).then(() => {
    return dogs
  })
}

function getBestPet(dog, cat) {
  return sleep(0).then(() => {
    if (dog === "Not Found" || !dog || !dogs.find(d => d.name === dog)) {
      return "Dog not found"
    } else if (cat === "Not Found" || !cat || !cats.find(c => c.name === cat)) {
      return "Cat not found"
    } else if (dog === "Golden Retriever" || (!dog && !cat)) {
      return "Golden Retriever"
    } else {
      return cat
    }
  })
}
module.exports = {
  getDogBreeds,
  getCatBreeds,
  getBestPet
}
