var dayOfMonth = moment().date();
var dayBox = $('#dayBox')

// set the day to a string
var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var dayOfWeek = days[moment().day()];
//set the month to a string
var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
var month = months[moment().month()];
var fullDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;
var currentHour = moment().hour();
$('#currentDay').text(fullDate);
for(var i = 9; i < 17; i++){
    // get the current time
    //create the ui elements
    var row = $(`<div class="row" id="${i}">`);
    var hour = $('<p class="hour">');
    // set the time (not military)
    var hourText = i % 12;
    if(hourText === 0){hourText = 12};
    hour.text(hourText);
    var textArea = $('<textarea placeholder="enter your tasks">');
    var saveBtn = $('<div class="saveBtn">').text("save");
    row.append(hour,textArea,saveBtn)
    if(currentHour < i){
        row.addClass("future");
    }
    if(currentHour === i){
        row.addClass("present");
    }
    if(currentHour > i){
        row.addClass("past");
    }
    dayBox.append(row);
}


