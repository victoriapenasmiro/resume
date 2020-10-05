/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict
    $(".fa-times").hide();//new empieza oculto
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
        $(".navbar-brand span").last().addClass("d-none");
        $(".navbar-toggler-icon").show();
        $(".fa-times").hide(); });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $(".navbar-toggler").click(function (){
        if($("#profile").hasClass("d-none")){
            $(".navbar-brand span").removeClass("d-none");
            $(".img-fluid").width("50%");
            $(".navbar-toggler-icon").hide();
            $(".fa-times").show();
            $(".navbar-toggler").css("width","100%")
        }else{
            $(".navbar-brand span").last().addClass("d-none");
            $(".fa-times").hide();
            $(".navbar-toggler").css("width","")
            $(".navbar-toggler-icon").show();
        }
    });

})(jQuery); // End of use strict
