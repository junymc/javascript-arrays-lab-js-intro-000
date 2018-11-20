var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}// Add your functions and code here

function destructivelyPrependKittens(name) {
  kittens.unshift(name)
  return kittens
}
