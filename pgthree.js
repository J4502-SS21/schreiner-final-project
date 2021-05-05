"use strict";

var allInputElements = document.getElementsByTagName('input');
var submitButton = document.getElementById("submit");
var answerElement = document.getElementById("answerTally");

var numberOfCorrectAnswers;

var eachInput;

submitButton.addEventListener('click', function() {

  numberOfCorrectAnswers = 0;
  for (var i = 0; i < allInputElements.length; i++) {
      if (allInputElements[i].type === 'radio' && allInputElements[i].checked && allInputElements[i].classList.contains('correct')) {
        numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
      }
  }

  answerElement.innerHTML = "You got <span>" + numberOfCorrectAnswers + "</span> correct!";

});
