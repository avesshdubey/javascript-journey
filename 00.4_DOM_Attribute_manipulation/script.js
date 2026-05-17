const link = document.querySelector("a");
const h1 = document.querySelector("h1");
console.log(link);
console.log(link.getAttribute("rel"));
console.log(link.getAttribute("target"));
console.log(link.getAttribute("style"));//attribute not set 
link.setAttribute('href',"http://youtube.com");
h1.setAttribute("style","color:green");
link.removeAttribute("target");
