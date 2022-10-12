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

    initTimeSheet();
    loadTimeSheet();

    

})