// Check off specific Todos by clicking
$("li").click(function () {
    // if li color is gray
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        // turn it black and remove line-through
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        // turn the color gray and add line-through
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }

    // Super easier shortcut *******
    // $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})