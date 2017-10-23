// Code goes here



function onAppLoad() {
  var rowInfo = document.getElementsByTagName('tr');
  for (var i=0;i<rowInfo.length;i++){
    rowInfo[i].addEventListener('click', IdentifyRowClicked);
  }
  let mycols = document.getElementById('resourceSchedule').rows[2].cells.length;
  let userInfo = document.getElementById('userName');
  userInfo.setAttribute("colspan",mycols);

  let filterBar = document.getElementById('filterBar');
  filterBar.setAttribute("colspan",mycols);

  //PrepareActivityTable();
}

function IdentifyRowClicked(e) {

  let contained =  false;
  let aclassName="";
  //console.log(e.path);
  e.path.map(p=>{


    if ((' ' + p.className + ' ').match(/masterrow.*/)) {
        contained=true;
        console.log('p class name',p.className);
        aclassName = p.className;
        console.log('a class name', aclassName);
    }
    PrepareActivityTable();
  });

  console.log(contained);
  if(contained) {
    console.log('new a class name', aclassName.replace("masterrow","childrow"));
    aclassName = aclassName.replace("masterrow",".childrow");
    var y = document.querySelectorAll(aclassName);
    console.log(aclassName);
    toggle(y);
  }
}



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


function PrepareActivityTable() {
  var activities = [
    'Activity 1',
    'Activity 2',
    'Activity 3',
    'Activity 4',
    'Unavailable'
  ]

  //var activitiesLength = activities.length;

  var activitiesRows = activities.map(x=>{
    //var newRow =  document.createElement('tr');
    // var newTable = document.getElementById('resourceSchedule');
    // var rowCount = newTable.rows.length;
    // var row = newTable.insertRow(rowCount);

    var table = document.getElementById("resourceSchedule");
    var row = table.insertRow(table.rows.length);    //inserts row at index 1, like in your example
    var cell1 = row.insertCell(0);
    cell1.innerHTML = `<p><span>${x}</span><span>IT</span></p>`;
    let resourceCols = document.getElementById('resourceSchedule').rows[3].cells.length;
    console.log(resourceCols);
    for(let i=1;i<resourceCols;i++){
      var cellm = row.insertCell(i);
      cellm.setAttribute('contenteditable',true);
      cellm.innerHTML = `data${i}`; //"data"+i;
    }
    //var cell2 = row.insertCell(1);
    //cell2.innerHTML = "data2"; //should have other activity values of its object.
  });
}