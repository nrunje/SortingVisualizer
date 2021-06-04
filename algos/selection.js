/** Implements selection sort */
function Selection() {
  c_delay = 0;

  for (var k = 0; k < array_size; k++) {
    divUpdate(divs[k], div_sizes[k], "red");

    min = k;

    for (var j = k + 1; j < array_size; j++) {
      divUpdate(divs[j], div_sizes[j], "yellow");

      if (div_sizes[j] < div_sizes[min]) {
        if (min != k) {
          divUpdate(divs[min], div_sizes[min], "blue");
        }

        min = j;
        divUpdate(divs[min], div_sizes[min], "red");
      } else {
        divUpdate(divs[j], div_sizes[j], "blue");
      }
    }

    if (min != k) {
      var placeholder = div_sizes[min];
      div_sizes[min] = div_sizes[k];
      div_sizes[k] = placeholder;

      divUpdate(divs[min], div_sizes[min], "red");
      divUpdate(divs[k], div_sizes[k], "red");
      divUpdate(divs[min], div_sizes[min], "blue");
    }

    divUpdate(divs[k], div_sizes[k], "green");
  }

  divUpdate(divs[k], div_sizes[k], "green");

  enableButtons();
}
