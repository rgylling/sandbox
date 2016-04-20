obj = {
  the: 5,
  for: 3,
  i: 7,
  an: 2,
  forest: 1,
  bench: 4,
  food: 3
};
rank = [];

function topWords (obj, count) {
  var winner;
  var rank = [];
  for (i=0;i<count;i++) {
    winner = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
    rank[i] = [winner,obj[winner]];
    delete obj[winner];
  }
  return rank.reduce(function (prev, curr) {
      prev[curr[0]] = curr[1];
      return prev;
  }, {});
}


//var values = Object.keys(obj).map(function(key) {return obj[key]});
var keys = Object.keys(obj);
$d = $('#display');
var table = '<table>\n'
table += "<tr><th>Word</th><th>Times Used</th><tr>";

keys.map(function (el) {
  table += '<tr><td>'+ el + '</td><td>' + obj[el] + '</td>\n';
})
table += '</table>\n';
$d.append(table);


//

// max = Object.keys(obj).forEach(function(val, idx, array){
//   if (obj.val > rank[0]) {
//
//   }
// })
