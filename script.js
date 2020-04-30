$(document).ready(function () {

    // getting HTML locations
    var day = $("#currentDay");
    // getting today's date from Moments.js
    var today = moment().format('dddd, MMMM Do');
    // insert the day in above format into HTML
    day.append(today);

    // takes the current time, which is what the app will run off of
    var currentTime = moment().format('HH');
    currentTime = parseInt(currentTime);
    console.log(currentTime);

    // creates a FIXED time which I can use to build the app
    var fixedTime = moment('13', 'HH');
    fixedTime = parseInt(fixedTime._i);
    console.log(fixedTime);

    // creates a FALSE but MOVING time which I can use to test the app
    var falseTime = moment().subtract(6, 'hours').format('HH')
    falseTime = parseInt(falseTime);
    console.log(falseTime);

    function createTimeBlocks(time) {
        for (let h = 9; h < 18; h++) {
            // creates 9 rows inside parent container
            var $newRow = $("<div>");
            $newRow.attr("class", "row time-block")
           // $newRow.attr("data-hour", h);
            $(".container").append($newRow);

            // creates 9 size-1 columns showing the hour inside parent row
            var $newHour = $("<div>");
            $newHour.attr("class", "col-2 col-lg-1 hour");
            // AM or PM?
            var meridiem = "PM";
            $newHour.text(h + meridiem);
            if (h < 12) {meridiem = "AM";}
            else if (h > 12) {$newHour.text((h - 12) + meridiem);}
            // append this div
            $newRow.append($newHour);

            // creates 9 textareas inside parent row
            var $newTextArea = $("<textarea>");
            // checks time before determining class
            console.log(h);
            console.log(time);
            if (h < time) {$newTextArea.attr("class", "col-7 col-lg-10 description past");}
            else if (h === time) {$newTextArea.attr("class", "col-7 col-lg-10 description present");}
            else {$newTextArea.attr("class", "col-7 col-lg-10 description future");}
            // writes the textarea with correctly time-coded class 
            $newRow.append($newTextArea);

            // creates 9 size-1 columns with save buttons inside parent row
            var $newSaveButton = $("<div>");
            $newSaveButton.attr("class", "col-3 col-lg-1 saveBtn");
            $newRow.append($newSaveButton);

            // creates "save" icons within each save button column
            var $addSaveIcon = $("<i>");
            $addSaveIcon.attr("class", "fas fa-save");
            $newSaveButton.append($addSaveIcon);
        }
    }

    createTimeBlocks(fixedTime);

    $("i").on("click", function(event) {
        var $getText = $("event.target.textarea.value");
        this.value = "";
      //  var storedText = $getText.value;
        localStorage.setItem("getText", JSON.stringify($getText));
      });

});