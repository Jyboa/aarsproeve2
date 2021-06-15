//Konvertere sekunder til minutter og timer
function konvertSM(value){
    const sek = parseInt(value, 10); //if value string , then go number
    let timer = Math.floor(sek / 3600) //timer
    let min = Math.floor((sek - (timer * 3600)) / 60); //minutter
    let sekunder = sek - (timer * 3600) - (min * 60); //sekunder
    //her sættes 0 foran hvis value < 10
    if (timer < 10) {timer = "0"+timer;}
    if (min < 10) {min = "0"+min;}
    if (sekunder < 10) {sekunder = "0"+sekunder}
    return timer+ '/' +min+'/' +sekunder;
}

let tal = 2
console.log(tal)