var anglesOfTriangle = document.querySelectorAll(".angle-input")
var isTriangleBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")



function isTriangle(angl1, angl2, angl3) {
    const sumOfAngles = angl1 + angl2 + angl3

	if (sumOfAngles === 180) {
		 message("Yes, it is a traingle");
	} else {
		message("No, it is  not a traingle");
	}
}
isTriangleBtn.addEventListener("click", checkInput)

function checkInput() 
{
    angle1 = Number(anglesOfTriangle[0].value)
    angle2 = Number(anglesOfTriangle[1].value)
    angle3 = Number(anglesOfTriangle[2].value)
    if (
        (angle1 === "") &&
        (angle2 === "") &&
        (angle3=== ""))
        {
            message("Please enter a all value");
        }
    
     else if (angle1 < 0 || angle2 < 0 || angle3 < 0) 
        {
            message("Please enter a valid value");
            
        }
        else{
        isTriangle(angle1, angle2, angle3)
        }
    }
function message(msg){
    output.innerText=msg
}