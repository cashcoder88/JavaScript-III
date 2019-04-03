/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attr1) {
    this.createdAt = attr1.createdAt;
    this.name = attr1.name;
    this.dimensions = attr1.dimensions;
}

GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attr2) {
    this.healthPoints = attr2.healthPoints;
    GameObject.call(this, attr2);
    
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage`;
};






/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(attr3) {
    this.team = attr3.team;
    this.weapons = attr3.weapons;
    this.language = attr3.language;
//  GameObject.call(this, attr3); IMPLIED From Inheritance
    CharacterStats.call(this, attr3);
}

//Humanoid.prototype = Object.create(GameObject.prototype); IMPLIED From Inheritance
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
};

//=============================================================================================
// STRETCH STRETCH STRETCH STRETCH STRETCH STRETCH STRETCH STRETCH STRETCH STRETCH STRETCH
// Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
//=============================================================================================

function Villian(attr4) {
    Humanoid.call(this, attr4);
}

//Villian.prototype = Object.create(GameObject.prototype); IMPLIED From Inheritance
//Villian.prototype = Object.create(CharacterStats.prototype);  IMPLIED From Inheritance
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.evilAttack = function(enemy) {
      let damage = Math.floor(Math.random()*10);
      enemy.healthPoints -= damage;
      return `${this.name} just cast a dark spell!`;
};

function Hero(attr5) {
    Humanoid.call(this, attr5);
}

//Hero.prototype = Object.create(GameObject.prototype); IMPLIED From Inheritance
//Hero.prototype = Object.create(CharacterStats.prototype);  IMPLIED From Inheritance
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.lightAttack = function(enemy) {
      let damage = Math.floor(Math.random()*12);
      enemy.healthPoints -= damage;
      return `${this.name} just struck with his Lightbringer!`;
};


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const warlock = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 40,
    name: 'Sinister',
    team: 'None',
    weapons: [
      'Staff Of Evil',
      'Demon',
    ],
    language: 'Reizq',
  });

const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 35,
    name: 'Prosper',
    team: 'Team Of Justice and Good',
    weapons: [
      'The LightBringer',
      'Dragon Shield',
    ],
    language: 'Common Tongue',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(warlock.evilAttack(paladin));
  console.log(`Prosper now has ${paladin.healthPoints} health points`);
  console.log(paladin.lightAttack(warlock));
  console.log(`Sinister now has ${warlock.healthPoints} health points`);
  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!