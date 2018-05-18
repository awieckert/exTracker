const data = require('./data.js');

const printToDom = (stringToPrint, divID) => {
  $(divID).html(stringToPrint);
};

const exPrinter = () => {
  const exData = data.getExData();
  console.log('exData: ', exData);
  let stringToPrint = '';
  exData.forEach((ex) => {
    stringToPrint += `<div class="row ex" id="${ex.name}">`;
    stringToPrint += `<div class="col-sm-6 col-md-12 text-center">`;
    stringToPrint += `<div class="alert alert-danger" role="alert">STRANGER DANGER!</div>`;
    stringToPrint +=  `<div class="thumbnail">`;
    stringToPrint +=    `<img src="${ex.image}" alt="...">`;
    stringToPrint +=    `<div class="caption">`;
    stringToPrint +=      `<h3>${ex.name} Age: ${ex.age}</h3>`;
    stringToPrint +=     `<h4>Flaws: </h4>`;
    $(ex.flaws).each((i, flaw) => {
      stringToPrint += `<p>${i + 1}: ${flaw}</p>`;
    });
    stringToPrint +=   `</div>`;
    stringToPrint +=  `</div>`;
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  printToDom(stringToPrint, '#monkeybutts');
};

const locationPrinter = () => {
  const locationData = data.getLocationData();
  const exData = data.getExData();
  let stringToPrint = '';
  $(locationData).each((i, location) => {
    stringToPrint +=   `<div class="col-sm-6 col-md-5 col-md-offset-1 location">`;
    stringToPrint +=     `<div class="thumbnail">`;
    stringToPrint +=       `<img src="${location.image}" alt="Things'N Stuff">`;
    stringToPrint +=      `<div class="caption">`;
    stringToPrint +=         `<h3>${location.name}</h3>`;
    stringToPrint +=         `<p>Address: ${location.address}</p>`;
    stringToPrint +=         `<p>Exs that frequent this spot: `;
    exData.forEach ((ex) => {
      ex.locations.forEach((loci) => {
        if (loci === location.id) {
          stringToPrint +=         `${ex.name}, `;
        }
      });
    });
    stringToPrint +=         `</p>`;
    stringToPrint +=         `<p>The douches often frequents this spot in the ${location.time} hours.</p>`;
    stringToPrint +=       `</div>`;
    stringToPrint +=     `</div>`;
    stringToPrint +=   `</div>`;
  });
  printToDom(stringToPrint, '#location-container');
};

const singleExPrinter = (theEx) => {
  console.log('theEx: ', theEx);
  let stringToPrint = '';
  stringToPrint += `<div class="row ex" id="${theEx.name}">`;
  stringToPrint += `<div class="col-sm-6 col-md-12 text-center">`;
  stringToPrint += `<div class="alert alert-danger" role="alert">STRANGER DANGER!</div>`;
  stringToPrint +=  `<div class="thumbnail">`;
  stringToPrint +=    `<img src="${theEx.image}" alt="...">`;
  stringToPrint +=    `<div class="caption">`;
  stringToPrint +=      `<h3>${theEx.name} Age: ${theEx.age}</h3>`;
  stringToPrint +=     `<h4>Flaws: </h4>`;
  $(theEx.flaws).each((i, flaw) => {
    stringToPrint += `<p>${i + 1}: ${flaw}</p>`;
  });
  stringToPrint +=   `</div>`;
  stringToPrint +=  `</div>`;
  stringToPrint += `</div>`;
  stringToPrint += `</div>`;
  printToDom(stringToPrint, '#monkeybutts');
};

const singleExLocationPrinter = (singleExLoci) => {
  console.log('singleExLoci: ', singleExLoci);
  let stringToPrint = '';
  stringToPrint += `<div class="panel panel-default col-md-offset-1 locations-panel">`;
  stringToPrint += `<div class="panel-body">< BACK TO THE MONSTERS!</div>`;
  stringToPrint += `</div>`;
  $(singleExLoci).each((i, location) => {
    stringToPrint +=   `<div class="col-sm-6 col-md-3 col-md-offset-1 location">`;
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

const printExLocations = (singleEx, singleExLocations) => {
  singleExPrinter(singleEx);
  singleExLocationPrinter(singleExLocations);
};

module.exports = {
  exPrinter,
  locationPrinter,
  printExLocations,
};
