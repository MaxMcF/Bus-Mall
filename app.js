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

var selectionCounter = 0;
var displayArray = [];
var mainArray = [picOne, picTwo, picThree, picFour, picFive, picSix, picSeven, picEight, picNine, picTen, picEleven, picTwelve, picThirteen, picFourteen, picFifteen, picSixteen, picSeventeen, picEighteen, picNineteen, picTwenty];
var form = document.getElementsByTagName('form')[0];

var createImg = function(parent, source, imgClass, idName){
  var element = document.createElement('img');
  element.setAttribute('src', source);
  element.setAttribute('class', imgClass);
  element.setAttribute('id', idName);
  parent.appendChild(element);
};

var initialFunction = function(){
  for (var i = 0; i < 3; i++){
    var rand = Math.floor(Math.random() * mainArray.length);
    var placeholder = mainArray[rand];
    displayArray.push(placeholder);
    mainArray.splice(rand, 1);
    createImg(form, displayArray[i].url, 'img', displayArray[i].name);
  };
};
initialFunction();

// function createListItems(array, parent){
//   for(var i = 0; i < array.length; i++){
//     var listItem = document.createElement('li');
//     listItem.innerText = 'The ' + array[i].name + ' was displayed ' + array[i].shown + ' times and was chosen ' + array[i].clicked + ' times.';
//     parent.appendChild(listItem);
//   };
// }

var displayTotals = function(){
  for (var i = 0; i < displayArray.length; i++){
    mainArray.unshift(displayArray[i]);
  }
  // var listDiv = document.getElementById('list');
  // var unList = document.createElement('ul');
  // unList.setAttribute('class', 'unList');
  // listDiv.appendChild(unList);
  // createListItems(mainArray, unList);
  dataGather();
};

var updateCounter = function(){
  var tableRow = document.getElementsByTagName('tr')[0];
  var oldData = document.getElementsByTagName('td')[0];
  if (selectionCounter < 25){
    tableRow.removeChild(oldData);
    var newData = document.createElement('td');
    newData.innerText = 25 - selectionCounter;
    tableRow.appendChild(newData);
  }
  else {
    var table = document.getElementsByTagName('table')[0];
    var counterDiv = document.getElementById('counter');
    counterDiv.removeChild(table);
  }
};
var PicCycle = function(event){
  event.preventDefault();
  for (var i = 0; i < displayArray.length; i++){
    if (displayArray[i].name == event.currentTarget.id){
      displayArray[i].clicked += 1;
    }
  }
  selectionCounter += 1;
  updateCounter();
  var displayPlaceHolder = [];
  for (var x = 0; x < displayArray.length; x++){
    displayPlaceHolder.push(displayArray[x]);
  }
  displayArray.splice(0,3);
  for (var i = 0; i < 3; i++){
    var oldPic = document.getElementsByClassName('img')[0];
    form.removeChild(oldPic);
    var rand = Math.floor(Math.random() * mainArray.length);
    var placeholder = mainArray[rand];
    displayArray.push(placeholder);
    mainArray.splice(rand, 1);
    var img = createImg(form, displayArray[i].url, 'img', displayArray[i].name);
    displayArray[i].shown += 1;
  };
  mainArray = mainArray.concat(displayPlaceHolder);
  displayPlaceHolder = [];
  var picture = document.getElementsByClassName('img');
  for (var l = 0; l < picture.length; l++){
    picture[l].addEventListener('click', PicCycle);
    if (selectionCounter > 24){
      picture[l].removeEventListener('click', PicCycle);
    };
  };
  if (selectionCounter > 24){
    displayTotals();
  };
};

var picture = document.getElementsByClassName('img');
for (var l = 0; l < picture.length; l++){
  picture[l].addEventListener('click', PicCycle);
};
var labelsArray = [];
var dataArray = [];
var backgroundColorArray = [];
var borderColorArray = [];
var dataGather = function(){
  for (var i = 0; i < mainArray.length; i++){
    if(mainArray[i].clicked > 1){
      labelsArray.push(mainArray[i].name);
      dataArray.push(mainArray[i].clicked);
      backgroundColorArray.push('rgba(' + (mainArray[i].clicked * 25) + ', ' + (i * 15) + ', ' + (i * 35) + ', ' + (mainArray[i].clicked / 10) + ')');
      borderColorArray.push('rgba(' + (mainArray[i].clicked * 25) + ', ' + (i * 15) + ', ' + (i * 35) + ',1)');
    }
  }
  new Chart(ctx, chartOptions);
};
var ctx = document.getElementById('myChart').getContext('2d');
var chartOptions = {
  type: 'bar',
  data: {
    labels: labelsArray,
    datasets: [{
      label: '# of Votes',
      data: dataArray,
      backgroundColor: backgroundColorArray,
      borderColor: borderColorArray,
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
};
