$("button#btn1").click(function() {
    alert("Text: " + $("#txt1").text());
});

$("button#btn2").click(function() {
    alert("HTML: " + $("#txt1").html());
});

$("button#btn3").click(function() {
    alert("Name: " + $("#input_txt").val());
});

$("button#btn4").click(function() {
    alert($("#w3s").attr("href"));
});

$("button#btn5").click(function() {
    $("#txt3").text("Hello Kaley");
});

$("button#btn6").click(function() {
    $("#txt3").html("<b>You are great</b>");
});

$("button#btn7").click(function() {
    $("#input1").val("Joey Yi Zhao");
});

$("button#btn8").click(function() {
    $("#txt5").text(function(i, origText) {
        return "Old text: " + origText + "\n" + "New Text: Great (index: " + i + ")";
    });
});

$("button#btn9").click(function() {
    $("#txt6").html(function(i, origText) {
        return "Old html: " + origText + "\n" + "New HTML: <b>GREAT <index: " + i + ")";
    });
});

$("button#btn10").click(function() {
    $("#href1").attr("href", "https://www.google.com.au");
});

$("button#btn11").click(function() {
    $("div#txt7").append(" Append text");
    $("div#txt8").append(" <b>Append text</b>");
});

var i = 4;
$("button#btn12").click(function() {
    $("ol#list1").append("<li>List item " + i++ + "</li>");
});

$("button#btn13").click(function() {
    $("div#txt7").prepend("Prepend text ");
    $("div#txt8").prepend("<b>Prepend text</b> ");
});

var i = 0;
$("button#btn14").click(function() {
    $("ol#list1").prepend("<li>List item " + i-- + "</li>")
});

$("button#btn15").click(function() {
    $("#txt9").remove();
});

$("button#btn16").click(function() {
    $("#txt9").empty();
});

$("button#btn17").click(function() {
    $("p").remove("#p1");
});

$("button#btn18").click(function() {
    $("p").remove("#p1, #p2");
});

$("button#btn19").click(function() {
    $("h1, h2, #p3, #p4").addClass("blue");
    $("div#txt10").addClass("important");
    //$("div#txt11").addClass("important blue");
});

$("button#btn20").click(function() {
    $("h1, h2, #p3, #p4").removeClass("blue");
    $("div#txt10").removeClass("important");
});

$("button#btn21").click(function() {
    $("h1, h2, #p3, #p4").toggleClass("blue");
    $("div#txt10").toggleClass("important");
});

$("button#btn22").click(function() {
    alert("Background color = " + $("#p5, #p6, #p7").css("background-color"));
});

$("button#btn23").click(function() {
    //$("#p5, #p6, #p7, #p8").css("background-color", "yellow");
    $("#p5, #p6, #p7, #p8").css({ "background-color": "yellow", "font-size": "200%" });
});

$("button#btn24").click(function() {
    var txt = "";
    var origTxt = $("div#txt13");
    txt += "Width of div: " + origTxt.width() + "</br>";
    txt += "Height of div: " + origTxt.height() + "</br>";
    txt += "Inner width of div: " + origTxt.innerWidth() + "</br>";
    txt += "Inner height of div: " + origTxt.innerHeight() + "</br>";
    txt += "Outer width of div: " + origTxt.outerWidth() + "</br>";
    txt += "Outer height of div: " + origTxt.outerHeight() + "</br>";
    txt += "Outer hidth (+ margin) of div: " + origTxt.outerWidth(true) + "</br>";
    txt += "Outer height (+ margin) of div: " + origTxt.outerHeight(true) + "</br>";
    origTxt.html(txt);
});

$("button#btn25").click(function() {
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    alert(txt);
});

$("button#btn26").click(function() {
    $("div#txt_last").width(500).height(500);
});