$(document).ready(function() {

    let currentDay = $("header #currentDay");

    function initTimeSheet() {
        let today = moment();
        currentDay.text(today.format('llll'));
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

            let hourClass = "";

            if (today.isBefore(hourRow, "hour")){
                hourClass = "future"
            } else if (today.isAfter(hourRow, "hour")) {
                hourClass = "past"
            } else {
                hourClass = "present"
            }

            let row = $("div").addClass("row");
            let hourStyle = hourRow.format("ha");
            timeSheet.append(row)
            
        }

    }

 

    initTimeSheet();
    loadTimeSheet();
    storeTimeSheet();

    function storeTimeSheet() {
        localStorage.setItem("events", JSON.stringify(events))
    }

})