/**
 * Computes investment or loan details based on user input from the DOM.
 *
 * Retrieves values for principal, rate, and years from the HTML elements with ids 'principal', 'rate', and 'years'
 *
 * @function compute
 * @returns {void} This function does not return a value directly; it updates the DOM directly.
 */

function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var amount = parseInt(principal) + parseFloat(interest);
  var result = document.getElementById("result");

  if (principal <= 0) {
    alert("Enter a positive number.");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit $" +
      "<mark>" +
      principal +
      "</mark>" +
      ",<br> at an interest rate of " +
      "<mark>" +
      rate +
      "%" +
      "</mark>" +
      "<br> You will receive an amount of $" +
      "<mark>" +
      amount +
      "</mark>" +
      ",<br> in the year " +
      "<mark>" +
      year +
      "</mark>" +
      "<br>";
  }
}

/**
 * Updates the displayed interest rate value when the input changes.
 *
 * Reads the current value from the input element with ID `rate`
 * and updates the text content of the element with ID `rate_val`
 * to reflect the selected rate.
 *
 * Intended to be used as an `onchange` handler for the rate input.
 *
 * @function updateRate
 * @returns {void} Does not return a value; updates the DOM directly.
 *
 * @example
 * // HTML:
 * // <input id="rate" type="range" value="5" onchange="updateRate()" />
 * // <span id="rate_val"></span>
 *
 * // JS:
 * updateRate(); // sets the span text to "5"
 */

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

/**
 * Converts a temperature from Celsius to Fahrenheit and updates the DOM.
 *
 * Reads the numeric value from the input element with ID `Celsius`,
 * converts it to Fahrenheit using the formula:
 *
 *   Fahrenheit = (Celsius × 9 / 5) + 32
 *
 * and sets the result in the input element with ID `Fahrenheit`.
 *
 * @function temperature
 * @returns {void} Does not return a value; updates the DOM directly.
 *
 * @example
 * // HTML:
 * // <input id="Celsius" value="0" />
 * // <input id="Fahrenheit" />
 *
 * // JS:
 * temperature(); // sets the "Fahrenheit" input value to "32"
 */

function temperature() {
  //To convert Celsius to Farenheit
  //(CEL * 9/5) + 32
  var c = document.getElementById("Celsius").value;
  var f = (c * 9) / 5 + 32;
  document.getElementById("Fahrenheit").value = f;
}

/**
 * Converts kilograms to pounds based on user input and updates the DOM
 *  Reads the numeric value from the input element with ID `kg`,
 * converts it to pounds using the formula `lbs = kg * 2.2`,
 * and sets the result in the input element with ID `lbs`
 * @function weight
 * @returns {void} This function does not return a value directly; it updates the DOM directly.
 * @example
 * // HTML:
 * // <input id="kg" value="10" />
 * // <input id="lbs" />
 *
 * // JS:
 * weight(); // sets the "lbs" input value to "22"
 */
function weight() {
  var kg = document.getElementById("kg").value;
  var lbs = kg * 2.2;
  document.getElementById("lbs").value = lbs;
}

/**
 * Converts a distance in kilometers to miles and updates the DOM.
 *
 * Reads the numeric value from the input element with ID `km`,
 * converts it to miles using the formula:
 *
 *   Distance (miles) = Distance (km) * 0.62137
 *
 * and sets the result in the input element with ID `miles`.
 *
 * @function distance
 * @returns {void} Does not return a value; updates the DOM directly.
 *
 * @example
 * // HTML:
 * // <input id="km" value="5" />
 * // <input id="miles" />
 *
 * // JS:
 * distance(); // sets the "miles" input value to "3.10685"
 */

function distance() {
  //To convert Kilometers to Miles
  //Distance(Miles) = Distance(Kms) * 0.62137

  var km = document.getElementById("km").value;
  var m = km * 0.62137;
  document.getElementById("miles").value = m;
}
