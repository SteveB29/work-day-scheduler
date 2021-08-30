var savedTasks = {};

var checkTime = function() {
    // updates header with correct day
    var today = moment().format("dddd, MMMM Do");
    $('#currentDay').text(today);

    // checks current hour against task hour and apply correct styling
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

// loads the tasks from localstorage on page open
var loadTasks = function() {
    var taskStorage = localStorage.getItem('tasks');
    // if no tasks in localStoage, does nothing
    if (!taskStorage) {
    }
    // loads the tasks from localStorage and populates the page
    else {
        savedTasks = JSON.parse(taskStorage);
        for(var i in savedTasks) {
            $('#'+i).text(savedTasks[i]);
        }
    }
};

// saves tasks to object and localStorage on save button click
$(".container").on("click", "button", function() {
    // finds all the children of the parent element of the save button
    var clickEl = $(this).parent().children();
    // gets the ID of the textarea
    var textAreaID = clickEl[1].id;
    // gets the text of the textarea of the save button clicked
    var text = $('#'+textAreaID).val().trim();
    
    // checks if the text entered is blank
    if (!text) {
        // if there was a task in tasks object, deletes that key/pair. Otherwise does nothing
        if(savedTasks[textAreaID]) {
            delete savedTasks[textAreaID];
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
    }
    // adds task to savedTasks object and stores it in localstorage
    else {
        savedTasks[textAreaID] = text;
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }
    
});

// runs load tasks to load tasks from localstorage on page load
loadTasks();

// checks the time to apply styling to tasks on page load 
checkTime();

// runs checkTime every minute to keep page styling and header updated
setInterval(function() {
    checkTime();
}, 60000);