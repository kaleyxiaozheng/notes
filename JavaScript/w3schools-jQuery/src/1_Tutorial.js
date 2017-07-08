    // $("p").click(function() {
    //     $(this).hide();
    // });

    $("#p1").mouseenter(function() {
        alert("Hello Kaley!");
    });

    $("#p2").mouseleave(function() {
        alert("Bye! Kaley");
    });

    $("#p3").hover(function() {
        alert("You entered p3");
    });

    $("input").focus(function() {
        // background color changes into grey
        $(this).css("background-color", "#cccccc");
    });

    $("input").blur(function() {
        // background color changes into none
        $(this).css("background-color", "#ffffff");
    });

    $("#p4").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgrey");
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        },
        click: function() {
            $(this).css("background-color", "pink");
        }
    });

    // $("p").on("click", function() {
    //     $(this).hide();
    // });