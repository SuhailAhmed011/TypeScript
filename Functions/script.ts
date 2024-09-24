// Function

function addNumbers(num1: number, num2: number): number{
return num1 + num2
}

let add = addNumbers(12, 9)
console.log(add)

// Function types

function person(name:string, age:number, greet: (arg: string) => void){
greet("what's up! suhail")
}
person('suhail', 22, (arg:string)=>{
    console.log(arg)
})


// Optional  -> if we ? to that parameter its optional now, if we give value to that or not its does'nt care
// default parameters -> we give value to it in parameter also

function Login(name:string, mail = 'hey@gmail.com', gender?:string){
console.log(name, mail, gender)
}
Login('suhail', 'suhail@gmail', 'male')
Login('ahmed','ahmed@gmail')


// Rest Operater

function fruits(...arr: string[]){
console.log(arr)
}
fruits('banana', 'apple', 'mango', 'orange', 'cherry')