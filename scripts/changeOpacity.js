function changeOpacity(elementID){
  var elem=document.getElementById(elementID);

  var opa=parseFloat(elem.style.opacity);
  if(opa==1){
    return true;
  }else{
    opa=opa+0.1;
  }
  elem.style.opacity=opa;
}
