

$('input').on('click', snagData);

function snagData() {
  $.getJSON('js/item.json', displayData);
}

function displayData(data) {
  console.log(data);
}
