console.log("DOM Tree");

const heading = document.querySelector("h1");
console.log(heading.nodeType); // for element node 1.

console.log(heading.firstChild);
console.log(heading.firstChild.nodeType); //for text node3.

const body = document.querySelector("body");
console.log(body.firstChild); // whitespace and newline consider as text node.

console.log(document.body.childNodes);
console.log(document.body.children);
