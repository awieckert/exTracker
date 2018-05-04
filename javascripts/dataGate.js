const xhr = require('./xhr.js');
const data = require('./data.js');
const printToDom = require('./dom.js');

const exSuccess = (JSONdata) => {
  const exData = JSONdata.Ex;
  console.log(exData);
  data.setExData(exData);
  xhr.locationsXHR(locationSuccess, WTF);
  printToDom.exPrinter();
};

const locationSuccess = (JSONdata) => {
  const locationData = JSONdata.locations;
  console.log('locationsXHR: ', locationData);
  data.setLocationData(locationData);
  // printLocations();
};

const WTF = () => {
  console.log('DAMN!');
};

const initializer = () => {
  xhr.exXHR(exSuccess, WTF);
};

module.exports = initializer;
