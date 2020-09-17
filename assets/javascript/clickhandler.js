const colorBox = document.querySelector("#color-box");
// JS for the gray button
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
    colorBox.className = "gray";
})
// JS for the blue button
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
    colorBox.className = "blue";
})
// JS for the pink button
const pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
    colorBox.className = "pink";
})

let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
  // function to add 1 to COUNT & update value of countspan inner.html 
   count += 1;
       //
       console.log(count);
    countspan.innerHTML = count;
   })

const evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {
    //function shows an alert dialog stating "count" is even or odd.
    //console.log("button was clicked");
    if (count % 2 === 0) {
            alert("Your count is even!") }
        else  {
            alert("Your count is odd!")
        }
}) 

