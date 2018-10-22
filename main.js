// create an animation event that pulses letters
var contacts = document.querySelectorAll(".contact");
console.log(contacts);
	for(var i=0; i<contacts.length; i++){
		contacts[i].addEventListener("mouseover",listener, false);
	 	contacts[i].addEventListener("mouseleave",listener2, false);
	}
	 

function listener(event){
	event.target.classList.add('popup')
}

function listener2(event){
	event.target.classList.remove('popup')
}
	

//Get user input from search form
var button = document.getElementById("form1");
var input = document.getElementById("search");

button.addEventListener("click", function() {
	//console.log("click is working");
})
