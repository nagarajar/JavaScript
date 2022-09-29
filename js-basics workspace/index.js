// Find max of two numbers
let number = max(3, 6)
console.log(number);
function max(a, b){
   return (a > b) ? a : b;
}

//Landscape or portrait
let result = isLandscape(7, 14);
console.log(result);

function isLandscape(width, hieght){
    return (width > hieght) ? 'Landscape' : 'Portrait';
}

//FizzBuzz -> it should return string
// if div by 3 -> Fizz
// if div by 5 -> Buzz
// if div by 3 & 5 -> FizzBuzz
// if not div by 3 & 5 -> return that num
// if you pass any parameter other than num -> return Not a Number

let output = fizzBuzz(49);
console.log(output);

function fizzBuzz(num){
    if(typeof num !== 'number')
        return 'Not a Number';

    if(num % 3 === 0 && num % 5 === 0)
        return 'FizzBuzz';
    else if(num % 3 === 0)
        return 'Fizz';
    else if(num % 5 === 0)
        return 'Buzz';
    else 
        return num;
       
}

//Demerit points
//5 -> 1 point
//12 points -> suspended


checkSpeed(130);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        console.log('ok');
        return;
    }

    const points = Math.floor((speed - speedLimit)/kmPerPoint)
    if(points < 12)
        console.log('Point '+ points);
    else
        console.log('License Suspended');

}

//Exerice Even and Odd numbers
// Show EVEN or ODD based on number
// Pass the limit

showEvenOrOdd(10);

function showEvenOrOdd(limit){
    for(let i = 0; i <= limit; i++){
        // if(i%2 === 0)
        //     console.log(i + " EVEN");
        // else
        //     console.log(i + " ODD");

        const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

//Exerice Count Truthy in a given array
//Falsy values -> undefined, null, false, '', 0, NaN
//Truthy values -> other than Falsy

const array = [1,2, false, undefined];
console.log('Count of Truthy values : '+ countTruthy(array));
function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value){
            count++;
        }  
    }
    return count;
}

//Exerice Show only string properties from the object

const movie = {
    title: 'a',
    releaseDate: 2018,
    rating: 4.3,
    director: 'b'
}

showProperties(movie);

function showProperties(movie){
    for(let key in movie)
    {
        if(typeof movie[key] === 'string')
            console.log(key, movie[key])
    }
}

//Exercise Sum of multiples of 3 and 5
console.log('Sum of multiples of 3 and 5 from given limit is '+ sum(10));

function sum(num){
    let total = 0;
    for(let i = 1; i <= num; i++)
        if((i % 3 === 0) || (i % 5 === 0))
            total+=i;

    return total;

}

//Exercise calculate grade
// If Average
// 1 - 59  : F
// 60 - 69 : D
// 70 - 79 : C
// 80 - 89 : B
// 90 - 100: A

const marks = [72, 58, 85];

console.log('Grade is : '+calculateGrade(marks))

function calculateGrade(marks)
{
    let average = calculateAverage(marks);

    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum+=value;
    return sum / array.length;
}

//Exercise Stars

showStars(10);

 function showStars(rows){
    for(let i = 1; i <= rows; i++)
    {
        let pattern = '';
        for(let j = 1; j <= i; j++){
            pattern += '*';
        }
        console.log(pattern);  
    }

 }

//Exercise Prime Number
showPrimes(20);

function showPrimes(limit){
    for(let i = 2; i <= limit; i++){
        let count = 0;
        for(let j = 2; j <= i/2; j++){
            if(i % j === 0){
                count++
            }
        }
        if(count == 0){
            console.log(i)
        }
    }
}

//second approach
showPrimes1(20);

function showPrimes1(limit){
    for(let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
    
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;

    return true;    
}

/*******SECTION - 5 --> Objects *******/
//Object Oriented Programming (oops)
//Purpose of object is to group he related variables
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('Draw..!')
    }
};

circle.draw(); //Method

// Factory Functions pattern
// Instead of creating as a object manually everytime make it as function with custom inputs

function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('Draw..!')
        }
        //(o)r
        // radius: radius, // if passing input and variable having same name no need give the parmeter name again
        // draw: function(){
        //     console.log('Draw..!')
        // }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

console.log('---------------------------------------');
// How can iterate objects using for..in loop
for(let key in circle1)
    console.log(key, circle1[key]);

// How can iterate objects using for..of loop
for(let key of Object.keys(circle1))
    console.log(key);

for(let entry of Object.entries(circle1))
    console.log(entry);
    
if('radius' in circle1) console.log('YES')
console.log('---------------------------------------');

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Functions Pattern
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw....!');
    }
}

const circle3 = new Circle(1);
console.log(circle3);

console.log('---------------------------------------');
// Clone an Object 
// 1st way -> using for..in loop
const another1 = {};
for(let key in circle3)
    another1[key] = circle3[key];

console.log(another1);

// 2nd way -> using assign method from Object
const another2 = Object.assign({}, circle3);
console.log(another2);

// 3rd way -> using spread operator
const another3 = { ...circle3 };
console.log(another3);

console.log('*******************************************************');
//Exercise-01 -> Address Object
// Create a address object with street, city, zipCode -> then 
// Create a function showAddress(address) -> disply Key and Value
const address = {
    street: 25,
    city: 'Bangalore',
    zipCode: 583110
}

showAddress(address);

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}
console.log('*******************************************************');


// Exercise-02 - Factory and Constructor Function
// intialize the address object using factory and constructor function
//1. factory
console.log('Using Factory Function');
const addressF1 = createAddressF(25, 'Bellary', 581320);
console.log(addressF1);

function createAddressF(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

//2. Constructor
console.log('Using Constructor Function');
const addressC1 = new Address(26, 'Siruguppa', 543126);
console.log(addressC1);

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


console.log('*******************************************************');

// Exercise 3- Object Equality
// Create 2 bjects of address using condtructor function
// Compare areEqual or areSame

let address1 = new Address(27, 'Bangalore', 543102);
let address2 = new Address(27, 'Bangalore', 543102);
let address3 = address1;

console.log('address1 and address2 are equal '+ areEqual(address1, address2));
console.log('address1 and address2 are same '+ areSame(address1, address2));
console.log('address1 and address3 are same '+ areSame(address1, address3));

function areEqual(address1, address2){
    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){
    return address1 === address2;
}
console.log('*******************************************************');

// Exercise 4- Blog Post Object

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],
    isLive: true
};

console.log(post);
console.log('*******************************************************');

//Exercise 5- Constructor Functions

let post1 = new Post('a','b','c');

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(post1);
console.log('*******************************************************');

// Section 06 - Arrays
// Adding elements
const numbers = [3,4];

// Add elements at the end
numbers.push(5,6);
console.log(numbers);

// Add elements at the begining
numbers.unshift(1,2);
console.log(numbers);

// Add elements at the middle
numbers.splice(2, 0, 'a','b');
console.log(numbers);
console.log('*******************************************************');

// Finding Elements in an array(Ex Primitives)
// There are some methods used to find the elements
const numbers1 = [1,2,3,4,5,6,7,5,1,3];
// indexOf -> This method will returns the index of the elements if exist else returns -1
console.log(numbers1.indexOf(5));

// lastIndexOf -> This method will returns the index of the elements that comes at last if exist else returns -1
console.log(numbers1.lastIndexOf(5));

// includes -> This method will return true if element found else return false
console.log(numbers1.includes(5));
console.log('*******************************************************');

// Finding Elements in an array(Reference type or Objects)
// There are two methods used to find the reference type
const courses = [
    {id: 1, name: 'naga'},
    {id: 2, name: 'raja'}
];

//a) find -> This method accept the function(element) as a input, if object found return the object else return undefined
const course = courses.find(function(course){
                    return course.name === 'naga';
                });
console.log(course);

//b) findIndex -> This method accept the function(element) as a input, if object found return the index of object else return -1
const course1 = courses.findIndex(function(course){
    return course.name === 'naga';
});
console.log(course1);

console.log('*******************************************************');

// Arrow Functions
// () => {}
// If your passing 1 variable no need to inculde ()
// If your returning only line no need to write "return" key word and {} also
const course3 = courses.find((course) => course.name === 'naga');
console.log(course3);
console.log('*******************************************************');

// Removing Elements from array
const elements = [1,2,3,4,5,6];

// Remove element at the end
elements.pop();
console.log(elements);

// Remove elements at the begining
elements.shift();
console.log(elements);

// Remove elements at the middle
elements.splice(2, 1);
console.log(elements);
console.log('*******************************************************');

// Emptying an array
// There 4 solutions to emplty an array
let numbersArray = [1,2,3,4,5];
let anotherArray = numbersArray;

// Solution - 1 => but this will not work if the array has multiple references
numbersArray = [];
console.log(numbersArray);
console.log(anotherArray);

// Solution - 2 => set the length of array to zero -> this is the more effective solution
numbersArray.length = 0;
console.log(numbersArray);
console.log(anotherArray);

// Solution - 3 => using splice method
numbersArray.splice(0, numbersArray.length);
console.log(numbersArray);
console.log(anotherArray);

// Solution - 3 => using pop method and put that in the loop -> Not recomended
while(numbersArray.length > 0)
    numbersArray.pop();

console.log(numbersArray);
console.log(anotherArray);


console.log('*******************************************************');

// Combining and slicing arrays
const first = [1,2,3];
const second = [4,5,6];
//a) Comibining arrays using concat method
const combine = first.concat(second);
console.log(combine);

//b) Slicing(deviding) arrays using slice method
//const slice = combine.slice(2,4); // It will start from index 2 and end at index 4
//const slice = combine.slice(2); // It will start from index 2 till end
const slice = combine.slice(); // It will create a copy of combine array
console.log(slice);

// Incase of objects array, the reference will be copied into to the array 
// Incase if you modified that object content using reference same will be reflected in the original array
console.log('*******************************************************');

// Combining arrays using spread operator(...) -> 3 dot's
const combine1 = [...first,'a','b', ...second];
// copy the array
const copy = [...combine1];
console.log(combine1);
console.log('*******************************************************');

// Iterating an array
const list = [1,2,3,4,5];
//a) using for..of loop
for(let value of list)
    console.log(value);

//b) using forEach loop
list.forEach(function(number){
    console.log(number);
}); 

//c) using forEach loop with Lamda Expression
list.forEach(number => console.log(number)); 

//d) using forEach loop with Lamda Expression and printing index also
list.forEach((number, index) => console.log(index,number)); 


console.log('*******************************************************');

//Joining Arrays
const numbersList = [1,2,3,4];
console.log(numbersList);

// Using join method we can join the array
const joined = numbersList.join(',');
console.log(joined);

// Split the given string into array using split method
const message = 'This is my first name';
const parts = message.split(' ');
console.log(parts);

// Join the above combined array by using join method
const combined = parts.join('-');
console.log(combined);
console.log('*******************************************************');

//Sorting Array
const numbersList1 = [5,4,1,6,3,7,2];

// sort above array using sort method
numbersList1.sort(); // Assending Order
console.log(numbersList1);

numbersList1.reverse(); // dessending Order
console.log(numbersList1);


// Incase of objects how can we sort ?
const coursesList = [
    {id: 1, name: 'Hari'},
    {id: 2, name: 'akshya'},
    {id: 3, name: 'Kiran'}
];

// For object sorting, the sort method accept the function to sort
coursesList.sort(function(a,b){
    //if a < b => -1
    //if a > b =>  1
    //if a = b =>  0
    //Note : incase the first letter in uppercase for one and other in lower case - ascii values are different
    const nameA = a.name.toLowerCase(); // convert lower or uppercase, but both in same type
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;

});

console.log(coursesList);
console.log('*******************************************************');


// Testing the Elements of an Array
const numbersList2 = [1,5,8];
//a) Using every() method we can test the array has only positive numbers or not
const allPositive1 = numbersList2.every(function(value){
    return value >= 0;
});

console.log(allPositive1);

const numbersList3 = [1,5,8,-1];
const allPositive2= numbersList3.every(function(value){
    return value >= 0;
});

console.log(allPositive2);

//b) Using some() method we can test the array has atleast one negative number present or not
const numbersList4 = [1,5,8];
const allPositive3 = numbersList2.some(function(value){
    return value >= 0;
});

console.log(allPositive3);

const numbersList5 = [1,5,8,-1];
const allPositive4= numbersList3.every(function(value){
    return value >= 0;
});

console.log(allPositive4);

console.log('*******************************************************');

// Filtering an Array
const numbersList6 = [1,8,6,-1,2,-3];

// using filter() method we can filter the elemets of array
const filteredArray = numbersList6.filter(n => n >= 0);

console.log(filteredArray);
console.log('*******************************************************');

// Mapping an Array
const numbersList7 = [1,8,6,-1,2,-3];
//const filtered = numbersList7.filter(n => n >= 0);

// Using map() method we can convert one form of array to another form
// map -> Data Transfer
// convert array into objects array
//const item = filtered.map(n => ({value : n}));

//short & clean
const item = numbersList7.
    filter(n => n >= 0)
    .map(n => ({value : n})) // converting number array into object array
    .filter(obj => obj.value > 1) // again filtering
    .map(obj => obj.value); // converting object array into number array

console.log(item);
console.log('*******************************************************');

// Reducing an Array
const numbersList8 = [1,6,5,7,9];

//a) 1st way of finding sum
let sum1 = 0;
for(let n of numbersList8){
    sum1 += n;
}
console.log(sum1);

//b) 2nd way of finding sum using reduce() method
// Syntax
// numbersList8.reduce((accumulator, currentvalue) => {
    //     return accumulator + currentvalue;
    // },0); // 0 is the intial value assigned to accumulator, like accumulator = 0 it is optional
    
    //How it is working internally 
    //when you initialize accumulator = 0
    //a = 0, c = 1 => a = 1
    //a = 1, c = 6 => a = 7
    //a = 7, c = 5 => a = 12
    //a = 12, c = 7 => a = 19
    //a = 19, c = 9 => a = 28
    // const sum2 = numbersList8.reduce((accumulator, currentvalue) => {
        //     return accumulator + currentvalue;
        // },0);
        
        //when you not initialize accumulator = 0
        //a = 1, c = 6 => a = 7
        //a = 7, c = 5 => a = 12
        //a = 12, c = 7 => a = 19
        //a = 19, c = 9 => a = 28
        const sum2 = numbersList8.reduce((accumulator, currentvalue) => accumulator + currentvalue);
        console.log(sum2);
    console.log('*******************************************************');
    
    
// Exercise 1- Array from Range
const numbersList9 = arrayFromRange(2, 4);
console.log(numbersList9);

function arrayFromRange(min, max){
    let array = [];
    for(let i = min; i <= max; i++)
        array.push(i);
    return array;
}
console.log('*******************************************************');


// Exercise 2- Includes
const numbersList10 = [1,6,5,7,9];
console.log(numbersList10.includes(9));

// create the includes method manually like below

const isPresent = includes(numbersList10, 10);
console.log(isPresent);
function includes(array, searchElement){
    for(let n of array){
        if(n === searchElement)
            return true;
    }
    return false
}
console.log('*******************************************************');


// Exercise 3- Except
const numbersList11 = [1,6,5,7,9];

const outPut = except(numbersList11, [1,7]);
console.log(outPut);

function except(array, excluded){
    const outputArray = [];

    for(let element of array)
        if(!excluded.includes(element))
            outputArray.push(element);

    return outputArray;
}
console.log('*******************************************************');