Alright! Welcome back!
We've been having LOTS of fun with all of these dogs.

Let's include some cats into this promise party!

It turns out there is also a function in utilities called `getCatBreeds` that returns some cat breeds for us.

Let's output the result of that function!

```js
utilities.getCatBreeds().then(console.log)
```

Now looking at the terminal, you can see all the kinds of cats that getCatBreeds is returning.

Now we have the same desire to first get all of the names of the cats, then get a particular breed.

In turns out that we already have that logic done for us with the dogs, so let's refactor getDogNames and getDog to be generic for our
purposes

```js
function getNames(breeds) {
  return breeds.map(breed => breed.name)
}

function getBreed(breed) {
  return function(names) {
    return names.find(name => name === breed) || "Not Found"
  }
}
```

ENSURE THAT ALL VARIABLES ARE RENAMED!!!!!

Now that we have these refactored, let's create getDog and getCat functions

```js
function getDog(breed) {
  return utilities
    .getDogBreeds()
    .then(getNames)
    .then(getBreed(breed))
}
```

Next I'll refactor the cat snippet

```js
function getCat(breed) {
  return utilities
    .getCatBreeds()
    .then(getNames)
    .then(getBreed(breed))
}
```

Cool, now we want to use the results of `getDog('Golden Retriever') and`getCat('Russian Blue')` to determine which pet would be the best

It turns out there is another function in our utilities file, that given a dog breed and a cat breed, it returns which breed
would make a better pet.

How could we pass in both a resolved dog value and a resolved cat value at the same time?
Can we just use promise chaining?

Unfortunately... This is a limitation of promises, when you have two values that were retrieved based on
resolved promises, you cannot chain the promises together, you have to resolve a promise in the callback of another promise
resolution.

Let me show you what I'm talking about.

First let's resolve getDog

```js
getDog("Golden Retriever").then(dog => {
  console.log(dog)
})
```

Now that we have dog, let's get cat.

```js
getDog("Golden Retriever").then(dog => {
  console.log(dog)
  return getCat("Russian Blue").then(cat => {
    console.log(cat)
  })
})
```

Then lastly, let's call the `getBestPet` method

```js
getDog("Golden Retriever").then(dog => {
  return getCat("Russian Blue").then(cat => {
    return utilities.getBestPet(dog, cat)
  })
})
```

Now, you can see that we are composing promise resolutions together.

First we get the dog, then since we also need the value of cat after dog has been retrieved,
we have to getCat in the same .then block, and then once cat is retrieved, we use both dog and cat and pass those
into the getBestPet method

Let's save this and see who is the best pet between a golden retriever and a russian blue cat.
Looks like Golden Retriever is the better of the two.

And if we change "Golden Retriever" to a Corgi, then let's see what it returns

It looks like a Russian Blue cat is better than a Corgi!

And this is how you are able to compose promise resolution values together
