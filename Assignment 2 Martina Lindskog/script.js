//2a
let resultA ="";
for (let i = 1; i <= 10; i++) {
    if (i===5) 
        resultA+="Q";
    else if(i%2 === 0) 
        resultA+="X";
    else 
        resultA+="O"; 
}
console.log(resultA);


//2b
let resultB ="";
let varv= 1;
while(varv <=20){
    resultB+="O"
    for (let j = 1; j <= Math.random()*5+1; j++) 
      resultB+=" "  
    
    varv++;
}
console.log(resultB);

//2c
let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];
for (let m = 0; m < cityNames.length; m++) {
    let bokstav1 = cityNames[m].charAt(0).toUpperCase();
    cityNames[m] = cityNames[m].replace(cityNames[m].charAt(0), bokstav1);
}
for (let k = 0; k < cityNames.length; k++) {
    for (let l = 0; l < cityNames[k].length; l++) {
       console.log(cityNames[k][l]);
    }
}