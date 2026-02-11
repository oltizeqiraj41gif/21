var button1 = document.getElementById('btn1');

// button1.onclick = function(){
// 	alert('hello');
// }

var firstButton = document.querySelector('button');

firstButton.onclick = function(){
	alert('Erela');
}


button1.addEventListener('click',function(){
	alert('hello from shkolla digjitale')
});

button1.addEventListener('click',function(){
	console.log("hello hello")
});


var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');

button2.onmouseover = function(){
	alert('hello');
}

button3.onmouseleave = function(){
	alert('hello');
}

button4.onmousewheel = function(){
	alert('hello');
}