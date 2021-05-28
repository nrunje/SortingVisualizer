function Insertion() {
  c_delay = 0;

  for (var j = 0; j < div_sizes.length; j++) {
    divUpdate(divs[j], div_sizes[j], "orange");

    var current = div_sizes[j];
    var i = j-1;

    while (i > -1 && div_sizes[i] > current) {
      // divUpdate(div[i], div_sizes[i], "darkred");
      // divUpdate(divs[i+1], div_sizes[i+1], "darkred");
      div_sizes[i+1] = div_sizes[i];
      i--;
      // divUpdate(divs[i], div_sizes[i], )
    }

    div_sizes[i+1] = current;
    for (var h = 0; h < j; h++) {
      divUpdate(divs[h], div_sizes[h], "darkgreen");
    }
  }
  divUpdate(divs[j-1], div_sizes[j-1], "darkgreen");
  enableButtons();
}
