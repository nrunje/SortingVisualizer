/** Implements quicksort */
function Quick() {
  c_delay = 0;

  quickSort(0, array_size - 1);

  enableButtons();
}

function partitionForQuick(start, end) {
  var i = start + 1;
  var pivot = div_sizes[start];
  divUpdate(divs[start], div_sizes[start], "yellow");

  for (var j = start + 1; j <= end; j++) {
    if (div_sizes[j] < pivot) {
      divUpdate(divs[j], div_sizes[j], "yellow");
      divUpdate(divs[i], div_sizes[i], "red");
      divUpdate(divs[j], div_sizes, "red");

      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      divUpdate(divs[i], div_sizes[i], "red");
      divUpdate(divs[j], div_sizes[j], "red");

      divUpdate(divs[i], div_sizes[i], "blue");
      divUpdate(divs[j], div_sizes[j], "blue");

      i++;
    }
  }

  divUpdate(divs[start], div_sizes[start], "red");
  divUpdate(divs[i - 1], div_sizes[i - 1], "red");

  var temp = div_sizes[start];
  div_sizes[start] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;

  divUpdate(divs[start], div_sizes[start], "red");
  divUpdate(divs[i - 1], div_sizes[i - 1], "red");

  for (var k = start; k <= i; k++) {
    divUpdate(divs[k], div_sizes[k], "green");
  }

  return i - 1;

}

function quickSort(start, end) {
  if (start < end) {
    var pivot_position = partitionForQuick(start, end);
    quickSort(start, pivot_position - 1);
    quickSort(pivot_position + 1, end);
  }
}
