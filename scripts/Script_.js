function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

function initMap() {
  var location = { lat: -34.02657887879238, lnt: 18.63105968556367 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
}
