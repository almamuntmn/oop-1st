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

  getInfo():string {
    const info = `Name: ${this.name}\n Email: ${this.email}`
    return info
  }
}

const mamun = new Student("Mamun", "mamun@cool.com", 30, 200);
console.log(mamun.getInfo());
