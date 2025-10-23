//3a
document.getElementById("getRid").addEventListener("click", function() {
    let character = document.getElementById("bokstav").value;
    let text = document.getElementById("text").value;
    let result= charRemove(character, text);
    document.getElementById("result").innerText = result;
});

