console.log('Loaded!');
alert("hi the page got loaded");
var element=document.getElementById('firstid');
element.innerHTML="new value";
var image=document.getElementById('img');
marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    image.style.marginLeft=marginLeft+'px';
}
 image.onclick= function()
 {      
  var interval=setInterval(moveRight,40);
};