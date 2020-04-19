const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 8 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 4 },
    { name: 'Aaron', specialty: "Entomology", medals: 7 },
    { name: 'Carolyn', specialty: 'King Fu', medals: 5 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3 }
]
// Old way
let instructor_names = [];

for(let i = 0; i < instructors.length; i++){
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

// Since ES6
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);
// Exact same thing, different parameter name
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNamesTwo);

// Fix the code:

const instructorInfo = instructors.filter(instructor => instructor.name == 'Aaron');
console.log(instructorInfo);