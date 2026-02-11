var programingLanguages = ['java script ', 'PHP', 'python']
console.log(programingLanguages);

console.log(programingLanguages[0]);


programingLanguages.push('java');/*Shton element në fund të array-t*/
console.log(programingLanguages);

programingLanguages.pop();/*Heq elementin e fundit*/
console.log(programingLanguages);

programingLanguages.unshift("c#");/*Shton element në fillim*/
console.log(programingLanguages);

programingLanguages.shift();/*Heq elementin e parë*/
console.log(programingLanguages);

programingLanguages.splice(0,2, 'Ruby');
console.log(programingLanguages);


//--------------------------------------------
console.log(Math.random()*5);
console.log(Math.floor(Math.random())*5);
//--------------------------------------------

var students = ['Olti','Larti'];

var [s1,s2] = students;

console.log(s1);
console.log(s2);

var places = ['london', 'paris','new york', 'berlin'];
var[firstplaces, ,secondsplace]=places;
console.log(secondsplace);

var numbers = [1,2,3,4,5,6,7,8,9,10];

var [first,second,...o0thernumbers] = numbers;
console.log(first);
console.log(second);
console.log(o0thernumbers.toString())




