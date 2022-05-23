txt = 'SPENDLESS - We help you buy and sell in an instant!!!!';

var i = 0;
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("show").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  if(i == txt.length)
  {
      i = 0;
      document.getElementById("show").innerHTML = "";
  }
}


    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    document.getElementById("close").onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

