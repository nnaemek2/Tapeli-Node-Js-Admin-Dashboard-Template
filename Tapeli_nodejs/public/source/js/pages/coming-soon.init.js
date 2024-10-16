/*
Template Name: Tapeli - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Countdown init js
*/


$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $(this).html(event.strftime(''
        + '<div class="coming-box">%D <span>Days</span></div> '
        + '<div class="coming-box">%H <span>Hours</span></div> '
        + '<div class="coming-box">%M <span>Minutes</span></div> '
        + '<div class="coming-box">%S <span>Seconds</span></div> '));
    });
});


class Countdown {
    initCountDown() {

        if (document.getElementById("days")) {
            // The data/time we want to countdown to
            var eventCountDown = new Date("March 1, 2028 16:37:52").getTime();

            // Run myfunc every second
            var myfunc = setInterval(function () {
                
                var now = new Date().getTime();
                var timeleft = eventCountDown - now;

                // Calculating the days, hours, minutes and seconds left
                var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

                // Result is output to the specific element
                document.getElementById("days").innerHTML = days
                document.getElementById("hours").innerHTML = hours
                document.getElementById("minutes").innerHTML = minutes
                document.getElementById("seconds").innerHTML = seconds
                
                // Display the message when countdown is over
                if (timeleft < 0) {
                    clearInterval(myfunc);
                    document.getElementById("days").innerHTML = ""
                    document.getElementById("hours").innerHTML = ""
                    document.getElementById("minutes").innerHTML = ""
                    document.getElementById("seconds").innerHTML = ""
                    document.getElementById("end").innerHTML = "00:00:00:00";
                }
            }, 1000);
        }
    }
    
    init() {
        this.initCountDown();
    }
}

new Countdown().init();