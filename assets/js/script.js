$(document).ready(function(){
  
  $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })  

  $("#enviarCorreo").click(function(){
      alert("El correo fue enviado correctamente...");
    });
    
  $("#on").dblclick(function(){
    $(this).css({
      "color": "red"
    });
  });

  $("#on_2").dblclick(function(){
    $(this).css({
      "color": "red"
    });
  });
    
  $("#toggle,#toggle_2,#toggle_3").click(function() {
    $(this).toggle();
  });
});



