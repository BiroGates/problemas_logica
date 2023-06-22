





function replaceWords(dictionary: string[], sentence: string): string {
    const hashMap: Record<string, any> = {};
    for(const item of dictionary) {
        hashMap[item] = 1;
    }

    const newArr = sentence.split(' ');
    for (const word of newArr) {
        const regex = new RegExp(`${word}`, 'g');
        word.match(regex);
    }
};


const x = replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery");
console.log(x);

export default replaceWords;