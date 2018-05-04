let exDatums = [];
let locationDatums = [];

const setExData = (data) => {
  exDatums = data;
};

const getExData = () => {
  return exDatums;
};

const setLocationData = (data) => {
  locationDatums = data;
};

const getLocationData = () => {
  return locationDatums;
};

module.exports = {
  setExData,
  getExData,
  setLocationData,
  getLocationData,
};
