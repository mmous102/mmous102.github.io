
function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

function validateCard(cardNum) {
  var a = document.getElementById(cardNum).value;
  var filter = /^[0-9]{14}$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}



var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  if ((date.getDay() === 1 || date.getDay() === 5) && $("#doctors option:selected").text() === "Dr. Anna")
    return [false];

  else if((date.getDay() === 4 || date.getDay() === 6) && $("#doctors option:selected").text() === "Dr. Peter")
    return [false];
  else if((date.getDay() === 2 || date.getDay() === 3) && $("#doctors option:selected").text() === "Dr. Nguyen")
    return [false];
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [unavailableDates.indexOf(string) === -1];
}


$(document).ready(function() {

 
  $("#phone").on("change", function() {
    if (!validatePhone("phone")) {
      alert("Wrong format for phone");
      $("#phone").val("xxxxxxxxxx");
      $("#phone").addClass("error");
    } else {
      $("#phone").removeClass("error");
    }
  });

  $("#debit").on("change", function() {
    if (!validateCard("debit")) {
      alert("Mauvais format de carte de crédit");
      $("#debit").val("xxxxxxxxxxxxxx");
      $("#debit").addClass("error");
    } else {
      $("#debit").removeClass("error");
    }
  });

  
  $("#dateInput").datepicker({
    dateFormat: setDateFormat,
    // no calendar before June 1rst 2020
    minDate: new Date('06/01/2020'),
    maxDate: '+4M',
    // used to disable some dates
    beforeShowDay: $.datepicker.noWeekends,
    beforeShowDay: disableDates
  });

 
  $("#debit").on("mouseenter", function() {
    $("#debit").addClass("showInput");
  });

  $("#debit").on("mouseleave", function() {
    $("#debit").removeClass("showInput");
  });

  $("#debit").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });
});
