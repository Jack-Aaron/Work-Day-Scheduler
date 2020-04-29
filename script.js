$(document).ready(function () {

    // getting HTML location
    var day = $("#currentDay");
    // getting today's date from Moments.js
    var today = moment().format('dddd, MMMM Do');
    // insert the day in above format into HTML
    day.append(today);

    // takes the current time, which is what the app will run off of
    var currentTime = moment().format('HH');
    console.log(currentTime);

    // creates a FIXED time which I can use to build the app
    var fixedTime = moment('13', 'HH');
    fixedTime = fixedTime._i;
    console.log(fixedTime);

    // creates a FALSE but MOVING time which I can use to test the app
    var falseTime = moment().subtract(6, 'hours').format('HH')
    console.log(falseTime);

    function createTimeBlocks() {
        var timeBlockText = ["9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM"]
        for (let h = 0; h < 9; h++) {
            // creates 9 rows inside parent container
            var $newRow = $("<div>");
            $newRow.attr("class", "row time-block")
           // $newRow.attr("data-hour", h);
            $(".container").append($newRow);

            // creates 9 size-1 columns showing the hour inside parent row
            var $newHour = $("<div>");
            $newHour.attr("class", "col-1 hour");
            $newHour.text(timeBlockText[h]);
            $newRow.append($newHour);

            // creates 9 textareas inside parent row
            var $newTextArea = $("<textarea>");
            $newTextArea.attr("class", "col-10 description");
            $newRow.append($newTextArea);

            // creates 9 size-1 columns with save buttons inside parent row
            var $newSaveButton = $("<div>");
            $newSaveButton.attr("class", "col-1 saveBtn");
            $newRow.append($newSaveButton);


        }
    }

    createTimeBlocks();

});

  /*  function checkTime(time) {
     //   var nineAM = $("#9");
      //  var getBlockHours = [];
        for (let t = 0; t < 9; t++) {
            var checkBlockHour = document.body.children[1].children[t].children[1].id;
            console.log(checkBlockHour);
            console.log(checkBlockHour < time);
         //   getBlockHours.push(checkBlockHour);
           if (checkBlockHour < time /* <--CHANGE THIS!  ) {
              getBlockHours[t].attr("class", "col-10 description past");
        //    }
     //   else {getBlockHours[t].attr("class", "col-10 description present")}


         //   console.log(checkBlockHour);
          //  getBlockHours.push(checkBlockHour);
        }

        


    //    nineAM.attr("class", "col-10 description present");
     //   console.log(getBlockHours);

    }

    checkTime(currentTime);


*/