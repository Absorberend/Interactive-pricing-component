const slider = document.getElementById("myRange");
const checkbox = document.getElementById("myCheckbox");
const output = document.getElementById("value");
const discount = document.getElementById("discount");
const Query = window.matchMedia('(max-width: 649px)');
const views = document.getElementById('slider__views');

let outputValue = 16;
let backupValue = 12;
let toggle = false;

//Add proper discount text
function screenTest(e) {
  if (e.matches) {
    /* the viewport is 650 pixels wide or less */
    discount.innerHTML = '-25%';
  } else {
    /* the viewport is more than 650 pixels wide */
    discount.innerHTML = '25% discount';
  }
}

//Onload screentest
window.onload = function () {
    screenTest(Query);
    output.innerHTML = '$' + outputValue + '.00';
}

//screentest after resize
Query.addEventListener("change", screenTest);


//Instantly view price change on screen when checkbox is checked
checkbox.addEventListener("input", function() {
    if (toggle === false) {
    output.innerHTML = '$' + backupValue + '.00';
    toggle = true;
    } else {
    output.innerHTML = '$' + outputValue + '.00';   
    toggle = false;
    }
});

slider.addEventListener("input", function() {
    let track = slider.value;

    //Change slider track color based on slider value.
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${track}%, hsl(224, 65%, 95%)${track}%)`;

    //View prices based on slider value and if checkbox is checked.
    if (!checkbox.checked) {
        if (track === '0') {
            outputValue = 8;
            views.innerHTML = '10k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 6;
            toggle = false;
    
        } else if (track === '25') {
            outputValue = 12;
            views.innerHTML = '50k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 9;
            toggle = false;
    
        } else if (track === '50') {
            outputValue = 16;
            views.innerHTML = '100k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 12;
            toggle = false;
    
        } else if (track === '75') {
            outputValue = 24;
            views.innerHTML = '500k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 18;
            toggle = false;
    
        } else if (track === '100') {
            outputValue = 36;
            views.innerHTML = '1M';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 27;
            toggle = false;
        }
    } else {
        if (track === '0') {
            outputValue = 6;
            views.innerHTML = '10k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 8;
            toggle = false;
            
        } else if (track === '25') {
            outputValue = 9;
            views.innerHTML = '50k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 12;
            toggle = false;
            
        } else if (track === '50') {
            outputValue = 12;
            views.innerHTML = '100k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 16;
            toggle = false;

        } else if (track === '75') {
            outputValue = 18;
            views.innerHTML = '500k';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 24;
            toggle = false;

        } else if (track === '100') {
            outputValue = 27;
            views.innerHTML = '1M';
            output.innerHTML = '$' + outputValue + '.00';
            backupValue = 36;
            toggle = false;
        }
    }
});



   