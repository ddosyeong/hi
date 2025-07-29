// Handle message toggle when the heart (checkbox) is clicked
$("#messageState").on("change", () => {
    $(".message").removeClass("openNor closeNor");

    if ($("#messageState").is(":checked")) {
        // Opening animation
        $(".message")
            .removeClass("closed no-anim")
            .addClass("openNor");
        $(".heart")
            .removeClass("closeHer openedHer")
            .addClass("openHer");
        $(".container")
            .stop()
            .animate({ backgroundColor: "#f48fb1" }, 2000);

        console.log("Opening message");
    } else {
        // Closing animation
        $(".message")
            .removeClass("no-anim")
            .addClass("closeNor");
        $(".heart")
            .removeClass("openHer openedHer")
            .addClass("closeHer");
        $(".container")
            .stop()
            .animate({ backgroundColor: "#fce4ec" }, 2000);

        console.log("Closing message");
    }
});

// Listen for animation end on the message div
$(".message").on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", () => {
    console.log("Message animation ended");

    if ($(".message").hasClass("closeNor")) {
        $(".message").addClass("closed");
    }

    $(".message")
        .removeClass("openNor closeNor")
        .addClass("no-anim");
});

// Listen for animation end on the heart div
$(".heart").on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", () => {
    console.log("Heart animation ended");

    if (!$(".heart").hasClass("closeHer")) {
        $(".heart").addClass("openedHer beating");
    } else {
        $(".heart").addClass("no-anim").removeClass("beating");
    }

    $(".heart").removeClass("openHer closeHer");
});
