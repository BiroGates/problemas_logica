let text = 'Frogs caved among a frog with a frog'
let regular = /( frog)/;
let reg = new RegExp(regular, 'gi');
console.log(text.match(reg));