//Initializing home and guest values

let home = 0;
let guest = 0;
let homeArray = [];
let guestArray = [];
let currentHomeIndex = 0;
let currentGuestIndex = 0;

//Rendering scores

let homeScore = document.getElementById("display-score-home");
let guestScore = document.getElementById("display-score-guest")

//Creating functions

function addHome1(){
    home++;
    homeScore.textContent = home;
    homeArray.push(home);
    console.log(homeArray);
    currentHomeIndex = homeArray.length - 1;
}

function addHome2(){
    home+=2;
    homeScore.textContent = home;
    homeArray.push(home);
    console.log(homeArray);
    currentHomeIndex = homeArray.length - 1;
}

function addHome3(){
    home+=3;
    homeScore.textContent = home;
    homeArray.push(home);
    currentHomeIndex = homeArray.length - 1;
}
function addGuest1(){
    guest++;
    guestScore.textContent = guest;
    guestArray.push(guest);
    currentGuestIndex = guestArray.length - 1;
}

function addGuest2(){
    guest+=2;
    guestScore.textContent = guest;
    guestArray.push(guest);
    currentGuestIndex = guestArray.length - 1;
}

function addGuest3(){
    guest+=3;
    guestScore.textContent = guest;
    guestArray.push(guest);
    console.log(guestArray);
    currentGuestIndex = guestArray.length - 1;
}

function undoHome(){
   if (currentHomeIndex > 0){
        currentHomeIndex--;
        homeScore.textContent = homeArray[currentHomeIndex];
        home = homeArray[currentHomeIndex];
    }
}

function undoGuest(){
   if (currentGuestIndex > 0) {
        currentGuestIndex--;
        guestScore.textContent = guestArray[currentGuestIndex];
        guest = guestArray[currentGuestIndex];
    }
}