// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
$('.time-block').each(function(){

  var currentTime = dayjs().hour();
  var changeColor = $(this).attr('id');

  if (changeColor == currentTime){ $(this).addClass("present").removeClass('future').removeClass('past');
}
else if(changeColor > currentTime){ $(this).addClass("future").removeClass('present').removeClass('past');
} 
else (changeColor < currentTime){$(this).addClass("past").removeClass('future').removeClass('present');
}
  $(".time-block").on("click", ".saveBtn", function () {
    compareTime();
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function compareTime() {
  console.log(dayjs().format("HH"));
  };
//compare id to current hour
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("ddd, MMM, YYYY h:mm A "))
});
});
// code each hour
//function to go though hours to make if past prensent or future
