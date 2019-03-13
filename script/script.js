$(document).ready(function () {
    // document X and Y center
    var centerX = document.documentElement.clientWidth / 2,
        centerY = document.documentElement.clientHeight / 2;

    // langs block opacity 0 -> 1 ( when #basic-langs-section top < 0 after page reload)
    if ($("#basic-langs-section")[0].getBoundingClientRect().top <= 0) {
        for (var k = 0; k < $(".basic-langs").length; k++) {
            $(".basic-langs")[k].classList.remove("deactive");
            $(".basic-langs")[k].classList.add("active");
        }
    }

    // navigation menu active if page reloaded whith #logo.bottom <= 0
    if ($("#logo")[0].getBoundingClientRect().bottom <= 0) {
        $("#mini-logo")[0].dataset.status = "active";
        $("#menu")[0].dataset.status = "active";
        for (var k = 0; k < $("a.menu-text").length; k++) $("a.menu-text")[k].classList.add("active");
        for (var k = 0; k < $("img.tab-icons").length; k++) $("img.tab-icons")[k].classList.add("active");
    }

    // document scroll animation
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({
            scrollTop: top
        }, 1200, 'swing');
    });

    $(document).scroll(function () {

        // navigation menu active/deactive 
        if ($("#logo")[0].getBoundingClientRect().bottom <= 0) {
            $("#mini-logo")[0].dataset.status = "active";
            $("#menu")[0].dataset.status = "active";
            for (var k = 0; k < $("a.menu-text").length; k++) $("a.menu-text")[k].classList.add("active");
            for (var k = 0; k < $("img.tab-icons").length; k++) $("img.tab-icons")[k].classList.add("active");
        } else {
            $("#mini-logo")[0].dataset.status = "deactive";
            $("#menu")[0].dataset.status = "deactive";
            for (var k = 0; k < $("a.menu-text.active").length; k++) $("a.menu-text.active")[k].classList.remove("active");
            for (var k = 0; k < $("img.tab-icons.active").length; k++) $("img.tab-icons.active")[k].classList.remove("active");
        }

        // langs block opacity 0 -> 1
        if ($("#basic-langs-section")[0].getBoundingClientRect().top <= 0) {
            for (var k = 0; k < $(".basic-langs").length; k++) {
                $(".basic-langs")[k].classList.remove("deactive");
                $(".basic-langs")[k].classList.add("active");
            }
        }
    });
});