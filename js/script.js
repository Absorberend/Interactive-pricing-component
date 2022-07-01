const slider = document.getElementById("myRange");
const checkbox = document.getElementById("myCheckbox");
const output = document.getElementById("value");
const discount = document.getElementById("discount");
const Query = window.matchMedia('(max-width: 649px)');
const views = document.getElementById('slider__views');

let outputValue = 0;


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

//Pageviews editor based on slider value
const viewCheck = function () {
    if (slider.value === '0') {
        views.innerHTML = '0k';
    } else if (slider.value === '4') {
        views.innerHTML = '5k';
    } else if (slider.value === '8') {
        views.innerHTML = '10k';
    } else if (slider.value === '12') {
        views.innerHTML = '50k';
    } else if (slider.value === '16') {
        views.innerHTML = '100k';
    } else if (slider.value === '20') {
        views.innerHTML = '250k';
    } else if (slider.value === '24') {
        views.innerHTML = '500k';
    } else if (slider.value === '28') {
        views.innerHTML = '750k';
    } else if (slider.value === '32') {
        views.innerHTML = '1M';
    }
}

//screentest after resize
Query.addEventListener("change", screenTest);


//Calculate the discounted  price
const checkboxCheck = function () {
    if (checkbox.checked === false) {
        return output.innerHTML = `$${slider.value}.00`;
    } else {
        const sliderOutput = slider.value * 0.75;
        return output.innerHTML = `$${sliderOutput}.00`;   
    } 
}

//When checkbox is checked show the discounted price
checkbox.oninput = function () {
    checkboxCheck();
    }

//When slider is moved show the new price based on slider value
slider.oninput = function () {
    checkboxCheck();   
}

//Change the slider track based on the slider value
slider.addEventListener("input", function() {
    //Slider max value is 32. 100 / 32 = 3.125. So a slider value of 16 (50% of max slider value) * 3,125 is 50% gradiant %.
    viewCheck();
    const gradientTrack = slider.value * 3.125;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${gradientTrack}%, hsl(224, 65%, 95%)${gradientTrack}%)`;
});

//Onload screentest
window.onload = function () {
    screenTest(Query);
    output.innerHTML = `$${slider.value}.00`;
}
