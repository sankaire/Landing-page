// DOM grab
const time = document.getElementById('time');
const greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

const show = true;

// show time function
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // variable for AM or PM
    const amPm = hour >=12 ? 'PM' : 'AM';

    // get time in 12 hour format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span></span>:${addZero(min)}<span></span>:${addZero(sec)}${show ? amPm : ''}`;

    // update every second
    setTimeout(showTime, 1000);
}

// add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set baground image and Greeting
function background() {
    let today = new Date(),
        hour = today.getHours();
    
    if (hour < 12) {
        // good morning 
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        // good afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // good evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get the name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Your Name ]';    
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set Name
// function setName(e) {
//     if (e.type === 'keypress') {
//         // enter is pressed
//         if (e.which == 13 || e.keyCode == 13) {
//             localStorage.setItem('name', e.target.innerText);
//             name.blur();
//         }
//     } else {
//         localStorage.setItem('name', e.target.innerText);
//     }
// }

// Get the focus
// function getFocus() {
//     if (localStorage.getItem('focus') === null) {
//         focus.textContent = '[Enter Your Focus ]';    
//     } else {
//         focus.textContent = localStorage.getItem('focus');
//     }
// }

// set Name
// function setFocus(e) {
//     if (e.type === 'keypress') {
//         // enter is pressed
//         if (e.which == 13 || e.keyCode == 13) {
//             localStorage.setItem('focus', e.target.innerText);
//             focus.blur();
//         }
//     } else {
//         localStorage.setItem('focus', e.target.innerText);
//     }
// }


// name.addEventListener('keypress', setName);
// name.addEventListener('blur', setName);
// focus.addEventListener('keypress', setFocus);
// focus.addEventListener('blur', setFocus);

// run 
showTime();
// background();
// getName();
// getFocus();