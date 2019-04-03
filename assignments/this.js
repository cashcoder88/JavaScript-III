/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When in the global scope, the value of “this” will be the window/console Object
* 2. Implicit Binding: Whenever a function is called with a preceding dot, the object before that dot is this.
* 3. New Binding: Whenever a constructor function is used, "this" refers to the specific instance of the object that is            created and returned by the constructor function
* 4. Explicit Binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function random(thing) {
    console.log(this);
    return thing;
}
random("bus");

// "this" is the window/console object

// Principle 2

// code example for Implicit Binding

const someObject = {
  greeting: 'Howdy',
  sayHowdy: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
someObject.sayHowdy('Ryan');

// "this" is someObject in the above instance

// Principle 3

// code example for New Binding

function FriendlyPerson(greeter) {
    this.greeting = "Hi there ";
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const cash = new FriendlyPerson("Cash"); //this would refer to new cash object created w/ friendly greeter
const dinesh = new FriendlyPerson("Dinesh");

// Principle 4

cash.speak.call(dinesh); dinesh.speak.apply(cash);

// code example for Explicit Binding