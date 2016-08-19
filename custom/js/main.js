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