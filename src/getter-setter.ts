class User {
  private _name: string;
  private _age: number;
  private _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
  }

get age(){
    return this._age
}

  set age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Age is nor valid");
    }
    this._age = value;
  }
}

const user = new User("Abul", 30, "abu;@babul.com");

console.log(user.age);
