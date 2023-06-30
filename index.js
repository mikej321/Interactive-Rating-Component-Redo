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


// Fade out function ** Couldn't get it to work unfortunately!


/* Event listener for the submit button, which leads to the ratingEnd
page. It will contain the selectedResult in the span tag */

console.log($(upperPortion).css('height'));

submit.addEventListener('click', () => {
    // $(upperPortion).fadeOut(300, function() {
    //     $(ratingEnd).fadeIn(300);
    // });

    $(upperPortion).fadeOut(600).promise().done(function() {
        $(ratingEnd).css('display', 'flex').css('gap', '3.1rem').hide().fadeIn(300);
    });
})

// ratingEnd.style.display = 'flex';    



