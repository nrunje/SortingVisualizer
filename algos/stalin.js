/** Implements Stalinsort */
function Stalin() {
  // document.getElementById('a_speed') = 2;

  var curr = 0;
  c_delay = 0;

  for (var k = 0; k < array_size; k++) {
    if (div_sizes[k] > curr) {
      curr = div_sizes[k];
    } else {
      divUpdate(divs[k], div_sizes[k], "red");
      div_sizes[k] = null;
    }
  }

  for (var i = 0; i < array_size; i++) {
    console.log("Timeout done");
      divUpdate(divs[i], div_sizes[i], "darkgreen");
  }

  enableButtons();
}
