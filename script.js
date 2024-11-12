const display = document.querySelector(".results");
let op1 = null;
let op2 = null;
let currDisplayValue = 0;
let currOperation = null;

function updateDisplay(string){
    display.textContent = string;
    currDisplayValue = Number(string);
}

function addEventListenersToNumberButtons(){
    const numbers = document.querySelectorAll(".num");
    for(let number of numbers){
        number.addEventListener("click", () => {
            // Check if display is empty
            if(display.textContent === "0"){
                updateDisplay(number.textContent);
            }else{
                if(number.textContent === "."){
                    if(!display.textContent.includes(".")){
                        updateDisplay(display.textContent + 
                            number.textContent)
                    }
                }else{
                    updateDisplay( display.textContent + number.textContent)
                }
            }
        })
    }
}

function executeOperation(op1, op2, currOperation){
    if(currOperation === "+") return op1+op2;
    if(currOperation === "-") return op1-op2;
    if(currOperation === "/"){
        let res = op1 / op2;
        console.log(res);
        if(Number.isInteger(res)){
            return res;
        }else{
            if(String(res).length > 11){
                return res.toPrecision(11)
            }else{
                return res.toPrecision(String(res).length - 1);
            }
        }
    }
    if(currOperation === "*") return op1*op2;
}

// Implement Functionality for each button
addEventListenersToNumberButtons();
// AC
document.querySelector(".AC").addEventListener("click", () =>{
    updateDisplay("0");
    op1 = null;
    op2 = null;
    currOperation = null;
});
    
// C
document.querySelector(".C").addEventListener("click", () => {
    if(display.textContent.length > 1){
        let temp = display.textContent.split('')
        temp.pop();
        updateDisplay(temp.join(""));
    }else updateDisplay("0");
})
// +/-
document.querySelector(".Neg").addEventListener("click", () =>{
    if(display.textContent.length != "0"){
        if(display.textContent[0] == '-'){
            let temp = Array(...display.textContent);
            temp.splice(0,1);
            updateDisplay(temp.join(''));
        }else{
            updateDisplay("-" + display.textContent);
        }
    }
})
// /
document.querySelector(".Div").addEventListener("click", () =>{
    op1 = Number(currDisplayValue);
    currOperation = "/";
    updateDisplay("0");
})
// X
document.querySelector(".Mult").addEventListener("click", () =>{
    op1 = Number(currDisplayValue);
    currOperation = "*";
    updateDisplay("0");
})
// +
document.querySelector(".Add").addEventListener("click", () =>{
    op1 = Number(currDisplayValue);
    currOperation = "+";
    updateDisplay("0");
})
// X
document.querySelector(".Minus").addEventListener("click", () =>{
    op1 = Number(currDisplayValue);
    currOperation = "-";
    updateDisplay("0");
})
// =
document.querySelector(".Equals").addEventListener("click", () =>{
    if(op1 != null){
        op2 = Number(currDisplayValue);
        updateDisplay(executeOperation(op1, op2, currOperation));
    }
})

