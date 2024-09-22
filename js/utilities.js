
// function for input donation ammount
function donateAmount(id){
    const donate = parseFloat(document.getElementById(id).value);
    return donate;
}


// function for text field donation ammount
function textValuById(id){
    const balance = parseFloat(document.getElementById(id).innerText);
    return balance;
}


