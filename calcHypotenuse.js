const sideOne = document.querySelector(".side-one")
const sideTwo = document.querySelector(".side-two")
const submitAnswer = document.querySelector("#check-btn")
const output = document.querySelector("#output")
const errorMessage=document.querySelector("#error")

function calculateHypotenuse(a, b) {
    let hypo = (Math.sqrt(a * a + b * b)).toFixed(2);
    output.innerText="The length of hypo is " + hypo 
}
submitAnswer.addEventListener("click", checkInput);

function checkInput() {
    const a = Number(sideOne.value)
    const b = Number(sideTwo.value)
    if ((a !==0) && (b !== 0)) {
        if (a>0 && b>0) {
        errorMessage.style.display = "none";
        output.style.display = "block";
        let hypo = (Math.sqrt(a * a + b * b)).toFixed(2);
        output.innerText="The length of hypo is " + hypo 
    } else {
        errorMessage.style.display = "block";
        output.style.display = "none";
        errorMessage.innerText = "Please enter both positive values of a & b!";
    }
}else {
        errorMessage.style.display = "block";
        output.style.display = "none";
        errorMessage.innerText = "Please enter both the values of a & b!";
    }
}