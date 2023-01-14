function stripComments(string, markers) {
    markers.map((item) => {
        let regex = new RegExp(`${item}((?!#).)*$`, 'igm');
        string = string.replaceAll(regex, '');
    });
    console.log(string);
    return string.trim();
}

stripComments('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']);