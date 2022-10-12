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

        for (let i=1; i<10; i++) {

        }

    }

    renderTimeSheet();
    initTimeSheet();
    loadTimeSheet();
    storeTimeSheet();

    function storeTimeSheet() {
        localStorage.setItem("events", JSON.stringify(events))
    }

})