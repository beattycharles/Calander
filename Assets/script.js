// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage
$('.time-block').each(function(){

  var currentTime = dayjs().hour();
  var changeColor = $(this).attr('id');

  if (changeColor == currentTime) { $(this).addClass("present").removeClass('future').removeClass('past');
}
else if(changeColor > currentTime) { $(this).addClass("future").removeClass('present').removeClass('past');
} 
else { $(this).addClass("past").removeClass('future').removeClass('present');
};

  $(".time-block").on("click", ".saveBtn", function () {
    var key = $(this).parent().attr("id")
    var input = $(this).siblings('.description').val()

    localStorage.setItem(key, input);
    console.log(key, input);

    var loadEvents = function(){
      for (var i=8; i < 18; i++)
      {
        var eventBlock = $("input" + i + "]");
        eventBlock.children(".description").text(localStorage.getItem(i));
      }
    };
    loadEvents();
    //get key and input from Appucation and put back into box.
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var loadEvents = function () {
    for (var i = 0; i < 8; i++) {
        var selectEventBlock = $("description" + i);
        selectEventBlock.text(localStorage.getItem(i));
    }
  };
  
  loadEvents();
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("ddd, MMM, YYYY h:mm A "))
});
});
// code each hour
//function to go though hours to make if past prensent or future
