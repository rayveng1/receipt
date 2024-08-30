const TAX_RATE = .0825

function onPriceEnter(element){
    element.value = Number(convertMoneyToNumber(element.value)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    const el = document.querySelector(".subtotal");
    const elNoTax = document.querySelector(".total");
    el.value = (Number(convertMoneyToNumber(element.value)) + Number(convertMoneyToNumber(el.value))).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    elNoTax.value = el.value;
}

function onSubTotalChange(element){
    const tax = document.querySelector(".tax");
    const total = document.querySelector(".total_taxes");
    tax.value = (Number(convertMoneyToNumber(element.value)) * TAX_RATE).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    total.value = (Number(convertMoneyToNumber(element.value)) + (Number(convertMoneyToNumber(element.value)) * TAX_RATE)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

function convertMoneyToNumber(money){
    let newNum = "";
    let noMoneySign = ((money)[0] == '$') ? (money).slice(1) : money;
    noMoneySign.split("").forEach(element => {
        newNum += (element !== ',') ? element : '';
    });
    return newNum;
}


function submitMe(){
    if (document.getElementById("tax").checked){
        document.querySelector(".invoice_calc").style.display = "none";
        document.querySelector(".invoice_calc_taxes").style.display = "flex";
    } else {
        document.querySelector(".invoice_calc").style.display = "flex";
        document.querySelector(".invoice_calc_taxes").style.display = "none";
    }
    
    // console.log(element);
    
}

window.onload = function() {
    submitMe();
  };