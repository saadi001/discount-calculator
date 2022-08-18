document.getElementById('apply-btn').addEventListener('click',function(){
    const cuponInputValue = getInputValueById('cupon-input');
    const previousPriceAmount = getElementValueById('price');
    const newPriceAmont = previousPriceAmount * (30/100);

    if(cuponInputValue === 'DOM'){
        setTextElementById('price',newPriceAmont);
    }
    else{
        alert('better luck next time');
    }
})