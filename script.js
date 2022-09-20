var initialPrice = document.querySelector("#initial");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
var submit = document.querySelector("#submit");
var output = document.querySelector("#output");

submit.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(Quantity.value);
    var cur = Number(currentPrice.value);

    calculate(ip, qty, cur);
}

function calculate(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPer = (loss/initial) * 100;

        outputShow('loss is ' + loss + ' and percentage '+ lossPer + ' %');
    } else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPer = (profit/initial) * 100;

        outputShow('profit is ' + profit + ' and percentage '+ profitPer + ' %');

    } else{
        outputShow("No pain, No gain");
    }
}
function outputShow(message){
    output.innerHTML = message;
}


