function callback(person){
console.log(`Hello, ${person}!👋`) 
}

function receivesAFunction(call){
    const person = 'Damien'
    call(person)
}

receivesAFunction(callback)


function returnsANamedFunction(){
   return function fun(){
    return console.log("did it work")
   }
}

function returnsAnAnonymousFunction(){
    return ( () => 1 + 2)
}