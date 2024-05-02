var FIND_INDEX = function (context, array, predicate) {
  if (array == null) return -1;
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(context, array[i])) {
      return i;
    }
  }
}

var FIND = function (context, array, predicate) {
  if (array == null) return undefined;
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(context, array[i])) {
      return array[i];
    }
  }
}

var CONTAINS = function (array, name) {
  if (array == null) return false;
  var i = 0;
  var found = false;
  while (i < array.length && !found) {
    found = (array[i] == name);
    i++;
  }

  return found;
}