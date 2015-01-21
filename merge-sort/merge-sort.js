var mergeSort = function (arr) {
  var left, right, middle;

  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  middle = parseInt(arr.length / 2);
  left = arr.slice(0, middle);
  right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};


function merge (a, b) {
  var result, i, j;

  result = [];
  i = 0;
  j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i += 1;
    } else {
      result.push(b[j]);
      j += 1;
    }
  }

  return result.concat(a.slice(i, a.lenght), b.slice(j, b.length));
}
