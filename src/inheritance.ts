class User {
  private _name: string;
  private _age: number;
  protected _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Age is nor valid");
    }
    this._age = value;
  }
}

class Student extends User {
  private _fee: number;

  constructor(name: string, age: number, email: string, fee: number) {
    super(name, age, email);
    this._fee = fee;
  }
}

class Teacher extends User {
  private _id: number;

  constructor(name: string, age: number, email: string, id: number) {
    super(name, age, email);
    this._id = id;
  }
}

const student = new Student("Mamun", 32, "cool@man.com", 200);
const teacher= new Teacher("Jafor", 42, "man@man.com", 10);
console.log(teacher);
