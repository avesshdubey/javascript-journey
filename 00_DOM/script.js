console.log("DOM")
// Text Change
const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    title.textContent = "Text Changed !"
})
// Dark Theam
const theambtn = document.getElementById("theambtn");

theambtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

// Counter App
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset")

let value = 0;

inc.addEventListener("click",function(){
    value++;
    count.textContent = value;
})

dec.addEventListener("click",function(){
    if (value >= 1){
        value--;
    } else {
        value = 0;
    }
    
    count.textContent = value;
})

reset.addEventListener("click",function(){
    value = 0;
    count.textContent = value;
})

// Live input preview

const preview = document.getElementById("preview");
const input = document.getElementById("input");

input.addEventListener("input",function(){
    preview.textContent = input.value;
})