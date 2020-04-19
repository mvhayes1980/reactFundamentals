// ES6 JS Classes

class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User("Anonymous dude");

// we can now use the instance and the .operator
// to access the 2 moethods

anonDude.greet();
anonDude.status();

// Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

// Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

// Create 2 new instances of the class via memory
var mikusBelikus = new User("Mikus Belikus");
mikusBelikus.greet();
mikusBelikus.status();

var missFlea = new User("Scaropolis");
missFlea.greet();
missFlea.status();