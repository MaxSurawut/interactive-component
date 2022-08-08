const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll('.form__radio-input');
const ratingCard = document.querySelector('.card-rate');

let ratingvalue;

radioInputs.forEach((input) => {
    input.addEventListener("change", (e) =>{
        ratingvalue = e.target.value;
    })
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!ratingvalue) return;
    renderThankyouContent(ratingCard, ratingvalue);
});

function renderThankyouContent(container, ratingvalue){
    container.innerHTML = `<div class="thank-card">
    <img src="images/illustration-thank-you.svg" alt="">
    <h3>You selected ${ratingvalue} out of 5
    </h3>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to<br>get in touch!</p>
</div>`

};