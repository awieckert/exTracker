jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const dom = require('./dom.js');

const getExsJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/ex.json').done((data) => {
      console.log('multiExData: ', data.Exs);
      resolve(data.Exs);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const getLocationsJSON = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/locations.json').done((data) => {
      resolve(data.locations);
    }).fail((err) => {
      reject(`Oi got an err!`, err);
    });
  });
};

const exFilter = (e) => {
  const exTarget = $(e.target).closest('.ex').prop('id');
  let allTheExs = [];
  let singleEx = [];
  let allTheLocations = [];
  const singleExLocations = [];
  getExsJSON().then((result) => {
    allTheExs = result;
    return getLocationsJSON();
  }).then((result2) => {
    allTheLocations = result2;
    allTheExs.forEach((ex) => {
      if (ex.name === exTarget) {
        singleEx = ex;
      }
    });
    allTheLocations.forEach((location) => {
      singleEx.locations.forEach((item) => {
        if (location.id === item) {
          singleExLocations.push(location);
        }
      });
    });
    // singleEx is an Object
    // singleExLocations is and array of Objects
    dom.printExLocations(singleEx, singleExLocations);
  });
};

const addEvents = () => {
  $('input').on('keyup', searchFunction);
  $('.btns').on('click', filterTime);
  $('.clear').on('click', clearFilters);
  $('.ex').on('click', exFilter);
};

const searchFunction = (e) => {
  const searchValue = $('input').val();
  $(`.location:not(:icontains(${searchValue}))`).hide();
  $(`.location:icontains(${searchValue})`).show();
};

const filterTime = (e) => {
  const buttonValue = $(e.target).text();
  $(`.location:not(:icontains(${buttonValue}))`).hide();
  $(`.location:icontains(${buttonValue})`).show();
};

const clearFilters = () => {
  $('.location').show();
};

module.exports = {
  addEvents,
};
