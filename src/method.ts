class Student {
  name: string;
  email: string;
  age: number;
  marks: number;

  constructor(name: string, email: string, age: number, marks: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.marks = marks;
  }

  getInfo(): string {
    const info = `Name: ${this.name}\n Email: ${this.email}`;
    return info;
  }
}

const mamun = new Student("Mamun", "mamun@cool.com", 30, 200);
console.log(mamun.getInfo());

// ...............................
class TeaStall {
  title: string;
  soldItems:any = [];

  constructor(title: string) {
    this.title = title;
  }

  buy(name: string, price: number){
    this.soldItems.push({name, price})
  }

  totalSold(){
    const total = this.soldItems.reduce((sum:number, item:any)=> sum+item.price, 0 )
    return total
  }
}

const shop1 = new TeaStall("Tea Shop");
shop1.buy("tea", 10)
shop1.buy("cake", 20)

console.log(shop1.totalSold())