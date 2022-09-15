var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var cur = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cur);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        //loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        showOutput('loss is ' + loss + ' and percentage '+ lossPercentage + ' %');
    } else if(current > initial){
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;

        showOutput('profit is ' + profit + ' and percentage '+ profitPercentage + ' %');

    } else{
        //rest
        showOutput("No pain, No gain");
    }
}
function showOutput(message, status){
    output.innerHTML = message;
}


