//Finner alle kolonnelementer, og hoyden til elementene
var kolonner = document.getElementsByClassName("kolonne");
var kolHeight = kolonner[0].offsetHeight;

//Sjekker om elementet er i vinduet til enheten
function inViewport(element) {
   var pos = element.getBoundingClientRect();
   var vinduhoyde = window.innerHeight;

   // Returnerer true hvis hele kolonneelementet får plass i viewport
   var minGap = vinduhoyde - kolHeight;
   return (pos.top < minGap && pos.top > 0);
}

document.addEventListener('scroll', function sjekkElement(event) {
   for (var i = 0; i < kolonner.length; i++) {
      if (inViewport(kolonner[i])) {
	 if (!(kolonner[i].classList.contains("visTekst"))) {
	    kolonner[i].classList.add("visTekst");
	 }
      } else {
	 kolonner[i].classList.remove("visTekst");
      }
   }
});
