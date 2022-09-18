function humanReadable(seconds) {   
    let minutos = 00;
    let horas = 00;
    while(seconds > 59){
        if(seconds >= 59){
            minutos += 01;
            seconds -= 60;
            if(minutos > 59){
            horas += 01;
            minutos = 00;
            }}
    }
    if(minutos < 10) minutos = '0' + minutos;
    if(horas < 10) horas = '0' + horas;
    if(seconds < 10) seconds = '0' + seconds;
    
    return `${horas}:${minutos}:${seconds}`;
}


console.log(humanReadable(3600));