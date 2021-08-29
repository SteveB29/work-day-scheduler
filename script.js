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

checkTime();
setInterval(function() {
    checkTime();
    console.log("time checked");
}, 60000);