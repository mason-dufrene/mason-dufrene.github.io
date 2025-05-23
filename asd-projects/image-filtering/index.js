// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
applyFilterNoBackground(decreaceBlue);
applyFilterNoBackground(increceGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for(var r = 0; r < image.length; r++){
    for(var c = 0; c < image[r].length; c++){

      var rgbString = image[r][c];
      var rgbNumbers = rgbStringToArray(rgbString);

      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[r][c] = rgbString

    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterNoB){
  var backColor = image[0][0]
  for(var r = 0; r < image.length; r++){

    for(var c = 0; c < image[r].length; c++){
      var rgbString = image[r][c];
      var rgbNumbers = rgbStringToArray(rgbString);

      if(backColor !== rgbString){

        filterNoB(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
      }
      image[r][c] = rgbString
      
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(bounds){
  return bounds < 0 ? 0 : bounds > 255 ? 255 : bounds
}

// TODO 3: Create reddify function
function reddify(arr){
arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaceBlue(blu){
 blu[BLUE] = keepInBounds(blu[BLUE] -50)
}
function increceGreenByBlue(gren){
 gren[GREEN] = keepInBounds(gren[GREEN] + gren[BLUE])
}

// CHALLENGE code goes below here
