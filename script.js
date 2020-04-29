$(document).ready(function () {

    // getting HTML location
    var day = $("#currentDay");
    // getting today's date from Moments.js
    var today = moment().format('dddd, MMMM Do');
    // insert the day in above format into HTML
    day.append(today);

    // takes the current time, which is what the app will run off of
    var currentTime = moment().format('LT'); 
    console.log(currentTime);

    // creates a FIXED time which I can use to build the app
    var fixedTime = moment('1:31 PM', 'hh:mm A');
    console.log(fixedTime._i);

    // creates a FALSE but MOVING time which I can use to test the app
    var falseTime = moment().subtract(6, 'hours').format('hh:mm A')
    console.log(falseTime);

});