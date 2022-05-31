// Big O (n * n);
function firstNonRepeating(str) {
    let len = str.length;
    let repeated = false;


    // Taking the first element from the string;
    for(let i = 0; i < len; i++) {
        // Looping throught all element in the string;
        for(let j = 0; j < len; j++) {
            // If repeats gets out of the loop;
            if(str[i].toUpperCase() == str[j].toUpperCase() && j != i) {
                repeated = true;
                break;
            // If not we set the flag 'Repeated' to false;
            }else{
                repeated = false;
            }            
        }
        
        // If it doesn't repeat we return the string at i;
        if(repeated == false){
            // Veryfing if the character is in uppercase
            if (str[i] == str[i].toUpperCase()) return str[i].toUpperCase();
            // If not return it in lowercase;
            else return str[i];
        } 
    }
    // Returning '' if we don't reach any of the results above;
    return '';
}

let x = firstNonRepeating('streSS');
console.log(x);