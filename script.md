Alright! Welcome back!

We've been having LOTS of fun with all of these dogs.

Let's include some cats into this promise party!

It turns out there is also a function in utilities called `getCatBreeds` that returns some cat breeds for us.

Let's output the result of that function!

I'll go ahead and comment the first console.log so we only see our cats.

```js
utilities.getCatBreeds().then(console.log)
```

Now we have the same desire to first get all of the names of the cats, then get a particular breed.

So let's update our functions above so they apply to the cats as well.

ENSURE THAT ALL VARIABLES ARE RENAMED!!!!!

OK, now let's pull out a Russian Blue out of the cat breeds

OK cool, now we can see Golden Retriever and Russian Blue getting pulled out of here.

Now, we also have another utility function that does calls out to a third party rest api
and tells us which breed would be a better pet based on the breed of dog vs cat.

We want to utilize this function along with our other functions that return us a valid dog breed and valid cat breed.

Let's refactor the two snippets into singular functions.

First I'll refactor the dog snippet

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

How do you think we could do this? Can we just use promise chaining?

Unfortunately... This is a limitation of promises, where when you have two values that were retrieved based on
resolved promises, you cannot chain the promises together, and you have to resolve a promise in the callback of another promise
resolution.

Let me show you what I'm talking about.

First let's do the dog one:

```js
getDog("Golden Retriever").then(dog => {
  console.log(dog)
})
```

Now unfortunately, we can't chain this promise again when getting the catBreed, we have to call `getCat` in the callback
of the getDog promise

```js
getDog("Golden Retriever").then(dog => {
  console.log(dog)
  return getCat("Russian Blue").then(cat => {
    console.log(cat)
  })
})
```

Now, let's call the `getBestPet` method

```js
getDog("Golden Retriever").then(dog => {
  return getCat("Russian Blue").then(cat => {
    return utilities.getBestPet(dog, cat)
  })
})
```

And then after `getDog`, we can call .then console.log

And we can see that Golden Retriever is the best pet if we look at the terminal

And if we change "Golden Retriever" to a Corgi, then let's see what it returns

It looks like a Russian Blue cat is better than a Corgi!
