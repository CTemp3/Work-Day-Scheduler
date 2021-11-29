var schedule = {};

// initialise session upon loading
var sessionInit = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"))

};

// function for saving schedule
var saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

// edit a paragraph element
$(".list-group").on("click", "p", function() {
    var text = $(this)
      .text()
      .trim();
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

  // save edits
$(".list-group").on("blur", "textarea", function() {
    // get the text area's current value/text
    var text = $(this)
      .val()
      .trim();

    // save to local storage
    schedule.text = text;
    saveSchedule();
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("col-10 past-time list-group-item")
      .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
});

sessionInit();