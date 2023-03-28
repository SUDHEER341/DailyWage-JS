let birds = new Array("Kingfisher","Peacocks","Woodpeaker");
let cats = new Array("Ragdoll","Peresian","Scottish Fold");
let originalDogs = ["Rottweiler","German Sheperd","siberian Husky"];


// Copy Array
let sliceDogs = originalDogs.slice(1,2);
let copyDogs =[originalDogs];
let dogs = originalDogs.slice(0);
console.log(dogs);

//Stack operations  Push and Pop
let PushDog = dogs.push("Pomeranian");
let popDog = dogs.pop();
dogs[dogs.length] = "Dobermann";

//Add and Remove from First element in array
let addFirst = dogs.unshift("Pomeranian");
let shiftDog = dogs.shift();

//Array Functions  Concat,Sort and Slice

let animals = dogs.concat(cats,birds);
let newAnimals = [ dogs,cats,birds].toString();
let sortDog = dogs.slice(0).sort();

function scanArray([first,second]){console.log("Scan:"+first+" "+shiftDog);}
scanArray(animals);
let joinAllAnimals = animals.join(" ");

let allAnimals =" ";
for(let animal of animals) allAnimals +=animal + " ";
console.log("Animals:"+allAnimals);