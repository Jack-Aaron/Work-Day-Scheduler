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
    console.log(fixedTime._i);

    // creates a FALSE but MOVING time which I can use to test the app
    var falseTime = moment().subtract(6, 'hours').format('HH')
    console.log(falseTime);

    function checkTime(time) {
        var nineAM = $("#9");
        var getBlockHours = [];
        for (let t = 0; t < 9; t++) {
            var checkBlockHour = document.body.children[1].children[t].children[1].id;
            console.log(checkBlockHour);
            getBlockHours.push(checkBlockHour);
        }

        


        nineAM.attr("class", "col-10 description present");
     //   console.log(getBlockHours);

    }

    checkTime(fixedTime._i);

});