// ES7 CLASS SYNTAX

class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Lou';
    gender = 'female';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();