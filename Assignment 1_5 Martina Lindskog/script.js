function enterBtn() {

var vip = document.getElementById("vip").checked;
var age= document.getElementById("age").value;

    if (vip) {
        document.getElementById("result").innerHTML = "Welcome my best VIP customer :)";
    } else {
        if (age>=18) {
            document.getElementById("result").innerHTML = "Access granted";
        } else {
            document.getElementById("result").innerHTML = "Access denied";
        }
    
    }
}