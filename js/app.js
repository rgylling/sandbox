var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var arr = JSON.parse(xhr.responseText);
    showstuff(arr);
  }
}
xhr.open ("GET","js/item.json", true);
xhr.send();

function showstuff(arr) {
  arr.forEach(function (data) {
    console.log(data);
  })
}
