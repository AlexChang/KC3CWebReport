function moveElement(elementID){
  var elem=document.getElementById(elementID);

  var pad=parseInt(elem.style.paddingLeft);
  var dist=0;
  if(pad==50){
    return true;
  }else{
    dist=Math.ceil((pad-0)/20);
    pad=pad-dist;
  }
  elem.style.paddingLeft=pad+"%";

}
