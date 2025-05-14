const booking = document.getElementById('booking');
const website = document.getElementById('inlineCheckbox1');
const branding = document.getElementById('inlineCheckbox1');
const ecommerce = document.getElementById('inlineCheckbox3');
const seo = document.getElementById('inlineCheckbox4');
console.log(ecommerce);
console.log(branding);
console.log(website);
console.log(seo);
console.log(booking);


const handleOrder = ()=>{
    booking.addEventListener('submit');
    log('you jus submited');
}

handleOrder();


