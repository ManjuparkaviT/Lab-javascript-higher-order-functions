//slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
console.log(foods.slice(1,4))

//splice

const modifiedFood=['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
modifiedFood.splice(2,0,'noodles', 'icecream')
console.log(modifiedFood)

//filter

const numberArray = [12,324,213,4,2,3,45,4234];

function isEven(array){
    return array%2==0

}


function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}


var evenNumberArray=numberArray.filter(isEven)
console.log(evenNumberArray) //printing even numbers in the given array

var primeNumberArray=numberArray.filter(isPrime)
console.log(primeNumberArray) //printing prime numbers in the given array 


//lambda

console.log(numberArray.filter(number => {return number%2==0}))//Even numberArray using lambda function 

// map

function findSquareOfNumbers(myArray){
    return myArray*myArray
}
const myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map(findSquareOfNumbers))//to print square of each elemengt of the given array using map

//reduce
const array=[2, 3, 5, 10];
//to multiply all elements of the given array using reduce function
console.log(array.reduce(function multiply(accumulator,currentValue){
    return accumulator*currentValue
}))