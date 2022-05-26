function initMap(){
    var  pos= { lat:51.09058967985745 , lng: 71.41105401005916};
    var opt= {
        center:{ lat:51.09058967985745 , lng: 71.41105401005916},
        zoom: 16
    }
    var myMap = new google.maps.Map(document.getElementById("map"), opt);
    var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
    })
}
function scrollWin() {
    window.scrollBy(0, 1010);
}