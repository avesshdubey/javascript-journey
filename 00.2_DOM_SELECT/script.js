console.log("kuch toh hua");

const heading = document.getElementById("title");
console.log(heading);

const para = document.getElementsByClassName("info");

for(let i = 0; i<para.length; i++){
    console.log(para[i].textContent);
}


//excercise 1
const h1 = document.getElementById("title");
console.log(h1.textContent);

const classes = document.getElementsByClassName("info");
console.log(classes); //live html 
for(let i = 0; i<classes.length; i++){
    console.log(classes[0])
}

const btn = document.querySelector("button");
btn.addEventListener("click",function(){
    h1.textContent = "clicked";
})

// excercise 2
const all = document.querySelectorAll(".info");
all.forEach(function(items){
    items.style.color=("red");
    console.log(items.textContent);
})

// excercise 3
const eachBtn = document.querySelectorAll(".same");
const eachPara = document.querySelectorAll(".info");
eachBtn.forEach((eachBtn, index)=>{
    eachBtn.addEventListener("click",()=>{
        eachPara[index].textContent=`${index+1} clicked!`;

    });
});
