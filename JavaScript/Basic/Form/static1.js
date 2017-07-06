'use strict';

//Form

(function(){
    var form = document.getElementById("myForm");

    var colorFields = form.elements["color"];
    console.log(colorFields.length);  //3

    var firstColorField = colorFields[0];
    var firstFormField = form.elements[0];
    console.log(firstColorField === firstFormField);   //true

})();
