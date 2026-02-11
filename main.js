// function showMessage(){
//     alert("This message is inside the fuction");
// }

// showMessage();

function sum(number1,number2){
    return number1 + number2;
}

console.log(sum(7,24));


function toCelsius(f){
    return (5/9) * (f-32);
}

console.log("54 fahrenheit is equal to " + toCelsius(54));

var result= toCelsius(54);

console.log("54 fahrenheit is equal to " + result);

function toSeconds(m){
    return (m*60);
}

console.log("5 minutes are " + toSeconds(5) + " Seconds");

function dsFunction(){
    var localVAr = "Digital School";
    alert(localVAr);
}

dsFunction();
// alert(localVAr);

var car = {
    name:"Mercedes",
    color:"Red",
    year:2020,
    km:0,
    startEngine: function(){
        alert("Vroooom");
    },
    get getKm(){
        return this.km;
    },
    set setkm(kilometres){
        this.km= kilometres;
    }
}

alert(car.name);
alert(car['color']);
car.startEngine();

console.log(car.getKm);

car.setkm = 100;

console.log(car.getKm);

var Computer= new Object();

Computer.name="Lenovo";
Computer.CPU="Intel Core I7";
Computer.RAM ="16GB"
Computer.GPU = "GeForce GT730 2GB Dual Dp HP";
Computer.type = function(){
    return this.name + "," +this.CPU + "," + this.RAM + "," + this.GPU;
}

console.log(Computer.type());
delete Computer.GPU;
console.log(Computer.type());

/*konstruktor*/
function Computer(name,CPU,RAM,GPU){
    this.name = name;
    this.CPU=CPU;
    this.RAM=RAM;                            
    this.GPU=GPU;
}

var Computer1 = new Computer("Macbook", "M1","166b", "Integrated");

var Computer2 = new Computer("Macbook", "M1","166b", "Integrated");

var Computer3 = new Computer("Macbook", "M1","166b", "Integrated");

console.log(Computer1,Computer2,Computer3);


function sum(number1,number2){
    return number1 - number2;
}
console.log(sum(7,24));

var person={
    firstName: "Arton",
    lastName:"Zeqiraj",
    age:45,

    getFullName:function(){
        return this.firstName+ ""+this.lastName;

    }

};

console.log(person.getFullName());

