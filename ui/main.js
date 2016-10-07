console.log('Loaded!');
alert("hi the page got loaded");
var element=document.getElementById('firstid');
element.innerHTML="new value";
var image=document.getElementById('img');
image.onclick= function(){
  image.style.margin-left=100px;  
};