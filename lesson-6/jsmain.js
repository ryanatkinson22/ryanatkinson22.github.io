

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener("click",() => {mainnav.classList.toggle('responsive')}, false);

let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let mydate = new Date();
let weekname = w_names[mydate.getDay()];
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date');
dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();



pancakes();
function pancakes(){
    if (weekname == "Friday"){
        alert('pancakes');

        const fridaydiv = document.getElementById("Friday");
        fridaydiv.style.display = "block";

        document.body.classList.toggle('movedown');
    }
} ; 

/* Wind Chills */
wind = parseInt(document.getElementById("wind").textContent);
temp = parseInt(document.getElementById("temp").textContent);

chill=Math.round(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);

wind = document.getElementById("chill").textContent = chill;


