        const hamburger = document.querySelector("img.hamburger-menu");
        const iks = document.querySelector(".iks");
        const ul = document.querySelector(".navigation ul");
        const main = document.querySelector(".main");
        const circle = document.querySelector(".circle");

        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("hidden");
            iks.classList.toggle("hidden");
            ul.classList.toggle("active");
            main.classList.toggle("hidden");
            console.log("bleh");

        })

        iks.addEventListener("click", function () {
            hamburger.classList.toggle("hidden");
            iks.classList.toggle("hidden");
            ul.classList.toggle("active");
            main.classList.toggle("hidden");

        })


        //        $(document).ready(function() {

        $("iframe").each(function () {

            var iframe = $(this);
            iframe.on("load", function () {
                iframe.contents().click(function (event) {
                    iframe.trigger("click");
                });
            });

            iframe.click(function () {
                iframe.toggleClass("animate");
            });
        });
        // });



        if ($(window).width() > 768) {
            $(".triangle-content").text("MORE");
        } else {
            $(".triangle-content").text("+");
        }
        window.addEventListener("resize", function () {
            if (window.matchMedia("(min-width: 768px)").matches) {
                $(".triangle-content").text("MORE");
            } else {
                $(".triangle-content").text("+");
            }
        });
