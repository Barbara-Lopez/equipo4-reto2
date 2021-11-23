/*window.onload = function() {
    let close=document.getElementsByClassName("closebtn");
    close.addEventListener("click", closeNav);
    let open=document.getElementsByClassName("openbtn");
    open.addEventListener("click", openNav);

  };*/

$( document ).ready(function() {
    $(".closebtn").click(function() {
      $("#mySidebar").animate({width: '0px'});
    });
    $(".openbtn").click(function() {
      $("#mySidebar").animate({width: '250px'});
    });
  
});


