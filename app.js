let stoplight = document.getElementById('stopLight');
let readylight = document.getElementById('readyLight');
let golight = document.getElementById("goLight");
let stopbutton = document.getElementById('stopButton');
let readybutton = document.getElementById('readyButton');
let gobutton = document.getElementById('goButton');

function Stopbutton() {
    stopbutton.style.backgroundColor = "#cf1124";
    stoplight.style.backgroundColor = "#cf1124";
    readybutton.style.backgroundColor = "#1f1d41";
    readylight.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#1f1d41";
    golight.style.backgroundColor = "#4b5069";
    stoplight.style.boxShadow = '0 0 30px 15px rgba(255, 0, 0, 0.7)';
    readylight.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
    golight.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
    
}

function Readybutton() {
    stopbutton.style.backgroundColor = "#1f1d41";
    stoplight.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "#f7c948";
    readylight.style.backgroundColor = "#f7c948";
    gobutton.style.backgroundColor = "#1f1d41";
    golight.style.backgroundColor = "#4b5069";
    stoplight.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
    readylight.style.boxShadow = '0 0 30px 15px rgba(255, 255, 0, 0.7)';
    golight.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
    
}

function Gobutton() {
    stopbutton.style.backgroundColor = "#1f1d41";
    stoplight.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "#1f1d41";
    readylight.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#199473";
    golight.style.backgroundColor = "#199473";
    stoplight.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
    readylight.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
    golight.style.boxShadow = '0 0 30px 15px rgba(0, 255, 0, 0.7)';
    
}