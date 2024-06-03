// Haal de modal
var modal = document.getElementById("myModal");

// Haal de <span> element die de modal sluit
var span = document.getElementsByClassName("close")[0];

// Wanneer de gebruiker op de knop klikt, open de modal 
function openModal() {
  modal.style.display = "block";
}

// Wanneer de gebruiker op <span> (x) klikt, sluit de modal
span.onclick = function() {
  modal.style.display = "none";
}

// Wanneer de gebruiker ergens buiten de modal klikt, sluit het
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}