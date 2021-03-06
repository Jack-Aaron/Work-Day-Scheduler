$(document).ready(function () {
    // getting HTML locations
    var $day = $("#currentDay");
    // getting today's date from Moments.js
    var today = moment().format('dddd, MMMM Do');
    // insert the day in above format into HTML
    $day.append(today);

    // load stored plans
    plans = JSON.parse(localStorage.getItem("plans"));

    // takes the current time, which is what the app will run off of
    var currentTime = moment().format('HH');
    currentTime = parseInt(currentTime);

    // creates a FIXED time which I can use to build the app
    var fixedTime = moment('13', 'HH');
    fixedTime = parseInt(fixedTime._i);

    // creates a FALSE but MOVING time which I can use to test the app
    var falseTime = moment().subtract(6, 'hours').format('HH')
    falseTime = parseInt(falseTime);

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
            if (h < 12) { meridiem = "AM"; }
            $newHour.text(h + meridiem);
            if (h > 12) { $newHour.text((h - 12) + meridiem); }
            // append this div
            $newRow.append($newHour);

            // creates 9 textareas inside parent row
            var $newTextArea = $("<textarea>");
            // give it text??
            if (plans !== null) {
                $newTextArea.text(plans[h - 9]);
            }

            // checks time before determining class
            if (h < time) { $newTextArea.attr("class", "col-7 col-lg-10 description past"); }
            else if (h === time) { $newTextArea.attr("class", "col-7 col-lg-10 description present"); }
            else { $newTextArea.attr("class", "col-7 col-lg-10 description future"); }
            // adds an ID of "h"
            $newTextArea.attr("id", h)
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

    createTimeBlocks(currentTime);



    $(".saveBtn").on("click", function (event) {
        var slot = parseInt(event.target.parentElement.parentElement.children[1].id - 9);
        plans[slot] = event.target.parentElement.parentElement.children[1].value;
        console.log(plans);
        localStorage.setItem("plans", JSON.stringify(plans));

    });
});