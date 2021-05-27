var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".buttons button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById('array_container');
cont.style = "flex-direction: row; align-items: baseline";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";

  for (var k = 0; k < array_size; k++) {
    div_sizes[k] = Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min));
    divs[k] = document.createElement("div");
    cont.appendChild(divs[k]);
    margin_size = 0.1;
    divs[k].style = " margin: 5% " + margin_size + "%; background-color: #291463; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[k]) + "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

for (var k = 0; k < butts_algos.length; k++) {
  // butts_algos[k].addEventListener("click", runalgo);
}

function disable_buttons() {
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}
