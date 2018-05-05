const data = require('./data.js');

const printToDom = (stringToPrint, divID) => {
  $(divID).html(stringToPrint);
};

const exPrinter = () => {
  const exData = data.getExData();
  console.log('exData: ', exData);
  let stringToPrint = '';
  stringToPrint += `<div class="row">`;
  stringToPrint += `<div class="col-sm-6 col-md-12 text-center">`;
  stringToPrint += `<div class="alert alert-danger" role="alert">STRANGER DANGER!</div>`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=    `<img src="${exData.image}" alt="...">`;
  stringToPrint +=    `<div class="caption">`;
  stringToPrint +=      `<h3>${exData.name} Age: ${exData.age}</h3>`;
  stringToPrint +=     `<h4>Flaws: </h4>`;
  $(exData.flaws).each((i, flaw) => {
    stringToPrint += `<p>${i + 1}: ${flaw}</p>`;
  });
  stringToPrint +=   `</div>`;
  stringToPrint +=  `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;
  printToDom(stringToPrint, '#monkeybutt');
};

const locationPrinter = () => {
  const locationData = data.getLocationData();
  let stringToPrint = '';
  $(locationData).each((i, location) => {
    stringToPrint +=   `<div class="col-sm-6 col-md-5 col-md-offset-1 location">`;
    stringToPrint +=     `<div class="thumbnail">`;
    stringToPrint +=       `<img src="${location.image}" alt="Things'N Stuff">`;
    stringToPrint +=      `<div class="caption">`;
    stringToPrint +=         `<h3>${location.name}</h3>`;
    stringToPrint +=         `<p>Address: ${location.address}</p>`;
    stringToPrint +=         `<p>The douche often frequents this spot in the ${location.time} hours.</p>`;
    stringToPrint +=       `</div>`;
    stringToPrint +=     `</div>`;
    stringToPrint +=   `</div>`;
  });
  printToDom(stringToPrint, '#location-container');
};

module.exports = {
  exPrinter,
  locationPrinter,
};
