const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  toString(date) {
    return moment(date).format('DD/MM/YYYY');
  },
});
