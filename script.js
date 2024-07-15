const TAX_RATE = .0825

function onPriceEnter(element){
    const el = document.querySelector(".subtotal");
    let elValue = ((el.value)[0] == '$') ? Number((el.value).slice(1)) : Number(el.value);
    el.value = (Number(elValue) + Number(element.value)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function onSubTotalChange(element){
    const el = document.querySelector(".tax");
    const total = document.querySelector(".total");
    let number = ((element.value)[0] == '$') ? Number((element.value).slice(1)) : Number(element.value);
    el.value = (number * TAX_RATE).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    total.value = (number + (number * TAX_RATE)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}