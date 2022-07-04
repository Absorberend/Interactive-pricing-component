const slider = document.getElementById("myRange");
const checkbox = document.getElementById("myCheckbox");
const output = document.getElementById("value");
const discount = document.getElementById("discount");
const query = window.matchMedia('(max-width: 649px)');
const views = document.getElementById('slider__views');

let track = Number.parseInt(slider.value);

/* Function to define the proper discount text */
screenTest = e => {
  if (e.matches) {
    /* the viewport is 650 pixels wide or less */
    discount.innerHTML = '-25%';
  } else {
    /* the viewport is more than 650 pixels wide */
    discount.innerHTML = '25% discount';
  }
}

/* Change discount text after window resize */
query.addEventListener("change", screenTest);

/* Define price, pageviews and trackpercentage(slider value) for each object */
const pricing = [
    {
        price: 8,
        pageviews: '10K',
        trackPercentage: 0
    },
    {
        price: 12,
        pageviews: '50K',
        trackPercentage: 25
    },
    {
        price: 16,
        pageviews: '100K',
        trackPercentage: 50
    },
    {
        price: 24,
        pageviews: '500K',
        trackPercentage: 75
    },
    {
        price: 36,
        pageviews: '1M',
        trackPercentage: 100
    }
];

slider.addEventListener("input", () => {
    /* Change slider track color based on slider value. */
    track = Number.parseInt(slider.value);

    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${track}%, hsl(224, 65%, 95%)${track}%)`;

    /* Call this function to show the correct prices and pageviews */
    outputPrice(track);
});

/* Show the correct prices and pageviews when moving the slider */
outputPrice = track => {
    const pricingObjs = pricing.find(pricingOBj => pricingOBj.trackPercentage === track);

    /* e.g. if argument "track" (slider.value) === 50 it will match with the trackPercentage value of the 3rd pricing object (see pricing obj above) with price: 16 and pageviews: 100k */
    if (!checkbox.checked) {
        output.innerHTML = `$${pricingObjs.price.toFixed(2)}`, views.innerHTML = pricingObjs.pageviews;
    } else {
        output.innerHTML = `$${(pricingObjs.price * 0.75).toFixed(2)}`, views.innerHTML = pricingObjs.pageviews;    
    }
}

/* Show the correct price when you toggle the checkbox */
checkbox.addEventListener("input", () => {
    outputPrice(track);
});

/* Change discount text and set the default price+pageviews onload */
window.onload = () => {
    screenTest(query);
    outputPrice(track);
}