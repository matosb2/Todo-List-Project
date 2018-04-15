var fadePress = document.getElementById("press");
var ulList = document.getElementById("todos");
var inFade = document.getElementById("fade");
var parent = document.getElementById("container");


// Check off specific Todos by clicking
// $("ul").on("click", "li", function () {
//     // if li color is gray
//     // if ($(this).css("color") === "rgb(128, 128, 128)") {
//     //     // turn it black and remove line-through
//     //     $(this).css({
//     //         color: "black",
//     //         textDecoration: "none"
//     //     });
//     // } else {
//     //     // turn the color gray and add line-through
//     //     $(this).css({
//     //         color: "gray",
//     //         textDecoration: "line-through"
//     //     });
//     // }

//     // Super easier shortcut *******
//     $(this).toggleClass("completed");
// });

fadePress.addEventListener("keypress", function (event) {
    var self = this;
    if (event.which === 13) {
        var todoTxt = fadePress.value;
        self.value = "";
        var newLi = document.createElement("li");
        newLi.classList.add("items");
        newLi.innerHTML = "<span class='icon'><i class='fa fa-trash '></i></span> " + todoTxt;
        ulList.appendChild(newLi);
    }
});


// Click on trash icon to delete Todo
// $("ul").on("click", "span", function (event) {
//     $(this).parent().fadeOut(500, function () {
//         $(this).remove();
//     });
//     event.stopPropagation();
// })

ulList.addEventListener("click", function (e) {
    if (e.target.classList.contains("items")) {
        e.target.classList.toggle("completed");

    } else if (e.target.classList.contains("icon") || e.target.classList.contains("fa-trash")) {
        e.target.parentElement.classList.add("fadeOut");
        setInterval(function () {
            e.target.parentElement.remove();
        }, 450);
    }
});

// $("input[type='text']").keypress(function (event) {
//     if (event.which === 13) {
//         // grabbing new todo text from input
//         var todoText = $(this).val();
//         $(this).val("");
//         // create a new li and add to ul
//         $("ul").append("<li><span><i class= 'fa fa-trash' ></i></span> " + todoText + "</li>");
//     }
// });

// $("#fade").click(function () {
//     $("input[type='text']").fadeToggle();
// });


inFade.addEventListener("click", function () {
    fadePress.classList.toggle("hide");

    if (fadePress.style.display === "none") {
        fadePress.style.display = "block";
    } else {
        setTimeout(function () {
            fadePress.style.display = "none";
        }, 400);
    }

})