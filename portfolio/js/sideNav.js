window.onload = function() {
    let close=document.getElementsByClassName("closebtn");
    close.addEventListener("click", closeNav);
    let open=document.getElementsByClassName("openbtn");
    open.addEventListener("click", openNav);

  };

/*$( document ).ready(function() {
    $(".closebtn").click(function() {
        closeNav();
    });
    $(".openbtn").click(function() {
        openNav();
    });
  
});*/


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }