const student1 = {name: "aryan", id: 198, trait: "narcissist"}
console.log(student1)

let student2 = new Object()
student2.name = "priyanka"
student2.id = 226
student2.trait = "ambivert"
console.log(student2);

student2.trait = "narcissist"
console.log(student2);

console.log(student2.hasOwnProperty("trait"));
console.log("color" in student1);

delete student2.trait;
console.log(student2);

student2.expertise = "studies"
console.log(student2);

let obj1 = {surname: "padhi"};
let obj2 = {...student2, ...obj1} 
console.log(obj2);
let obj3 = {...student1, ...obj1}
console.log(obj3);

for (let key in obj3){
    console.log(key+ ": " +obj3[key]);
}

console.log(Object.keys(obj3).length);

let stu1= {
    name: "chhuku", 
    surname: "padhi",

    getfunc: function(){
        return (`the full name of the person is: ${stu1.name} ${stu1.surname}`)
    },
    phno: {
       mobile : 12345,
       landline: 6789
    }
}

console.log(stu1.phno);
console.log(stu1.getfunc());

function person(fname, lname){
    this.fname = fname;
    this.lname = lname;
}
let p1 = new person('aryan', 'vanupratap');
let p2 = new person('priyanka', 'mallik');

console.log(`${p1.fname}`);

const player = {
    printintro: function(){
        console.log(`my name is ${this.name}, and am i playing? ${this.isplaying} `);
    }
}
const me = Object.create(player);

me.name = 'avp';
me.isplaying = true;
me.printintro();

class peers{
    constructor(name, id, trait){
        this.name = name;
        this.id = id;
        this.trait = trait;
    }
    getdetails(){
        return(`the name of this person is ${this.name}, their id is ${this.id}, their characteristic trait is ${this.trait}.`);
    }

}
let pe1 = new peers('avp', 1, 'narcissist');
console.log(pe1.getdetails());
