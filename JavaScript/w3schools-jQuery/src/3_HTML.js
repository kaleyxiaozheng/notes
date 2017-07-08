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