$(document).ready(function () {
var day = $("#currentDay");
var today = moment().format('dddd, MMMM Do'); 
console.log(today);
day.append(today);
});