history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$(".menu-introduction").click(function(){
    if($('body').hasClass("not-home")){
        window.location.href = "./index.html";
    }
    window.scrollTo(0,0);
    $("#menu2").addClass("hidden");
    $("#menu2").removeClass("shown");
});

$(".menu-resume").click(function () {
    if($('body').hasClass("not-home")){
        window.location.href = "./index.html#resume"
    }
    var positionResume = $("#resume")[0].offsetTop;
    if (window.matchMedia("(max-width : 900px)").matches) {
        window.scrollTo(0, positionResume - 40);
    } else {
        window.scrollTo(0, positionResume);
    }
    $("#menu2").addClass("hidden");
    $("#menu2").removeClass("shown");
});

$(".menu-portfolio").click(function(){
    if($('body').hasClass("not-home")){
        window.location.href = "./index.html#portfolio";
    }
    var positionPortfolio = $("#portfolio")[0].offsetTop;
    if (window.matchMedia("(max-width : 900px)").matches) {
        window.scrollTo(0, positionPortfolio - 40);
    } else {
        window.scrollTo(0, positionPortfolio);
    }
    $("#menu2").addClass("hidden");
    $("#menu2").removeClass("shown");
});

$("#menu-button").click(function(){
    $("#menu2").toggleClass("hidden shown");
});

if (!window.matchMedia("(max-width : 900px)").matches){    
    $(".menu, .icon, #language-selector").on("mouseover", function(){
        $(this).toggleClass("icon-yellow icon-white");
    });

    $(".menu, .icon, #language-selector").on("mouseout", function(){
        $(this).toggleClass("icon-yellow icon-white");
    });
}

$("#gd1-picture1, #gd1-picture1-highlight").click(function(){
    $("#gd1-picture1-highlight").toggleClass("hidden highlight");
})

$("#gd1-picture2, #gd1-picture2-highlight").click(function(){
    $("#gd1-picture2-highlight").toggleClass("hidden highlight");
})

$("#gd1-picture3, #gd1-picture3-highlight").click(function(){
    $("#gd1-picture3-highlight").toggleClass("hidden highlight");
})

$("#gd2-picture1, #gd2-picture1-highlight").click(function(){
    $("#gd2-picture1-highlight").toggleClass("hidden highlight");
})

$("#gd2-picture2, #gd2-picture2-highlight").click(function(){
    $("#gd2-picture2-highlight").toggleClass("hidden highlight");
})

$("#gd2-picture3, #gd2-picture3-highlight").click(function(){
    $("#gd2-picture3-highlight").toggleClass("hidden highlight");
})

$("#gd3-picture1, #gd3-picture1-highlight").click(function(){
    $("#gd3-picture1-highlight").toggleClass("hidden highlight");
})

$("#gd3-picture2, #gd3-picture2-highlight").click(function(){
    $("#gd3-picture2-highlight").toggleClass("hidden highlight");
})

$("#gd3-picture3, #gd3-picture3-highlight").click(function(){
    $("#gd3-picture3-highlight").toggleClass("hidden highlight");
})

$("#gd3-picture4, #gd3-picture4-highlight").click(function(){
    $("#gd3-picture4-highlight").toggleClass("hidden highlight");
})


