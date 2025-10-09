function initMap() {
  const local = { lat: -23.5558, lng: -46.6396 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: local,
  });
  new google.maps.Marker({ position: local, map });
}
