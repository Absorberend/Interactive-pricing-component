const slider = document.getElementById("myRange");
const checkbox = document.getElementById("myCheckbox");
const output = document.getElementById("value");
const discount = document.getElementById("discount");
const Query = window.matchMedia('(max-width: 649px)');

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

//Onload screentest
window.onload = screenTest(Query);

//screentest after resize
Query.addEventListener("change", screenTest);



//Check to make sure that every number ends on 2 decimals (and not 3+).
const decimalCheck = function (value) {
    if (value.toString().includes(".")) {
        if (value >= 10 && value.toString().length === 4) {
            return outputValue = `$${slider.value * 0.75}0`;
        } else if (value <= 10 && value.toString().length === 3) {
            return outputValue = `$${slider.value * 0.75}0`;
        } else {
            return outputValue = `$${slider.value * 0.75}`;
        }
    } else {
        return outputValue = `$${slider.value * 0.75}.00`;
    }
}

//Calculate the discounted  price
const checkboxCheck = function () {
    if (checkbox.checked === false) {
        return output.innerHTML = `$${slider.value}.00`;
    } else {
        const sliderOutput = slider.value * 0.75;
        return output.innerHTML = decimalCheck(sliderOutput);   
    } 
}

//When checkbox is checked show the discounted price
checkbox.oninput = function () {
    checkboxCheck();
    }

//When slider is moved show the new price based on slider value
slider.oninput = function () {
    checkboxCheck();   

//Change the slider track based on the slider value
slider.addEventListener("input", function() {
    //Slider max value is 32. 100 / 32 = 3.125. So a slider value of 16 (50% of max slider value) * 3,125 is 50% gradiant %.
    const gradientTrack = slider.value * 3.125;
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${gradientTrack}%, hsl(224, 65%, 95%)${gradientTrack}%)`;
    });
}

