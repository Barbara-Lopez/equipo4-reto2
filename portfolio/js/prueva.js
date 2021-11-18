$(document).ready(
    function (){
        
        $.ajax({
        type: "post",
        url: "../php/cogerProductos.php",
        data: {},
        })
        .done(function(data){
            var json_obj = JSON.parse(data); // lo convierte a Array
            alert(json_obj.length);
        }); 
        
});

