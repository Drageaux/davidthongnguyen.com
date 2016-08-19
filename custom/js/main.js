function log(txt) {
    console.log(txt)
}

$(document).ready(function () {
    animateProgress();
});

/* animation check */
$(window).scroll(function () {
    animateProgress();
});

function animateProgress() {
    var eTop = $('#who').offset().top; // get the offset top of the element
    if (!$("#who").hasClass("loaded")) {
        if (eTop - $(window).scrollTop() <= 50) {
            $(".stats-page .ui.progress").progress({
                duration: 1000,
                text: ""
            });
            setTimeout(function () {
                $(".stats-page .ui.progress").progress("remove active");
            }, 1200);
            $("#who").addClass("loaded");
            log("location: " + eTop + $(window).scrollTop() + "px");
        }
    }
}

function sectionFade(direction) {
    if (direction == "left") {
        if (!$("#who-2").hasClass("hidden")) {
            $("#who-2").transition("fade left");
            setTimeout(function () {
                $("#who-1").transition("fade right");
            }, 500);
            $("#stats-left-btn").addClass("disabled");
            $("#stats-right-btn").removeClass("disabled");
        }
    } else if (direction == "right") {
        if (!$("#who-1").hasClass("hidden")) {
            $("#who-1").transition("fade right");
            setTimeout(function () {
                $("#who-2").transition("fade left");
            }, 500);
            $("#stats-right-btn").addClass("disabled");
            $("#stats-left-btn").removeClass("disabled");
        }
    }
}