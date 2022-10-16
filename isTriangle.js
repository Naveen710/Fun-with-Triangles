var anglesOfTriangle = document.querySelectorAll(".angle-input")
var isTriangleBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")
var errorMessage = document.querySelector('#error');



function calculateSum() {
    angle1 = Number(anglesOfTriangle[0].value)
    angle2 = Number(anglesOfTriangle[1].value)
    angle3 = Number(anglesOfTriangle[2].value)
   if((angle1)>0 && Number(angle2)>0 && Number(angle3)>0){
        errorMessage.style.display = "none";
        output.style.display = "block";
        const sumOfAngles = angle1+angle2+angle3
        return sumOfAngles;
    } else {
        errorMessage.style.display = "block";
        output.style.display = "none";
        errorMessage.innerText = "Please enter the positive values of all angles!";
}
}
isTriangleBtn.addEventListener("click", checkInput)

function checkInput() {
    angle1 = Number(anglesOfTriangle[0].value)
    angle2 = Number(anglesOfTriangle[1].value)
    angle3 = Number(anglesOfTriangle[2].value)
    if ((angle1) !== 0 && (angle2) !== 0 && (angle3) !== 0) {
        errorMessage.style.display = "none";
        output.style.display = "block";
    if(calculateSum()===180) {
        output.innerText="Yay!, the angles form a triangle."

    } else {
        output.innerText="The angles doesn't form a triangle."

    }
}
else{
      errorMessage.style.display = "block";
        output.style.display = "none";
        errorMessage.innerText = "Please enter the values of all angles!";
}
}
