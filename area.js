const sideOne = document.querySelector(".side-one")
const sideTwo = document.querySelector(".side-two")
const submitAnswer = document.querySelector("#check-btn")
const errorMessage=document.querySelector("#error")
const output = document.querySelector("#output")

submitAnswer.addEventListener("click", calculateArea);

function calculateArea() {
    const a = Number(sideOne.value)
    const b = Number(sideTwo.value)
    if (a !== 0 && b !== 0) {
        if (a > 0 && b > 0) {
            errorMessage.style.display = "none"
            output.style.display = "block"
            const area = 0.5 * (a * b).toFixed(2);
            output.innerText = `The area of the triangle is ${area} cm²`

        } else {
            console.log("hi")
            errorMessage.style.display = "block"
            output.style.display = "none"
            errorMessage.innerText = "Please enter both positive values of a & b!";
        }
    } else {
        errorMessage.style.display = "block"
        output.style.display = "none"
        errorMessage.innerText= "Please enter both the values of a & b";
    }
}