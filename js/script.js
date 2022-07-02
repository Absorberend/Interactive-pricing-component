const slider = document.getElementById("myRange");
const checkbox = document.getElementById("myCheckbox");
const output = document.getElementById("value");
const discount = document.getElementById("discount");
const Query = window.matchMedia('(max-width: 649px)');
const views = document.getElementById('slider__views');

/* Function to define the proper discount text */
function screenTest(e) {
  if (e.matches) {
    /* the viewport is 650 pixels wide or less */
    discount.innerHTML = '-25%';
  } else {
    /* the viewport is more than 650 pixels wide */
    discount.innerHTML = '25% discount';
  }
}

/* Change discount text after window resize */
Query.addEventListener("change", screenTest);

/* Define price and pageviews for each object */
const pricing = [
    {
        price: 8,
        pageviews: '10K'
    },
    {
        price: 12,
        pageviews: '50K'
    },
    {
        price: 16,
        pageviews: '100K'
    },
    {
        price: 24,
        pageviews: '500K'
    },
    {
        price: 36,
        pageviews: '1M'
    }
];

/* Connect every pricing object with the slider */
const setPrice = {
    0: Object.values(pricing[0]),
    25: Object.values(pricing[1]),
    50: Object.values(pricing[2]),
    75: Object.values(pricing[3]),
    100: Object.values(pricing[4])
};


/* Change slider track color based on slider value. */
slider.addEventListener("input", function() {
    /* track will be used as an argument for the outPrice function to set the price
    in the index.html I have set the range from 0-100 with steps = 25. Meaning 5 steps total. */
    let track = Number.parseInt(slider.value);

    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${track}%, hsl(224, 65%, 95%)${track}%)`;

    /* Call this function to show the correct prices and pageviews */
    outputPrice(track);
});

/* Show the correct prices and pageviews when moving the slider */
outputPrice = function (track) {
    
    /* e.g. if argument "track" (slider.value) === 50 it will show the values of the 3rd pricing object (see pricing obj above) with price: 16 and pageviews: 100k */
    if (!checkbox.checked) {
        output.innerHTML = `$${setPrice[track][0].toFixed(2)}`, views.innerHTML = setPrice[track][1];
    } else {
        output.innerHTML = `$${(setPrice[track][0] * 0.75).toFixed(2)}`, views.innerHTML = setPrice[track][1];    
    }
}

/* Show the correct price when you toggle the checkbox */
checkbox.addEventListener("input", function () {
    outputPrice(slider.value);
});

/* Change discount text and set the default price+pageviews onload */
window.onload = function () {
    screenTest(Query);
    outputPrice(slider.value);
}