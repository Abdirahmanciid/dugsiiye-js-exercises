function changeImage(){
const image = document.querySelector("#img")

const urlImage = prompt("enter your img url-image")
image.setAttribute ("src",urlImage)

const xudud =prompt("enter yor border image")
image.setAttribute("border", xudud);

const cabir =prompt("enter yor width image")

image.setAttribute("width", cabir);
}