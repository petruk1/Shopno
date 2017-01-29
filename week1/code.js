
    function toggle_visibility(ac,dis) {
       var ac = document.getElementById(ac);
       var dis = document.getElementById(dis);

       if(ac.style.display == 'block')
          ac.style.display = 'none';
       else
          ac.style.display = 'block';

       if(dis.style.display == 'none')
          dis.style.display = 'block';
       else
          dis.style.display = 'none';
    }
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
//slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("progress");

  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     y[i].src ="images/p_1.png"  
  }
  x[slideIndex-1].style.display = "inline-block"; 
  y[slideIndex-1].src = "images/p_0.png";  
}