alert("hi");
var theDate = (document.lastModified)
document.getElementById("update").textContent = theDate;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener("click",() => {mainnav.classList.toggle('responsive')}, false);