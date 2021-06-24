
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;

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
      alert("Wrong credit card format");
      $("#debit").val("xxxxxxxxxxxxxx");
      $("#debit").addClass("error");
    } else {
      $("#debit").removeClass("error");
    }
  });

  
  
$( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

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
