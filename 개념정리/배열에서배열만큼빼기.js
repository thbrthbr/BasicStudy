var a = [1, 2, 3, 4, 5];

var b = [1, 2, 5];

b.forEach(function (item) {
  var index = a.indexOf(item);

  if (index !== -1) {
    a.splice(index, 1);
  }
});
