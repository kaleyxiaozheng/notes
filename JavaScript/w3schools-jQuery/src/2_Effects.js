$(".ex .hide").click(function() {
    $(this).parents(".ex").hide("slow");
});

$("#hide").click(function() {
    $("p#show_hide").hide("slow");
});

$("#show").click(function() {
    $("p#show_hide").show("slow");
});

$("#toggle_btn").click(function() {
    $("#demo_toggle").toggle(1000);
});

$("#fadeIn_btn").click(function() {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(1000);
});

$("#fadeOut_btn").click(function() {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(1000);
});

$("#fadeToggle_btn").click(function() {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(1000);
});

$("#fadeTo_btn").click(function() {
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
});

$("#slideDown").click(function() {
    $("#panel").slideDown("slow");
});

$("div#slideUp").click(function() {
    $("#panel").slideUp("slow");
});

$("div#slideToggle").click(function() {
    $("#panel").slideToggle("slow");
});

$("button#ani1").click(function() {
    $("#animation1").animate({ left: '250px' });
});

$("button#ani2").click(function() {
    $("#animation1").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
});

$("button#ani3").click(function() {
    $("#animation1").animate({
        height: 'toggle'
    });
});

$("button#ani4").click(function() {
    var ani = $("#animation1");
    ani.animate({ height: '300px', opacity: '0.4' }, "slow");
    ani.animate({ width: '300px', opacity: '0.8' }, "slow");
    ani.animate({ height: '100px', opacity: '0.4' }, "slow");
    ani.animate({ width: '100px', opacity: '0.8' }, "slow");
});

$("button#ani5").click(function() {
    var ani = $("#animation1");
    ani.animate({ left: '100px' }, "slow");
    ani.animate({ fontSize: '3em' }, "slow");
});

$("#stop_txt").click(function() {
    $("#panel_txt").slideDown(5000);
});

$("button#stop").click(function() {
    $("#panel_txt").stop();
});

$("button#callbackBtn").click(function() {
    $("#callBackTxt").hide("slow", function() {
        alert("The paragraph is now hidden");
    });
});

$("button#chainBtn").click(function() {
    $("#chain").css("color", "red").slideUp(2000).slideDown(2000);
});