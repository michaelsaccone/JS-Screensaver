
let square = document.createElement('img');

square.src = 'https://lens-storage.storage.googleapis.com/png/bad3beb67b52450c8adf60fb9737f5a4'
document.body.appendChild(square)


let H = 500;
let W = 500;

square.style.width = W + 'px';
square.style.height = H + 'px';

// square.style.backgroundColor = 'red';
square.style.position = 'absolute';

let x = 0;
let y = 0;

const speedx = 8;
const speedy = 5;

let vx = speedx;
let vy = speedy;

console.log("SCHERMO: " + window.innerHeight);

function moveSquare() {
	console.log("y: " + y);
	
	if(y + H >= window.innerHeight) {
		vy = -speedy;
		// changeColorRandom();
		// changeShape()
	}
	if(x + W >= window.innerWidth) {
		vx = -speedx;
		// changeColorRandom();
		// changeShape()
	}
	if(x <= 0) {
		vx = speedx;
		// changeColorRandom();
		// changeShape()
	}
	if(y <= 0) {
		vy = speedy;
		// changeColorRandom();
		// changeShape()
	}
	x = x + vx;
	y = y + vy;
	
	square.style.left = x + 'px';
	square.style.top = y + 'px';
}

setInterval(moveSquare, 1000 / 60)


let colors = ["pink", "purple", "orange", "green", "yellow"]
let currColor = 0;
//  cambia colore da un array predefinito di colori
function changeColor() {
	square.style.backgroundColor = colors[(++currColor % colors.length)];
}

//  cambia colore in modo casuale su tutti i colori esistenti
function changeColorRandom(){
	let r = Math.floor(Math.random()*255);
	let g = Math.floor(Math.random()*255);
	let b = Math.floor(Math.random()*255);
	square.style.backgroundColor = "rgb(" + r +"," + g +","+b+")";
}

let radius = ["10%", "20%", "50%", "0%"]
let currRadius = 0
function changeShape() {
	square.style.borderRadius = radius[(++currRadius % radius.length)];
}