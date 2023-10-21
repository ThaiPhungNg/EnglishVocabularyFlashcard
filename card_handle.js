//----------------------- hover card color change------------
const colors = ['#3C865D', '#AD7409', '#5D7D9C', '#C65A3C', ];
const boxes = document.querySelectorAll('.card_theme');

boxes.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = colors[index % colors.length];
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = '';
    });
});

//----------------------- filtering options------------

filterSelection("all");// Execute the function and show all columns

function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("col-3");
    if(c == "all") c="";
     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for( i =0; i < x.length; i++){
        removeClass(x[i],"show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i],"show")
    }

}
// SHow filtered elements
function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for( i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}