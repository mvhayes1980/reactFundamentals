//ES6 JS Classes

class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    // Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

class BronzeLevelUser extends User {
    // We add the cc info property to the user here.
    constructor(username, password, ccinfo) {
        // If you're going to use 'this' in your constructor, you
        // must have super that points to the parent constructor.
        super(username, password);
        // The 'this' keyword would not work without super.
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7598", "42424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);