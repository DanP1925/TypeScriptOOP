class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`)
    }

}


//Child need to know who is the parent but parent class does not need to know the parent class.
class Dog extends Animal {
    constructor(name: string) {
        super(name)
        console.log(`Hello my name is ${this.name} and I'm a dog`)
    }

    bark(){
        console.log(`Hello my name is ${this.name} and I can bark`)
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
        console.log(`Hello my name is ${this.name} and I'm a cat`)
    }

    miyaw(){
        console.log(`Hello my name is ${this.name} and I can miyaw`)
    }

}

function main() {
    let dog = new Dog('Blue');
    let anotherDog = new Dog('Carrot');
    let cat = new Cat('Miyaw');

    dog.run();
    anotherDog.run();
    cat.run();
    dog.bark();
    cat.miyaw();
}


main();