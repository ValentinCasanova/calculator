const display = document.querySelector(".results");

function addEventListenersToNumberButtons(){
    const numbers = document.querySelectorAll(".num");
    for(let number of numbers){
        number.addEventListener("click", () => {
            // Check if display is empty
            if(display.textContent === "0"){
                display.textContent = number.textContent;
            }else{
                if(number.textContent === "."){
                    if(!display.textContent.includes(".")){
                        display.textContent += number.textContent;
                    }
                }else{
                    display.textContent += number.textContent;
                }
            }
        })
    }
}

function updateDisplay(string){
    display.textContent = string;
}

// Implement Functionality for each button
addEventListenersToNumberButtons();
// AC
document.querySelector(".AC").addEventListener("click", () =>
    updateDisplay("0"));
// C
document.querySelector(".C").addEventListener("click", () => {
    if(display.textContent.length > 1){
        let temp = display.textContent.split('')
        temp.pop();
        display.textContent = temp.join("");
    }else updateDisplay("0");
})
// +/-
document.querySelector(".Neg").addEventListener("click", () =>{
    display.textContent = display.textContent.unshift("-");
})