var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".buttons button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById('array_container');
cont.style = "flex-direction: row; align-items: baseline";

inp_gen.addEventListener("click", generateArray);
inp_as.addEventListener("input", updateArraySize);

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

function updateArraySize() {
  array_size = inp_as.value;
  generateArray();
}

window.onload = updateArraySize();

for (var k = 0; k < butts_algos.length; k++) {
  butts_algos[k].addEventListener("click", runAlgo);
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

function runAlgo() {
  disable_buttons();

  this.classList.add("butt_selected");

  switch (this.innerHTML) {
    case "Insertion": Insertion();
      break;
  }

  enableButtons();
}


var speed = 1000;
inp_aspeed.addEventListener("input", visSpeed);

function visSpeed() {
  var array_speed = inp_aspeed.value;

  switch (parseInt(array_speed)) {
    case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=5000;
                break;
  }

  delay_time = 10000 / (Math.floor(array_size/10)*speed);
}

var delay_time = 10000 / (Math.floor(array_size/10)*speed);
var c_delay = 0;

function divUpdate(cont, height, color) {
  window.setTimeout(function(){
        cont.style=" margin:5% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enableButtons() {
  window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}
