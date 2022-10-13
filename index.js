$(document).ready(function() {

    let currentDay = $("header #currentDay");

    function initTimeSheet() {
        let today = moment();
        currentDay.text(today.format('llll'));
        renderTimeSheet(today, events);
    }

    function loadTimeSheet() {
        let hourStorage = JSON.parse(localStorage.getItem("events"));
        if (hourStorage) {
            events = hourStorage;
        }
    }

    let events = {};

    let hourlies = moment();

    function renderTimeSheet(today, events) {

        let timeSheet = $("div.container");
        let hourRow = moment(today).hour(8);
        timeSheet.empty();

        for (let i=1; i<10; i++) {

            let row = $("div").addClass("row");
            let hourClass = "";

            if (today.isBefore(hourRow, "hour")){
                hourClass = "future"
            } else if (today.isAfter(hourRow, "hour")) {
                hourClass = "past"
            } else {
                hourClass = "present"
            }

            
            let hourStyle = hourRow.format("ha");
            timeSheet.append(row)
            row.append($("<div>").addClass("col-2 hour").text(hourRow, "hour"))
            row.append($("<textarea>").addClass("col-8").text(events[hourStyle]))
            row.append($("<button>").addClass("col-2 saveBtn").html("<i class='fas fa-save'></i>").attr("aria-label", "Save").attr("id", hourRow.format("ha")));

            hourRow.add(1, "hour");

            hourlies = moment();
        }

    }

 

    initTimeSheet();
    loadTimeSheet();
    storeTimeSheet();

    function storeTimeSheet() {
        localStorage.setItem("events", JSON.stringify(events))
    }

})