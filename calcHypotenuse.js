const sideOne = document.querySelector(".side-one")
const sideTwo = document.querySelector(".side-two")
const submitAnswer = document.querySelector("#check-btn")
const output = document.querySelector(".output")

function calculateHypotenuse(a, b) {
    let hypo = (Math.sqrt(a * a + b * b)).toFixed(2);
    output.innerText="The length of hypo is " + hypo 
}
submitAnswer.addEventListener("click", checkInput);

function checkInput() {
    const a = Number(sideOne.value)
    const b = Number(sideTwo.value)
    if ((a === "") || (b === "")) {
        output.innerText = "Please enter both the value";
    } else if (a > 0 || b > 0) {
        output.innerText = "The minimum value accepted is 1";
        calculateHypotenuse(a, b)
    }
}

function message(msg) {
    output.innerText = msg
}