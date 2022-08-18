document.getElementById('sub-btn').addEventListener('click',function(){

const priceElement=document.getElementById('price');
 const priceElementString =priceElement.value ;
 const price=parseFloat(priceElementString);

 priceElement.value = '';




const discountElemnt=document.getElementById('discount');
const discountString=discountElemnt .value;

const discount=parseFloat(discountString);

discountElemnt .value ='';




const coponElement=document.getElementById('coupon-code');
const shakib= coponElement.value;


if (shakib !=='dom' )
{
    return;
}


const Masum=document.getElementById('last-price');
const totalDiscountPrice=price -((price/100)*discount);

Masum.innerText=totalDiscountPrice;

})