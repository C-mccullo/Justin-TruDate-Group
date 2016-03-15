

$(function() {

  $("main").hide(); //Hides main content to start
  $(".startQuiz").on("click", function() {
    $(".landingPage").hide(); 
    $("main").fadeIn();
  }); // Fades out landing page, fades in main content

  var question = 1;
  var justin1 = 0;
  var justin2 = 0;
  var justin3 = 0;
  var justin4 = 0;
  var justin5 = 0;
  var result = "";
  var answer = 1;
  var choice;

  var totalQuestions = $(".question-container").length;
  var currentQuestion = 0;

  $answer = $(".answer");
   //Hides answers

  $question = $(".question-container");
  $question.hide();
  $($question.get(currentQuestion)).fadeIn();

  $("button.next").on("click", function(e) {
      e.preventDefault();
      $($question.get(currentQuestion)).fadeOut(function() {
        currentQuestion = currentQuestion + 1;

        if (currentQuestion == totalQuestions - 1) {

          $($question.get(currentQuestion)).fadeIn();
          $('button.next').addClass('hide');
          $('.submitButton').removeClass('hide')

        }
        else {

              $($question.get(currentQuestion)).fadeIn();
              ;
              // console.log("nextQuestion");
        }
      }); // End of fade-in/fade-out function     

    }); // End of next button callback function
  
    $('input').on('click', function() {
        
        console.log($(this).val());

    });
    $("button.reset").on("click", function() {
      location.reload();
    });

    $(".submitButton").on("click", function(e) {
      e.preventDefault();
      console.log("it worked!");

      for (question = 1; question < 8; question++) {
          // Increments input name 
      var q = document.forms["quiz"].elements["q" + question];
    	    for (var i = 0; i < q.length; i++) {
    	       if (q[i].checked) {
    	       choice = q[i].value;
    	       }
    	   }
            // Keeps score of each choice value and saves it to the variable
    	      if (choice == "justin1") {
    	         justin1++;
               console.log(choice);
    	      }
    	      else if (choice == "justin2") {
    	         justin2++;
               console.log(choice);
    	      }
    	      else if (choice == "justin3") {
    	         justin3++;
               console.log(choice);
    	      }
    	      else if (choice == "justin4") {
    	         justin4++;
               console.log(choice);
    	      }
    	      else if (choice == "justin5") {
    	         justin5++;
               console.log(choice);
    	      }
    	   }
    	   	if (justin1 >= justin2 && justin1 >= justin3 && justin1 >= justin4 && justin1 >= justin5 && justin1 > 0) {
    	            // justin1 is the highest
    	            result = "feministJustin";
    	         }
    	         else if (justin2 >= justin1 && justin2 >= justin3 && justin2 >= justin4 && justin2 >= justin5 && justin2 > 0) {
    	            // justin2 is the highest
    	            result = "fratBoyJustin";
    	         }
    	         else if (justin3 >= justin1 && justin3 >= justin2 && justin3 >= justin4 && justin3 >= justin5 && justin3 > 0) {
    	            // justin3 is the highest
    	            result = "badBoyJustin";
    	         }
    	         else if (justin4 >= justin1 && justin4 >= justin2 && justin4 >= justin3 && justin4 >= justin5 && justin4 > 0) {
    	            // justin4 is the highest
    	            result = "rockstarJustin";
    	         }
	            else if (justin5 >= justin1 && justin5 >= justin2 && justin5 >= justin3 && justin5 >= justin4 && justin5 > 0) {
	               // justin5 is the highest
	               result = "relatableJustin";
    	         }
    	         else {
    	            result = "oops";
    	         }
    	         console.log(result); //Assigns result 


             $("body").on("click", ".submitButton", function() {

              console.log(result);

              $('.form-container').addClass('hide');
              $('.form-container').removeClass('flex-column');
              $("article").filter("." + result).removeClass('hide');

             }); //On click of submitButton, hides the quiz, and shows the article with the resulting Trudeau

  });
});
