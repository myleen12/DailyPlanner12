var currentDate = new Date();
var currentHour = currentDate.getHours();

console.log(currentHour);

$(document).ready(function () {
  var current = dayjs(); 
  $('#currentDay').text(current.format('[Today is] MMMM dddd D, YYYY'));

  $(".saveBtn").click(function () {
    var timeBlockId = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem("timeBlockId" + timeBlockId, value);
  });

  var nineAM = parseInt($("#9").attr('id'));
  var tenAM = parseInt($("#10").attr('id'));
  var elevenAM = parseInt($("#11").attr('id'));
  var twelvePM = parseInt($("#12").attr('id'));
  var onePM = parseInt($("#13").attr('id'));
  var twoPM = parseInt($("#14").attr('id'));
  var threePM = parseInt($("#15").attr('id'));
  var fourPM = parseInt($("#16").attr('id'));
  var fivePM = parseInt($("#17").attr('id'));

  function compareHours(hour, id) {

    if (hour < currentHour) {
      $(id).addClass("past");
    } else if (hour === currentHour) {
      $(id).addClass("present");
    } else {
      $(id).addClass("future");
    }

  }

  compareHours(nineAM, "#9");
  compareHours(tenAM, "#10");
  compareHours(elevenAM, "#11");
  compareHours(twelvePM, "#12");
  compareHours(onePM, "#13");
  compareHours(twoPM, "#14");
  compareHours(threePM, "#15");
  compareHours(fourPM, "#16");
  compareHours(fivePM, "#17");

  function loadSavedSchedule() {
    var loadedSchedule_9 = localStorage.getItem("timeBlockId9");
    var loadedSchedule_10 = localStorage.getItem("timeBlockId10");
    var loadedSchedule_11 = localStorage.getItem("timeBlockId11");
    var loadedSchedule_12 = localStorage.getItem("timeBlockId12");
    var loadedSchedule_13 = localStorage.getItem("timeBlockId13");
    var loadedSchedule_14 = localStorage.getItem("timeBlockId14");
    var loadedSchedule_15 = localStorage.getItem("timeBlockId15");
    var loadedSchedule_16 = localStorage.getItem("timeBlockId16");
    var loadedSchedule_17 = localStorage.getItem("timeBlockId17");
   
    $("#9 textarea").val(loadedSchedule_9);
    $("#10 textarea").val(loadedSchedule_10);
    $("#11 textarea").val(loadedSchedule_11);
    $("#12 textarea").val(loadedSchedule_12);
    $("#13 textarea").val(loadedSchedule_13);
    $("#14 textarea").val(loadedSchedule_14);
    $("#15 textarea").val(loadedSchedule_15);
    $("#16 textarea").val(loadedSchedule_16);
    $("#17 textarea").val(loadedSchedule_17);
  }

  loadSavedSchedule();

  
  
});
