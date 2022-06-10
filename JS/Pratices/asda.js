let text = 'the hashtag generator'

let regExp = new RegExp(/ [a-z]/gi);
let toGoUp = text.match(regExp);

for(item in toGoUp) {
    
}

console.log(text.match(regExp));