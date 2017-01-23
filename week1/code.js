
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