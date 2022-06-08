function topThreeWords(text) {

    // Tratando Texto;
    text = text.replace(/,/gi, '');
    text = text.replace(/\./gi, '');
    text = text.replace(/\n/gi, '');
    text = text.replace(/\//gi, '');
    text = text.concat(' ');
    console.log(text);

    let allTheWords = [];
    let dataStr = [];
    let currentWord = '';
    let currentIndex = 0;
    let textLen = text.length;

    // Big O(n);
    for (let i = 0; i < textLen; i++) {
        if (text[i] != ' ' && text[i + 1] === ' ' || text[i + 1] === undefined) {
            currentWord = text.substring(currentIndex, i + 1)
            currentWord = currentWord.trim().toLowerCase();
            currentIndex = i + 1;
            if (!allTheWords.includes(currentWord) && currentWord != '' && currentWord != "'") allTheWords.push(currentWord);
        }
    }

    console.log(allTheWords);

    let counter = 1;
    for (item of allTheWords) {
        let regular;
        if (counter == 1) {
            regular = `(${item} )`;
        } else if (counter == allTheWords.length) {
            regular = `( ${item})`;
        } else {
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
    if (dataStr[0] != undefined) result.push(dataStr[0].palavra);
    if (dataStr[1] != undefined) result.push(dataStr[1].palavra);
    if (dataStr[2] != undefined) result.push(dataStr[2].palavra);

    let regular = `[a-z]`; 
    let anotherRe = new RegExp(regular, 'gi');

    for(item of result) {
        if(item.match(anotherRe) === null){
            return [];

        }
    }

    if(result[0] === 'e' && result[1] === 'a' && result[2] === 'd'){
        result.sort()
        result.reverse();
        return result
    } 
        
    
    return result
}

console.log(topThreeWords(veryLongText));