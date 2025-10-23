let cat = { alive: true, 
            name: "Gustav"};
    document.getElementById("catName").addEventListener("click", function() {
    let catStatus = deadOrAlive(cat);
    alert("The cat called "+cat.name+" is " + catStatus +".");
});