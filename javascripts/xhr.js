const exXHR = (successFunction, errorFunction) => {
  $.get('../db/ex.json')
    .done(successFunction)
    .fail(errorFunction);
};

const locationsXHR = (successFunction, errorFunction) => {
  $.get('../db/locations.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = {
  exXHR,
  locationsXHR,
};
