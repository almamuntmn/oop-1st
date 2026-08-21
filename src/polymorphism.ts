class Animal{
    private _name:string

    constructor(name:string){
        this._name =name
    }

    makeSound():void{
        console.log("Animal can make sound")
    }
}

class Cat extends Animal{



makeSound(): void {
    console.log("Mewaoooo")
}
}

class Cow extends Animal{
makeSound(): void {
    console.log("Hamba")
}
}

const cat = new Cat("Billu")
cat.makeSound()

const cow = new Cow("Bolod")
cow.makeSound()

// Example 2

class Shape{
    area():number{
        return 0
    }
}
class Circle extends Shape{
    radius: number

    constructor(radius:number){
        super()
        this.radius = radius
    }
    area(): number {
        return 3.1416 * this.radius*this.radius
    }
}

class Rectangle extends Shape{
    height:number
    width: number
    constructor(height:number, width:number){
        super()
        this.height=height
        this.width=width
    }

    area(): number {
        return this.height * this.width
    }
}

const circle = new Circle(5)
console.log(circle.area())

const rectangle = new Rectangle(4,5)
console.log(rectangle.area())