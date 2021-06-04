/** Implements Stalinsort */
function Stalin() {
  console.log("Array size is " + array_size);
  var curr = 0;

  for (var k = 0; k < array_size; k++) {
    if (div_sizes[k] > curr) {
      curr = div_sizes[k];
    } else {
      divUpdate(divs[k], div_sizes[k], "red");
      div_sizes[k] = null;
    }
  }

  window.setTimeout(1000);

  for (var i = 0; i < array_size; i++) {
    // console.log("Timeout done");
      divUpdate(divs[i], div_sizes[i], "darkgreen");
    // if (div_sizes[i] == null) {
    //   console.log("Background color is red");
    //   divs[i].style.visibility = "hidden";
    // }
  }

}

/** Updates the margin, height, and color of div.

    cont: type 'div' to change */
function divUpdate(cont, height, color) {
  console.log("divUpdate called");
  window.setTimeout(function(){
        // console.log(cont);
        cont.style=" margin:5% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay+=delay_time);
}

/** Generates a random array to sort */
function generateArray() {
  cont.innerHTML = "";

  for (var k = 0; k < array_size; k++) {
    div_sizes[k] = Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min));

    // Make sure no div is size 0
    while (div_sizes[k] == 0) {
      div_sizes[k] = Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min));
    }

    divs[k] = document.createElement("div");
    cont.appendChild(divs[k]);
    margin_size = 0.1;

    divs[k].style = " margin:5% " + margin_size + "%; background-color: #444c59; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[k]) + "%;";
  }
}
