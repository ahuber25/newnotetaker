$(document).ready(function() {

    let currentDay = $("header #currentDay");

    function initTimeSheet() {
        let today = moment();
        currentDay.text(today.format('llll'));
        renderTimeSheet(today, events);
    }

    let events = {};

    let hourlies = moment();

    function renderTimeSheet(today, events) {

        let timeSheet = $("div.container");
        let hourRow = moment(today).hour(8);
        timeSheet.empty()

        for (let i=1; i<10; i++) {

            let row = $("<div>").addClass("row");
            let classedUp = "";
            let hourStyle = hourRow.format("h a");
            hourRow.add(1, "hour");
            hourlies = moment();

            if (today.isBefore(hourRow, "hour")){
                classedUp = "future"
            } else if (today.isAfter(hourRow, "hour")) {
                classedUp = "past"
            } else {
                classedUp = "present"
            }
            
            timeSheet.append(row)
            row.append($("<div>").addClass("col-2 hour").text([hourStyle]))
            row.append($("<textarea>").addClass(`col-8 ${classedUp}`).text(events[hourStyle]))
            row.append($("<button>").addClass("col-2 saveBtn").html("<i class='fas fa-save'></i>").attr("aria-label", "Save").attr("id", hourRow[hourStyle]));

        }

    }

    function loadTimeSheet() {
        let hourStorage = JSON.parse(localStorage.getItem("events"));
        if (hourStorage) {
            events = hourStorage;
        }
    }

    loadTimeSheet();
    initTimeSheet();
    

    function storeTimeSheet() {
        localStorage.setItem("events", JSON.stringify(events));
    };

    $(document).on("click", "button.saveBtn", function (event) {
        let sheet = event.currentTarget.parentElement.children[1].value;
        events[event.currentTarget.id] = sheet;
        storeTimeSheet();
    });


})