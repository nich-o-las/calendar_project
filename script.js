var dayOfWeek = moment().day();
var month = moment().month();;
var dayOfMonth = moment().date();

// set the day to a string
switch (dayOfWeek) {
    case 0:
        dayOfWeek = "Sunday";
        break;
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case 6:
        dayOfWeek = "Saturday";
}

//set the month to a string
switch (month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}
var fullDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;
$('#currentDay').text(fullDate);

94

$('.row').on('keypress', 'textarea', function (e) {
        if(e.which === 13){
            console.log($(this).id)
        //localStorage.setItem($this.parent().id$(this).textContent
        //Enable the textbox again if needed.
        $(this).removeAttr("disabled");
        }
});