

$('input').on('click', snagData);

function snagData() {
  $.getJSON('js/item.json', displayData, true);
}

function displayData(data) {
  data.forEach(function (thing){
    console.log(thing.name);
    console.log(thing.type);
    console.log(thing.age);

  })
}

$('input').click();
