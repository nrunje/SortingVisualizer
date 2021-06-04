function Merge() {
  c_delay = 0;

  partition(0, array_size-1);

  enableButtons();
}

function mergeSort(start, mid, end) {
  var p = start;
  var q = mid + 1;
  var k = 0;
  var Arr = [];

  for (var i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = div_sizes[q++];
      divUpdate(divs[q-1], div_sizes[q-1], "red");
    } else if (q > end) {
      Arr[k++]=div_sizes[p++];
      divUpdate(divs[p-1],div_sizes[p-1],"red");
    } else if (div_sizes[p]<div_sizes[q]) {
      Arr[k++]=div_sizes[p++];
      divUpdate(divs[p-1],div_sizes[p-1],"red");
    } else {
      Arr[k++]=div_sizes[q++];
      divUpdate(divs[q-1],div_sizes[q-1],"red");
    }
  }

  for (var i = 0; i < k; i++) {
    div_sizes[start++] = Arr[i];
    divUpdate(divs[start-1], div_sizes[start-1], "green");
  }
}

function partition(start, end) {
  if (start < end) {
    var mid_value = Math.floor((start + end) / 2);
    divUpdate(divs[mid_value], div_sizes[mid_value], "yellow");

    partition(start, mid_value);
    partition(mid_value + 1, end);

    mergeSort(start, mid_value, end);
  }
}
