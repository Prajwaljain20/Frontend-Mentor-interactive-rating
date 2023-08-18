const rates = document.querySelectorAll('.rate');
const rating = document.querySelector('span');
const submit = document.querySelector('.submit');
const cards = document.querySelectorAll('.card');
let value;
document.addEventListener('click', (e) => {
    rates.forEach(rate => rate.classList.remove('clicked'));
    value = 0;
    if (e.target.classList.contains('rate')) {
        rates[+e.target.textContent-1].classList.add('clicked');
        value = +e.target.textContent;
    }
});
submit.addEventListener('click', () => {
    if (value) {
        rating.textContent = value;
        cards[0].style.display = 'none';
        cards[1].style.display = 'block';
    }
});
