const img = document.getElementById("choc_img");
const body = document.body;
const counter = document.getElementById("count");
const restartButton = document.getElementById("restart");
const doubleButton = document.getElementById("double");

counter. innerText = 0;

img.addEventListener("click", function(e){
    counter.innerText ++;

    if(counter.innerText>5 && counter.innerText<25){
        body.style.backgroundColor = "pink";
        restartButton.removeAttribute("hidden");

    }else if(counter.innerText>24){
        doubleButton.removeAttribute("hidden");
    } 
})

restartButton.addEventListener("click", function(e){
    counter.innerText=0;
    body.style.backgroundColor = "silver";
    restartButton.setAttribute("hidden","");
    doubleButton.setAttribute("hidden","")
})

doubleButton.addEventListener("click", function(e){
    counter.innerText=counter.innerText * 2;
})