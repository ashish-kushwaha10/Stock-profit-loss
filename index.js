let buyingPrice = document.querySelector('#buying-price')
let quantity = document.querySelector('#quantity')
let sellingPrice = document.querySelector('#selling-price')
let calculateBtn = document.querySelector('#calculate-btn')
let outputDiv = document.querySelector('#output-div')
calculateBtn.addEventListener('click', profitOrLosstHandler)

function profitOrLosstHandler() {
    let ip = Number(buyingPrice.value);
    let qty = Number(quantity.value);
    let curr = Number(sellingPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(buying, quantity, selling) {
    if (!buying || !quantity || !selling) {
        showOutput(`🧐🧐 please enter the values in all above fields`);
    }
    else {
        if (buying > selling) {
            let loss = (buying - selling) * quantity;
            let lossPercentage = (loss / buying) * 100;

            showOutput(
                `☹️☹️ the loss is ${loss} and the percent is ${lossPercentage}%`
            );
        } else if (selling > buying) {
            let profit = (selling - buying) * quantity;
            let profitPercentage = (profit / buying) * 100;

            showOutput(
                `🤩🤩 the profit is ${profit} and the percent is ${profitPercentage}%`
            );
        } else {
            showOutput(`No Profit, No loss`);
        }
    }
}
function showOutput(message) {
    outputDiv.innerHTML = `<h2>${message}</h2>`;
}