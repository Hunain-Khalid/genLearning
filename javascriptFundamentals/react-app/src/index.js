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
