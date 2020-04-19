class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class Player {
    constructor(name, number, averagePoints){
        this.name = name;
        this.number = number;
        this.pts = averagePoints;
    }
}

var userTwo = new Player("Karl Malone", 32, 32.8);
console.log(userTwo.name);
console.log(userTwo.number);
console.log(userTwo.pts);