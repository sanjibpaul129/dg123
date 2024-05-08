"use strict";
$(function () {
    $(".youtube").each(function () {
        $(this).css("background-image", "url(img/overview_new.jpg)"),
            $(this).append($("<div/>", { class: "play" })),
            $(document).delegate("#" + this.id, "click", function () {
                var t = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                $(this).data("params") && (t += "&" + $(this).data("params"));
                var a = $("<iframe/>", { frameborder: "0", src: t, width: $(this).width(), height: $(this).height() });
                $(this).replaceWith(a);
            });
    });
});
