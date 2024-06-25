let lastScroll = 0;

$(window).scroll(function(){
    let currentScroll = $(window).scrollTop();
    var newTop = parseInt($("#top-bar").css("top")) + lastScroll - currentScroll;
    
    if (currentScroll > lastScroll) {
        $("#top-bar").css("top", Math.max(-60, newTop));
    } else if (lastScroll > currentScroll) {
        $("#top-bar").css("top", Math.min(0, newTop));
    }

    lastScroll = currentScroll;
});


$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

$("#title").click(function(){
    $("#menu2").css("display", "none");
    window.scrollTo(0,0);
});

$(".menu-introduction").click(function(){
    if($("body").hasClass("not-home")){
        window.location.href = "./index.html";
    }
    window.scrollTo(0,0);
    $("#menu2").css("display", "none");
});

$(".menu-resume").click(function () {
    if($('body').hasClass("not-home")){
        window.location.href = "./index.html#resume";
    }
    var positionResume = $("#resume")[0].offsetTop;
    if (window.matchMedia("(max-width : 900px)").matches) {
        if($('body').hasClass("not-home")){
            window.location.href = "./index.html#resume1"
        } else {
        window.scrollTo(0, positionResume);
        }
    } else {
        window.scrollTo(0, positionResume);
    }
    $("#menu2").css("display", "none");
});

$(".menu-portfolio").click(function(){
    if($('body').hasClass("not-home")){
        window.location.href = "./index.html#portfolio";
    }
    var positionPortfolio = $("#portfolio")[0].offsetTop;
    if (window.matchMedia("(max-width : 900px)").matches) {
        if($('body').hasClass("not-home")){
            window.location.href = "./index.html#portfolio1";
        } else {
            window.scrollTo(0, positionPortfolio);        
        }        
    } else {
        window.scrollTo(0, positionPortfolio);
    }
    $("#menu2").css("display", "none");
});

$(".menu-introduction-en").click(function(){
    if($("body").hasClass("not-home")){
        window.location.href = "./indexEN.html";
    }
    window.scrollTo(0,0);
    $("#menu2").css("display", "none");
});

$(".menu-resume-en").click(function () {
    if($('body').hasClass("not-home")){
        window.location.href = "./indexEN.html#resume";
    }
    var positionResume = $("#resume")[0].offsetTop;
    if (window.matchMedia("(max-width : 900px)").matches) {
        if($('body').hasClass("not-home")){
            window.location.href = "./indexEN.html#resume1"
        } else {
        window.scrollTo(0, positionResume);
        }
    } else {
        window.scrollTo(0, positionResume);
    }
    $("#menu2").css("display", "none");
});

$(".menu-portfolio-en").click(function(){
    if($('body').hasClass("not-home")){
        window.location.href = "./indexEN.html#portfolio";
    }
    var positionPortfolio = $("#portfolio")[0].offsetTop;
    if (window.matchMedia("(max-width : 900px)").matches) {
        if($('body').hasClass("not-home")){
            window.location.href = "./indexEN.html#portfolio1";
        } else {
            window.scrollTo(0, positionPortfolio);        
        }        
    } else {
        window.scrollTo(0, positionPortfolio);
    }
    $("#menu2").css("display", "none");
});

$("#menu-button").click(function(){
    $("#menu2").attr("style", function(index, attr){
        return attr == "display: block" ? "display: none" : "display: block";
    });
});

function imageClick(clickedImage) {
    $(clickedImage).toggleClass("hidden highlight");
}

$("[id^='pic']").click(function () {
    var imageId = "#highlight-" + this.id;
    imageClick(imageId);
});

$("[id^='high']").click(function () {
    var imageId = "#" + this.id;
    imageClick(imageId);
});


