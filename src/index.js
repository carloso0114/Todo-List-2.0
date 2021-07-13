import "./style.css";

const test = document.createElement("h1")
test.innerText ="This h1 should be Red"
test.classList.add("hello")

document.body.append(test);