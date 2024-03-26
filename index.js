let productValue = Number(prompt('Enter the product value:'));
let productDiscount = Number(prompt('Enter the discount:'));
let priceafterDiscount = priceDiscount(productDiscount, productValue);

if(productValue >= 20){
    //Altera o Texto // Change the text to apply the value after the discount
    document.getElementById('result').innerHTML = priceafterDiscount;
    // Mostra o texto em verde
    result.style.color='green';
}
else{
    //Altera o Texto // Change the text to apply the value after the discount
    document.getElementById('result').innerHTML = priceafterDiscount;
    // Mostra o texto em vermelho // The text becomes red
    result.style.color='red';
}

//funcao para calcular desconto // function to calculate the discoubt
function priceDiscount (discount, total){
    let valueDiscount = total * (discount/100);
    let valueafterDiscount = total - valueDiscount;
    return valueafterDiscount;
}
