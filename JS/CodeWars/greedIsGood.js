function greedIsGood(arr) {
    let score = {
        one:    0,
        six:    0,
        five:   0,
        four:   0,
        three:  0,
        two:    0,
    }    
    let finalScore = 0;

    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]){
            case 1: score.one++;    break
            case 2: score.two++;    break
            case 3: score.three++;  break
            case 4: score.four++;   break
            case 5: score.five++;   break
            case 6: score.six++;    break
        }
    }
    let currentNumber = 7;
    for(item in score){
        currentNumber--;
        switch(currentNumber){
            case 1: currentNumber = 'one';    break
            case 2: currentNumber = 'two';    break
            case 3: currentNumber = 'three';    break
            case 4: currentNumber = 'four';    break
            case 5: currentNumber = 'five';    break
            case 6: currentNumber = 'six';    break
        }
        console.log(score[currentNumber]);
        while(score[currentNumber] > 0){
            if(score[currentNumber] - 3 >= 0){
                score[currentNumber] -= 3;
                if(currentNumber === 'one') finalScore += 1000;
                if(currentNumber === 'two') finalScore += 200;
                if(currentNumber === 'three') finalScore += 300;
                if(currentNumber === 'four') finalScore += 400;
                if(currentNumber === 'five') finalScore += 500;
                if(currentNumber === 'six') finalScore += 600;
            }else if(score[currentNumber] - 1 >= 0 && currentNumber === 'one' || currentNumber === 'five') {
                score[currentNumber] -= 1;
                currentNumber === 'one' ? finalScore += 100 : finalScore += 50; 
            }else break
        }
        switch(currentNumber){
            case 'one': currentNumber = 1;    break
            case 'six': currentNumber = 6;    break
            case 'five': currentNumber = 5;    break
            case 'four': currentNumber = 4;    break
            case 'three': currentNumber = 3;    break
            case 'two': currentNumber = 2;    break
        }
    }
    return finalScore
}

greedIsGood([4, 4, 4, 3, 3]);