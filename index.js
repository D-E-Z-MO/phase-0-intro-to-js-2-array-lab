 const cats = ["Milo", "Otis", "Garfield"];
 const destructivelyAppendCat = (name) => {
   cats.push(name)
 }
const destructivelyPrependCat = (name) => {
  cats.unshift(name)
}
const  destructivelyRemoveLastCat = () => {
  cats.pop()
}
const destructivelyRemoveFirstCat = () => {
  cats.shift()
}
const appendCat = (name) => {
  const appendCatNew = [...cats, name]
  return appendCatNew
}
const prependCat = (name) => {
  const appendCatNew = [name ,...cats]
  return appendCatNew
}
const removeLastCat = () =>{ [
     ...cats.splice(0, -1)
   ]
}

