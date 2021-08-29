var savedTasks = {};

var today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today);


var checkTime = function() {
    var hour = moment().format("H");
    var hourInt = parseInt(hour);
    for (i=9; i < 18; i++) {
        if (i < hourInt) {
            $('#'+i).removeClass('past present future');
            $('#'+i).addClass('past');
        }
        else if (i === hourInt) {
            $('#'+i).removeClass('past present future');
            $('#'+i).addClass('present');
        }
        else {
            $('#'+i).removeClass('past present future');
            $('#'+i).addClass('future');
        }
    }
};

$(".container").on("click", "button", function() {
    var clickEl = $(this).parent().children();
    var textAreaID = clickEl[1].id;
    var text = $('#'+textAreaID).val().trim();
    
    // checks if string is blank and does not add it to the array if it is
    if (!text) {
        console.log("blank");
    }
    else {
        var key = textAreaID;
        savedTasks[key] = text;
        console.log(savedTasks);
    }
    
});

checkTime();
setInterval(function() {
    checkTime();
}, 60000);