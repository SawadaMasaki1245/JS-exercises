"use strict";
function btnClick(){
    let wordValut = document.getElementById("wordInput").value;
    let result = document.getElementById("result");
    result.textContent = wordValut ;
}

function btnClick1(){
    // result.classList.remove("change");
    result.removeAttribute("style");
}

function btnClick2(){
    result.style.cssText = "color: #b0c4de; font-size: 10px"
}
function btnClick3(){
    result.style.cssText = "color: #ff7f50; font-size: 30px"
}
function btnClick4(){
    result.style.cssText = "color: #0000ff; font-size: 50px"
}
function btnClick5(){
    result.style.cssText = "color: #adff2f; font-size: 70px"
}