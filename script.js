var today = moment().format("dddd, MMMM Do");
$('#currentDay').text(today);


var checkTime = function() {
    for (i=9; i < 18; i++) {
        var hour = moment().format("H");
        var hourInt = parseInt(hour);
        if (i < hourInt) {
            $('#'+i).addClass('past');
        }
        else if (i === hourInt) {
            $('#'+i).addClass('present');
        }
        else {
            $('#'+i).addClass('future');
        }
    }
};

checkTime();
setInterval(function() {
    checkTime();
    console.log("time checked");
}, 60000);