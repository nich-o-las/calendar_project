$(function () {
    var dayOfMonth = moment().date();
    var dayBox = $('#dayBox')

    // set the day to a string
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var dayOfWeek = days[moment().day()];

    //set the month to a string
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var month = months[moment().month()];
    var fullDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;
    var currentHour = moment().hour();

    //set the date at the top
    $('#currentDay').text(fullDate);
    for (var i = 9; i < 17; i++) {
        //create the ui elements
        var row = $(`<div class="row" id="${i}">`);
        var hour = $('<p class="hour">');

        // set the time (not military)
        var hourText = i % 12;
        if (hourText === 0) { hourText = 12 };
        hour.text(hourText + ":00");
        var textArea = $(`<textarea class="text-area" id="textarea-${i}" placeholder="enter your tasks">`);
        var saveBtn = $('<div class="saveBtn" data-hour=' + i + '>').text("save");
        //check to see if you've saved values
        var savedVal = localStorage.getItem(i);
        if(savedVal){
            textArea.val(savedVal);
        }
        row.append(hour, textArea, saveBtn)
        if (currentHour < i) {
            row.addClass("future");
        }
        if (currentHour === i) {
            row.addClass("present");
        }
        if (currentHour > i) {
            row.addClass("past");
        }
        dayBox.append(row);
    }

    //save textarea content to local storage
    $('.saveBtn').on('click', function (e) {
        var textToSet = $(`#textarea-${$(this).data('hour')}`).val();
        var textKey = $(this).data('hour').toString();
        localStorage.setItem(textKey, textToSet);
        location.reload();
    });

    
})






