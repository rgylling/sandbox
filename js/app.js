

var data=[];

console.log(localStorage.getItem('data'));

data.push('foo');
data.push('bar');


localStorage.setItem('data2',data);

console.log(data);
