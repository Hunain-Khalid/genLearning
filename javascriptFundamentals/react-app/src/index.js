//okay so what i learned from this is that
// whenever a var is declared it has access
// to the entire function

// let attempts to fix the problem above
// summed up
//var --> function, global?
//let --> block, reassignment purposes
//const --> constants(read-only), block scoped

/* lesson 1
function saySup()
{
  for (let i = 0; i < 5; i++)
  {
    console.log(i);
  }
  console.log(i);
}

saySup();
*/

//Lesson 2
/*Key-Value pairs in javascript;
if there is a function inside an object
it is said that function is a method of
that obj
*/
/*
const person = {
  name: "hunny",
  //old way
  //walk: function(){}
  walk() {
    //
    console.log(this);
  },
  talk() {}
};

// dot notation should be used when accessing
// certian things is known before hand
person.talk();

// this is used when response is not known
// ahead of time

const targMem = 'name';
person[targMem.value] = 'John';
*/

//Lesson 3
/*
const person = {
  name: "hunny",
  //old way
  //walk: function(){}
  walk() {
    //THIS returns the reference
    // to this object the object
    console.log(this);
  },
  talk() {}
};

person.walk();

const walk = person.walk;
//console.log(walk);
// window object appears
walk();
*/

//Lesson 4
// functions in js are objects,
/*
const person = {
  name: "hunny",
  //old way
  //walk: function(){}
  walk() {
    //THIS returns the reference
    // to this object the object
    console.log(this);
  },
  talk() {}
};

person.walk();

binding allows the "this" variable
to be changed to the object that is being
passed

const walk = person.walk.bind(person);
//console.log(walk);
// window object appears
walk();
*/

//Lesson 6

//old way
/*
const square = function(number)
{
  return number * number;
}

//new way
const square = (number) =>
{
  return number * number;
}
*/
//if returning only

//const square = number => number * number;

//console.log(square(5));

/*
const jobs = [
  { id: 1, isActive: true},
  { id: 2, isActive: true},
  { id: 3, isActive: false},
];

const activeJobs = jobs.filter(function(job) {return job.isActive;});
//less noise
const activeJobs = jobs.filter(job => job.isActive);

*/

/*
//Lesson 7
const person = {
  talk()
  {
    var self = this;
    setTimeout(() =>  {
      console.log("this", this);
    }, 1000);
    //call back function, arrow functions
    // DO NOT rebind the "this" function
  }
};

person.talk();
*/

/*
//Lesson 8
//rendering lists should be done with
//array.map method

const colors = ['red','green','blue'];
const items = colors.map(color => `<li>${color}</li>`);

// we learned what a template LITERAL inspect

console.log(items);

*/
//Lesson 9
/*
const address = {street: '', city: '', country: ''};

//object destructuring syntax, instead of individual
// we can also use aliasing thus st is now the street property

const {street: st} = address;

*/

//Lesson 10
/*
const first = [1, 2, 3];
const second = [4, 5, 6];

//we want to combine these
const combined = first.concat(second);
// without spread we cannot add
const combinedActual = [...first, 'a' , ...second, 'b'];

const cloneArr = [...first];

console.log(first);
console.log(cloneArr);

const first1 = {name: "Mosh"};
const second2 = {job: "Instructor"};
const combo = {...first1, ...second2, loctaion: 'Australia'};

console.log(combo);
*/

//Lesson 11:classes

/*
class CoolPerson
{
    constructor(name)
    {
        this.name = name;
    }

    walk()
    {
      console.log("walk");
    }
}

const person = new CoolPerson("Mosh");
person.walk();
*/

// Lesson 13: Modules
import { Teacher } from './teacher';

const teacher = new Teacher("Hunni", "Comp Sec");
teacher.teach();
