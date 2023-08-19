
document.querySelector('#coupon1').disabled = true;
document.querySelector('#payment1').disabled = true;
document.querySelector('#coupon2').disabled = true;
document.querySelector('#payment2').disabled = true;

document.getElementById('couponcode1').addEventListener('keyup',function(){
    
    const couponCode=document.getElementById('couponcode1').value ;
    console.log(couponCode);
    if (couponCode==="SELL200"){
     document.querySelector('#coupon1').disabled = false;
    }
})

document.getElementById('coupon1').addEventListener('click',function(){
    setTextFieldValueFromId('discount',200);
    const oldPrice=getTextElementValueFromId('total-price')
    const discount=getTextElementValueFromId('discount');
    const grandTotal=parseFloat(oldPrice)-parseFloat(discount);
    const grandTotalNew=grandTotal.toFixed(2);
    setTextFieldValueFromId('grand-total',grandTotalNew);
})


function cardClicked(element){
    const itemName=document.getElementById(element);
    const name=itemName.children[1].children[1].innerHTML;
    console.log(name);
    addList(name);
    updatePrice(element)
}


function getTextElementValueFromId(element){
    const textField=document.getElementById(element);
    const textFieldValue=textField.innerText;
    const value=parseFloat(textFieldValue).toFixed(2);
    return value;
}


function setTextFieldValueFromId(element,value){
    const name=document.getElementById(element);
    name.innerHTML=value;
}


function cardItemPrice(element){
    const itemName=document.getElementById(element);
    const price=itemName.children[1].children[2].children[0].children[0].innerHTML;
    const priceValue=parseFloat(price)//.toPrecision(2);
    const value=priceValue.toFixed(2);
    return value;
}


function updatePrice(element){
    const oldPrice=getTextElementValueFromId('total-price')
    const discount=getTextElementValueFromId('discount');
    
    const cardPrice=cardItemPrice(element);
    const newTotal=parseFloat(oldPrice)+parseFloat(cardPrice);
    const grandTotal=parseFloat(newTotal)-parseFloat(discount);
    const grandTotalNew=grandTotal.toFixed(2);
    if (grandTotal>0){
        document.querySelector('#payment1').disabled = false;
    }
    setTextFieldValueFromId('total-price',newTotal);
    setTextFieldValueFromId('grand-total',grandTotalNew);

}


function addList(itemName){
    const myList=document.querySelector('.list');
    const newItem=document.createElement('li');
    newItem.textContent=itemName;
    myList.appendChild(newItem);
}


