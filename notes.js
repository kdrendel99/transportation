function check(){
  var a=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question1.value;
  if (q1=="option1") {a++}
  //question 1 bottom logic
  if (q2=="option2") {a++}
  
  var b=0;
  var q1=document.quiz.question2.value;
  var q2=document.quiz.question2.value;
  if (q1=="option2") {b+++}
  //question 2 bottom logic
  if (q2=="option2") {b+++}



    if (a + b =2) {
      $('#fortune1').show();
      result = "#fortune1";
    } 
    else if (a + b =3) {
      $('#fortune2').show();
      result = "#fortune2";
    }
    else if (a + b=4) {
      $('#fortune3').show();
      result = "#fortune3";
    }
    else a + b > 4 {
      $('#fortune4').show();
      result = "#fortune4";
    }
  };



  <div class="container">
  <div id="bad">
    <h1>You got fortune 1!</h1>
  </div>

  <div id="good">
    <h1>You got fortune2!</h1>
  </div> 

  <div id="fortune3">
    <h1>You got Python!</h1>
  </div>
  <div id="fortune4">
    <h1>You got fortune 4!</h1>
  </div>
</div>