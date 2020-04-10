let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://drive.google.com/file/d/1HTOOQfq21xSDvOOv7Kq-8HuU5U9G8rkb/view?usp=sharing') {
      myImage.setAttribute ('src','https://drive.google.com/file/d/1zcaqzkqE_E57coLM9gdqc2z1_ic8xDM1/view?usp=sharing');
    } else {
      myImage.setAttribute ('src','https://drive.google.com/file/d/1HTOOQfq21xSDvOOv7Kq-8HuU5U9G8rkb/view?usp=sharing');
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
