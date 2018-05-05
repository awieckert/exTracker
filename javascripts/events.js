jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const addEvents = () => {
  $('input').on('keyup', searchFunction);
  $('.btns').on('click', filterTime);
  $('.clear').on('click', clearFilters);
};

const searchFunction = (e) => {
  const searchValue = $('input').val();
  $(`.location:not(:icontains(${searchValue}))`).hide();
  $(`.location:icontains(${searchValue})`).show();
};

const filterTime = (e) => {
  const buttonValue = $(e.target).text();
  console.log('buttonValue: ', buttonValue);
  $(`.location:not(:icontains(${buttonValue}))`).hide();
  $(`.location:icontains(${buttonValue})`).show();
};

const clearFilters = () => {
  $('.location').show();
};

module.exports = {
  addEvents,
};
