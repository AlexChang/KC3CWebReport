function headwrapper(){
  var brain=document.getElementById("brain");
  var car=document.getElementById("car");
  setInterval(function(){
    changeOpacity("brain");
  }
  , 100);
  setInterval(function(){
    moveElement("car");
  }
  , 50)
}
addLoadEvent(headwrapper);
