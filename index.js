// selectors
const buttons = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const ratingStart = document.querySelector('.rating-start');
const ratingEnd = document.querySelector('.rating-end');
const header = document.querySelector('header');
const upperPortion = document.querySelectorAll('.upper');
let selectedResult = document.querySelector('.selected-result');

/* Although not necessary, this function makes the text content of 
the selected button into a number for further evaluation if necessary */

function changeToNum(selection) {
    return Number(selection.textContent);
}

/* Event listener for the result that the user clicks, it will take
the value from the button (textContent) and afterwards, activate the
changeToNum function */

buttons.forEach((button) => {
    button.addEventListener('click', function() {
         selectedResult.textContent = button.textContent;
         changeToNum(selectedResult);
    }) 
})

// Fade in function

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || 'flex';
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += .05) >= 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

// Fade out function ** Couldn't get it to work unfortunately!

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .01) < 0) {
            el.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

/* Event listener for the submit button, which leads to the ratingEnd
page. It will contain the selectedResult in the span tag */

submit.addEventListener('click', () => {
    upperPortion.forEach(portion => portion.style.display = 'none');
    fadeIn(ratingEnd, 'flex');

})

// ratingEnd.style.display = 'flex';    



