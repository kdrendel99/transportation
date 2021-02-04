














$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    $("#fortune1").show();
    $("input:checkbox[name=option1]:checked").each(function(){
      const workTransportationMode = $(this).val();
      $('#fortune1').append(workTransportationMode + "<br>");
    });
    $("#fortune2").show();
    $("input:checkbox[name=option2]:checked").each(function(){
      const funTransportationMode = $(this).val();
      $('#fortune2').append(funTransportationMode + "<br>");
    });
    $('#fortune-teller').hide();
  });
});