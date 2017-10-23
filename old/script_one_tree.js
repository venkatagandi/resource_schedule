// Code goes here

var rowsM = document.querySelector('.masterRow');

// Get all <p> elements in the document
//var x = document.querySelectorAll("th.masterRow");

function callMe(e) {
  //console.log(e);
  var y = document.querySelectorAll(".masterRow_child_1");
  //console.log(y);
  //alert('iam clicked');
  toggle(y);
};

rowsM.addEventListener("click", callMe, false);

 function toggle(y) {
  //alert(1);
  //console.log(y);
  for (var i = 0; i < y.length; i++)
    {
       if(y[i].style.display=='none' ){
         //alert(2);
         y[i].style.display = 'table-row'; // set to table-row instead of an empty string
       }else{
         //alert(3);
         y[i].style.display = 'none';
       }
  }
}