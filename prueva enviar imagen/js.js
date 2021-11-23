$(document).ready(function() {
    $(".upload").on('click', function() {
        var formData = new FormData();
        var files = $('#image')[0].files[0];
        formData.append('file',files);
        $.ajax({
            url: 'enviarFormBaseDatos.php',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function() {
                alert("imagen enviada")
            }
        });
        return false;
    });
});