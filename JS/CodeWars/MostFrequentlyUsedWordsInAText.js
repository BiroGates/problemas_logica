let veryLongText = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

function topThreeWords(text) {
    
    // Tratando Texto;
    text = text.replace(/,/gi, '');
    text = text.replace(/\./gi, '');
    text = text.replace(/\n/gi, '');

    console.log(text);

    let allTheWords = {};
    let currentWord = '';
    let currentIndex = 0;
    let textLen = text.length;
    
    // Big O(n);
    for(let i = 0; i < textLen; i++) {
        if(text[i + 1] === ' ') {
            currentWord = text.substring(currentIndex, i + 1)
            currentWord = currentWord.trim().toLowerCase();
            console.log(currentWord);
            currentIndex = i + 1;
            allTheWords[currentWord] = 0;
        }
    }

    let counter = 1;
    let allTheWordsSize = Object.keys(allTheWords).length;
    // Big O(n*n);
    for(item in allTheWords) {
        let regular;
        if(counter == 1){
            regular = `(${item} )`;
        }else if (counter == allTheWordsSize) {
            regular = `( ${item})`;
        }else{
            regular = `( ${item} )`;
        }
        console.log(regular);
        let re = new RegExp(regular, "gi");  
        allTheWords[item] = text.match(re).length;
        counter++;
    }
    console.log(allTheWords);
    console.log(allTheWordsSize);
    
    let min = 0;
    let mid = 0
    let max = 0;

    let listedNumbers = [];

    let primero;
    let segundo;
    let terceiro;
    
    for(item in allTheWords) {
        listedNumbers.push(allTheWords[item]); 
    }
    
    let result = [max, mid, min];
    console.log(result);
    console.log(listedNumbers);
}

topThreeWords('a a c b b');