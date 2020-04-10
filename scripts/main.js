let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://github.com/sushil24sk/sushil24sk.github.io/blob/master/images/L1.png') {
      myImage.setAttribute ('src','https://github.com/sushil24sk/sushil24sk.github.io/blob/master/images/labrador2.png');
    } else {
      myImage.setAttribute ('src','https://github.com/sushil24sk/sushil24sk.github.io/blob/master/images/L1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Labradors are cute, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Labradors are cute, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
