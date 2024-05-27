
function openNav() {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("overlay").style.display = "block";
    document.getElementsByClassName("open-btn")[0].style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.getElementsByClassName("open-btn")[0].style.display = "block";
    
  }
  function openUser() {
    document.getElementById("userbar").style.width = "450px";
    document.getElementById("pantalla").style.display = "block";
    document.getElementsByClassName("abrir-user")[0].style.display = "none";
    document.getElementsByClassName("open-contacto")[0].style.display = "none";
  }
  
  function closeUser() {
    document.getElementById("userbar").style.width = "0";
    document.getElementById("pantalla").style.display = "none";
    document.getElementsByClassName("abrir-user")[0].style.display = "block"; 
    document.getElementsByClassName("open-contacto")[0].style.display = "block"; 
  }

  function openContacto() {
    document.getElementById("contactobar").style.width = "400px";
    document.getElementById("pantalla2").style.display = "block";
    document.getElementsByClassName("open-contacto")[0].style.display = "none";
    document.getElementsByClassName("abrir-user")[0].style.display = "none";
  }
  
  function closeContacto() {
    document.getElementById("contactobar").style.width = "0";
    document.getElementById("pantalla2").style.display = "none";
    document.getElementsByClassName("open-contacto")[0].style.display = "block"; 
    document.getElementsByClassName("abrir-user")[0].style.display = "block";
  }
