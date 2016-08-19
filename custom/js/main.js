function log(txt) {
    console.log("location : " + txt + "px")
}

$(function () {

    /* animation check */
    var eTop = $('#who').offset().top; //get the offset top of the element
    $(window).scroll(function () { //when window is scrolled
        if (!$("#who").hasClass("loaded")) {
            if (eTop - $(window).scrollTop() <= 50) {
                function animateProgress() {
                    setTimeout(function () {
                        $(".stats-page .ui.progress").progress({
                            duration: 1000,
                            text: ""
                        });
                    }, 1200);
                }
                animateProgress(function () {
                    $(".stats-page .ui.progress").progress("remove active");
                    $("#who").addClass("loaded");
                    log(eTop - $(window).scrollTop()); //position of the ele w.r.t window
                })
            }
        }
    });
});