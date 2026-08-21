// access modifier: oublic, private, protected
class Bkash {
    public phone: string
    private balance: number
    private pin: number
    protected history:any = []

    constructor(phone:string, balance: number, pin: number){
        this.phone = phone
        this.balance= balance
        this.pin= pin
    }

    getBalance(pin:number){
        if(this.pin === pin){
            return this.balance
        } 
        return `Wrong Pin`
    }
}

const bkashAccount = new Bkash("123456789", 5000, 1234)

console.log(bkashAccount.getBalance(12345))