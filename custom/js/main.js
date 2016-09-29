function log(txt) {
    console.log(txt)
}

$(document).ready(function () {
    thumbnailCarousel("#cakebook-features-carousel");
});

$(window).on("load", function () {
    var controller = new ScrollMagic.Controller();
    builderIntro(controller);
    builderWho(controller);
});


function builderIntro(controller) {
    var tween = new TweenMax.fromTo("#intro .ui.button", 0.6, {y: 20}, {y: 0, autoAlpha: 1});
    var scene = new ScrollMagic.Scene({
        triggerElement: "#intro .pull-left",
        offset: -100,
        reverse: false
    }).setTween(tween);

    controller.addScene(scene);
}


function builderWho(controller) {
    var tweenEdu = new TweenMax.from("#who #who-edu p", 0.6, {x: -30, autoAlpha: 0});
    var tweenBio = new TweenMax.from("#who #who-bio p", 0.6, {x: -30, autoAlpha: 0});

    var sceneEdu = new ScrollMagic.Scene({triggerElement: "#who-edu", offset: -100, reverse: false}).setTween(tweenEdu);
    var sceneBio = new ScrollMagic.Scene({triggerElement: "#who-bio", offset: -100, reverse: false}).setTween(tweenBio);
    var sceneAttr = new ScrollMagic.Scene({
        triggerElement: "#who-attributes",
        offset: -100,
        reverse: false
    }).on("start", animateProgress);

    controller.addScene([
        sceneEdu,
        sceneBio,
        sceneAttr
    ])
}


function builderIntro(controller) {
    var tween = new TweenMax.fromTo("#intro .ui.button", 0.6, {y: 20}, {y: 0, autoAlpha: 1});
    var scene = new ScrollMagic.Scene({triggerElement: "#intro .pull-left", offset: -100}).setTween(tween);

    controller.addScene(scene);
}


/**
 * Animate the attribute bars and
 */
function animateProgress() {
    $(".stats-page .ui.progress").progress({
        duration: 1000,
        text: ""
    });
    setTimeout(function () {
        $(".stats-page .ui.progress").progress("remove active");
    }, 1200);
    $("#who").addClass("loaded");
}

function thumbnailCarousel(selector) {
    imgList = $(selector + " .carousel-inner .item img").toArray();
    resultHtml = "";
    console.log(imgList);

    listIndex = 0;
    imgList.forEach(function (item, index) {
        active = "";
        if (index == 0) {
            active = " class='active'";
        }
        resultHtml += '\
        <li data-target="#cakebook-features-carousel" data-slide-to="' + index + '"' + active + '>\
           <img src="' + item.src + ' ">\
        </li>';
        console.log(resultHtml);
        //<li data-target="#cakebook-features-carousel" data-slide-to="0" class="active"></li>
    });

    $(selector + " .carousel-indicators").html(resultHtml);
    //console.log($(selector + " .carousel-indicators").html() )
}


/* for Bio section, deprecated */
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