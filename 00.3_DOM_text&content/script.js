console.log("somthing");
const box = document.getElementById("box");
console.log(box.innerText); //calculates, css,hidden elements and render text . Hidden not visible
console.log(box.textContent);//ignore css,hidden elements and render text . Hidden visible, line break, space, all.

console.log(box.innerHTML);//shows tags also

// Excercise 1
const demo = document.getElementById("demo");
console.log(demo.innerText);
console.log(demo.textContent);
console.log(demo.innerHTML);

// Excercise 2
const h1 = document.querySelector("h1");
console.log(h1);
const btn = document.querySelector("button")
console.log(btn);
btn.addEventListener("click",function(){
    h1.textContent = "I clicked button!";
})

// Excercise 3
const h2 = document.querySelector("h2");
console.log(h2);
h2.textContent = `<h2>Titel changed</h2>
<p>Description</p>`;
