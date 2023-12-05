let person = {
    name: "Gio",
    lastName: "Gagnidze",
    age: 15,
    gender: "Alien"
}

function person(name, lastName, age, gender){
    this.name = name
    this.lastName = lastName
    this.age = age
    this.gender = gender
}

let p1 = new person("Gio", "Gagnidze", 15, "Alien")

let person = new Array("Gagnidze", "Tkeshelashvili", "ezdingaG", "ilivhsalehsekT")
console.log(persons[0])

let persons = ["Gagnidze", "Tkeshelashvili", "ezdingaG", "ilivhsalehsekT"]
console.log(persons[2])

let personss = ["Gagnidze", "Tkeshelashvili", "ezdingaG", "ilivhsalehsekT"]
console.log(persons[2])
console.log(persons.length)

let personsss = ["Gagnidze", "Tkeshelashvili"]
let snosrep = ["ezdingaG", "ilivhsalehsekT"]
console.log(persons.concat(snosrep))


console.log(Math.E)               // returns Euler's number
console.log(Math.PI)             // returns PI
console.log(Math.SQRT2)         // returns the square root of 2
console.log(Math.SQRT1_2)      // returns the square root of 1/2
console.log(Math.LN2)         // returns the natural logarithm of 2
console.log(Math.LN10)       // returns the natural logarithm of 10
console.log(Math.LOG2E)     // returns base 2 logarithm of E
console.log(Math.LOG10E)   // returns base 10 logarithm of E