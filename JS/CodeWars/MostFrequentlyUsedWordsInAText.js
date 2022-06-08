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
    text = text.replace(/\//gi, '');
    text = text.trim();

    let allTheWords = [];
    let dataStr = [];
    let currentWord = '';
    let currentIndex = 0;
    let textLen = text.length;
    
    // Big O(n);
    for(let i = 0; i < textLen; i++) {
        if(text[i + 1] === ' ') {
            currentWord = text.substring(currentIndex, i + 1)
            currentWord = currentWord.trim().toLowerCase();
            currentIndex = i + 1;
            if(!allTheWords.includes(currentWord)) allTheWords.push(currentWord);
        }
    }
    
    console.log(allTheWords);

    let counter = 1;
    for(item of allTheWords) {
        let regular;
        if(counter == 1){
            regular = `(${item} )`;
        }else if (counter == allTheWords.length) {
            regular = `( ${item})`;
        }else{
            regular = `( ${item} )`;
        }
        let re = new RegExp(regular, "gi");  
        dataStr.push({
            palavra: text.match(re)[0].trim().toLowerCase(),
            qtd: text.match(re).length
        });
        counter++;
    }
    
    dataStr.sort((a, b) => b.qtd - a.qtd);
    
    let result = [];
    if(dataStr[0] != undefined) result.push(dataStr[0].palavra);
    if(dataStr[1] != undefined) result.push(dataStr[1].palavra);
    if(dataStr[2] != undefined) result.push(dataStr[2].palavra);
    
    console.log(result);
}

topThreeWords("  , e   .. ");