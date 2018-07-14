var [_d, _m, _y] = [15, 07, 2015];
// var d = 15, m = 07, y = 2015;
console.log(_m);

[_m, _y] = [_y, _m];

console.log(_m);

function getDate() { return [15, 07, 2015]; }
var [dd, mm] = getDate();
var [,, yy] = getDate();
console.log(dd);
console.log(mm);
console.log(yy);

function currentDate() { return { d: 14, m: 7, y: 2018 }; }
var { y: year, m: month, d: date } = currentDate();

console.log(year);
console.log(month);
console.log(date);

var {m, y} = currentDate();
console.log(m);
console.log(y);

