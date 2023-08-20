



document.getElementById('full-body').addEventListener('click',function(){
    const coupon = document.getElementById('coupon1');
    const payment = document.getElementById('payment1');
    const couponCode = document.getElementById('couponcode1').value;
         const oldPrice = getTextElementValueFromId('total-price');
         if (oldPrice >= 200) {
                    document.querySelector('#coupon1').disabled = false;
                    coupon.style.backgroundColor = '#E527B2';
                 }
                 if (oldPrice > 0) {
                    document.querySelector('#payment1').disabled = false;
                    payment.style.backgroundColor = '#E527B2';
                 }
})




document.getElementById('coupon1').addEventListener('click', function () {
    const couponText=document.getElementById('couponcode1').value;
    let couponApplied="No";
    console.log(couponText);
    if(couponText=='SELL200' ){
        const oldPrice = getTextElementValueFromId('total-price');
        const discount=(oldPrice*0.2).toFixed(2);
        const gTotal=(oldPrice-discount).toFixed(2);
        setTextFieldValueFromId('discount',discount);
        setTextFieldValueFromId('grand-total', gTotal);        
    }
})


function resetAll() {
    setTextFieldValueFromId('total-price', 0.00);
    setTextFieldValueFromId('grand-total', 0.00);
    setTextFieldValueFromId('discount', 0.00);
    setTextFieldValueFromId('list','');
    document.querySelector('#payment1').disabled = true;
document.querySelector('#coupon1').disabled = true;
}


function cardClicked(element) {
    const itemName = document.getElementById(element);
    const name = itemName.children[1].children[1].innerHTML;
    console.log(name);
    addList(name);
    updatePrice(element)
}


function getTextElementValueFromId(element) {
    const textField = document.getElementById(element);
    const textFieldValue = textField.innerText;
    const value = parseFloat(textFieldValue).toFixed(2);
    return value;
}


function setTextFieldValueFromId(element, value) {
    const name = document.getElementById(element);
    name.innerHTML = value;
}


function cardItemPrice(element) {
    const itemName = document.getElementById(element);
    const price = itemName.children[1].children[2].children[0].children[0].innerHTML;
    const priceValue = parseFloat(price)//.toPrecision(2);
    const value = priceValue.toFixed(2);
    return value;
}


function updatePrice(element) {
    const oldPrice = getTextElementValueFromId('total-price')
    const discount = getTextElementValueFromId('discount');

    const cardPrice = cardItemPrice(element);
    const newTotal = parseFloat(oldPrice) + parseFloat(cardPrice);
    const newTotalNew = newTotal.toFixed(2);
    const grandTotal = parseFloat(newTotal) - parseFloat(discount);
    const grandTotalNew = grandTotal.toFixed(2);
    if (grandTotal > 0) {
        document.querySelector('#payment1').disabled = false;
    }
    setTextFieldValueFromId('total-price', newTotalNew);
    setTextFieldValueFromId('grand-total', grandTotalNew);

}


function addList(itemName) {
    const myList = document.querySelector('.list');
    const newItem = document.createElement('li');
    newItem.textContent = itemName;
    myList.appendChild(newItem);
}


