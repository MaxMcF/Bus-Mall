'use strict';



function pics(name, url, shown, clicked){
  this.name = name;
  this.url = url;
  this.shown = shown;
  this.clicked = clicked;
}
var picOne = new pics('bag', 'assets/bag.jpg', 0, 0);
var picTwo = new pics('banana', 'assets/banana.jpg', 0, 0);
var picThree = new pics('bathroom', 'assets/bathroom.jpg', 0, 0);
var picFour = new pics('boots', 'assets/boots.jpg', 0, 0);
var picFive = new pics('breakfast', 'assets/breakfast.jpg', 0, 0);
var picSix = new pics('bubblegum', 'assets/bubblegum.jpg', 0, 0);
var picSeven = new pics('chair', 'assets/chair.jpg', 0, 0);
var picEight = new pics('cthulhu', 'assets/cthulhu.jpg', 0, 0);
var picNine = new pics('dogDuck', 'assets/dog-duck.jpg', 0, 0);
var picTen = new pics('dragon', 'assets/dragon.jpg', 0, 0);
var picEleven = new pics('pen', 'assets/pen.jpg', 0, 0);
var picTwelve = new pics('petSweep', 'assets/pet-sweep.jpg', 0, 0);
var picThirteen = new pics('scissors', 'assets/scissors.jpg', 0, 0);
var picFourteen = new pics('shark', 'assets/shark.jpg', 0, 0);
var picFifteen = new pics('sweep', 'assets/sweep.png', 0, 0);
var picSixteen = new pics('tauntaun', 'assets/tauntaun.jpg', 0, 0);
var picSeventeen = new pics('unicorn', 'assets/unicorn.jpg', 0, 0);
var picEighteen = new pics('usb', 'assets/usb.gif', 0, 0);
var picNineteen = new pics('waterCan', 'assets/water-can.jpg', 0, 0);
var picTwenty = new pics('wineGlass', 'assets/wine-glass.jpg', 0, 0);

var displayArray = [];
var mainArray = [picOne, picTwo, picThree, picFour, picFive, picSix, picSeven, picEight, picNine, picTen, picEleven, picTwelve, picThirteen, picFourteen, picFifteen, picSixteen, picSeventeen, picEighteen, picNineteen, picTwenty];
var form = document.getElementsByTagName('form')[0];

var createImg = function(parent, source, imgClass){
  var element = document.createElement('img');
  element.setAttribute('src', source);
  element.setAttribute('class', imgClass);
  parent.appendChild(element);
};

var initialFunction = function(){
  for (var i = 0; i < 3; i++){
    var rand = Math.floor(Math.random() * mainArray.length);
    var placeholder = mainArray[rand];
    displayArray.push(placeholder);
    mainArray.splice(rand, 1);
    createImg(form, displayArray[i].url, 'img');
  };
};
// console.log(displayArray);
// console.log(mainArray);
initialFunction();

var PicCycle = function(event){
  event.preventDefault();
  // this.clicked += 1;
  var displayPlaceHolder = [];
  for (var x = 0; x < displayArray.length; x++){
    displayPlaceHolder.push(displayArray[x]);
  }
  displayArray.splice(0,3);
  console.log(displayPlaceHolder);
  for (var i = 0; i < 3; i++){
    var oldPic = document.getElementsByClassName('img')[0];
    form.removeChild(oldPic);
    var rand = Math.floor(Math.random() * mainArray.length);
    var placeholder = mainArray[rand];
    displayArray.push(placeholder);
    mainArray.splice(rand, 1);
    createImg(form, displayArray[i].url, 'img');
  };
  mainArray = mainArray.concat(displayPlaceHolder);
  displayPlaceHolder = [];
  console.log(mainArray);
  console.log(displayArray);
  var picture = document.getElementsByClassName('img');
  for (var l = 0; l < picture.length; l++){
    picture[l].addEventListener('click', PicCycle);

  };
};

var picture = document.getElementsByClassName('img');
for (var l = 0; l < picture.length; l++){
  picture[l].addEventListener('click', PicCycle);

};
