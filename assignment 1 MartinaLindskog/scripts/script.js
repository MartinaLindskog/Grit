let foo=0;
let bar=0;

document.getElementById("divide").addEventListener("click", function() {
    foo= parseInt(document.getElementById("num1").value);
    bar= parseInt(document.getElementById("num2").value);

    let result= foo / bar;

    if (isNaN (result) || !isFinite(result)) {
    document.getElementById("result").textContent= "You can't divide us!";
    } else {
    document.getElementById("result").innerText= result;
    }   
});
