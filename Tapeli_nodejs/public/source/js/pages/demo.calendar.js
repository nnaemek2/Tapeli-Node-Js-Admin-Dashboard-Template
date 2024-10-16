/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Datatable and Calendar Init JS
*/

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    function getInitialView() {
        if(window.innerWidth >=768 && window.innerWidth < 1200) {
            return 'timeGridWeek';
        } else if(window.innerWidth <= 768) {
            return 'listMonth';
        } else {
            return 'dayGridMonth';
        }
    }

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'local',
        editable: true,
        selectable: true,
        initialView: getInitialView(),
        themeSystem: 'bootstrap',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialDate: '2018-01-12',
        weekNumbers: true,
        dayMaxEvents: true,
        handleWindowResize: true,
        events: [
            {
                title: 'All Day Event',
                start: '2018-01-01',
                allDay: false, 
                className: 'event-warning border-warning'
            },
            {
                title: 'Long Event',
                start: '2018-01-07',
                end: '2018-01-10',
                className: 'event-secondary border-secondary'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2018-01-09T16:00:00',
                className: 'event-danger border-danger'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2018-01-16T16:00:00',
                className: 'event-primary border-primary'
            },
            {
                title: 'Conference',
                start: '2018-01-24',
                end: '2018-01-27',
                className: 'event-primary border-primary'
            },
            {
                title: 'Meeting',
                start: '2018-01-12T10:30:00',
                end: '2018-01-12T12:30:00',
                className: 'event-primary border-primary'
            },
            {
                title: 'Lunch',
                start: '2018-01-12T12:00:00',
                className: 'event-secondary border-secondary'
            },
            {
                title: 'Meeting',
                start: '2018-01-12T14:30:00',
                className: 'event-danger border-danger'
            },
            {
                title: 'Happy Hour',
                start: '2018-01-12T17:30:00',
                className: 'event-warning border-warning'
            },
            {
                title: 'Dinner',
                start: '2018-01-12T20:00:00',
                className: 'event-info border-info'
            },
            {
                title: 'Birthday Party',
                start: '2018-01-13T07:00:00',
                className: 'event-dark border-dark'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-01-28',
                className: 'event-primary border-primary'
            }
        ],
    });
    calendar.render();
});