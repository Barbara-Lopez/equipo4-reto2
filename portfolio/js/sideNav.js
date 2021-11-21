/*window.onload = function() {
    let close=document.getElementsByClassName("closebtn");
    close.addEventListener("click", closeNav);
    let open=document.getElementsByClassName("openbtn");
    open.addEventListener("click", openNav);

  };*/

$( document ).ready(function() {
    $(".closebtn").click(function() {
        closeNav();
    });
    $(".openbtn").click(function() {
        openNav();
    });
  
});


function openNav() {
  $("#mySidebar").animate({width: '250px'});
  $("body").animate({marginLeft: '250px'});
  }
  
  function closeNav() {
    $("#mySidebar").animate({width: '0px'});
    $("body").animate({marginLeft: '0px'});
  }