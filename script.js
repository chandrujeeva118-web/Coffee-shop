/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close menu after clicking */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =====================================================
   TESTIMONIAL SLIDER
===================================================== */

const slides =
    document.querySelectorAll(
        ".testimonial-slide"
    );

const prevButton =
    document.querySelector(".prev-btn");

const nextButton =
    document.querySelector(".next-btn");

const dots =
    document.querySelectorAll(".slider-dot");


let currentSlide = 0;

let autoSlide;


/* =====================================================
   SHOW SLIDE
===================================================== */

function showSlide(index) {

    if (index >= slides.length) {

        currentSlide = 0;

    } else if (index < 0) {

        currentSlide =
            slides.length - 1;

    } else {

        currentSlide = index;

    }


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[currentSlide]
        .classList.add("active");


    dots[currentSlide]
        .classList.add("active");

}


/* =====================================================
   NEXT SLIDE
===================================================== */

function nextSlide() {

    showSlide(
        currentSlide + 1
    );

}


/* =====================================================
   PREVIOUS SLIDE
===================================================== */

function previousSlide() {

    showSlide(
        currentSlide - 1
    );

}


/* =====================================================
   BUTTON EVENTS
===================================================== */

nextButton.addEventListener(
    "click",
    () => {

        nextSlide();

        restartAutoSlide();

    }
);


prevButton.addEventListener(
    "click",
    () => {

        previousSlide();

        restartAutoSlide();

    }
);


/* =====================================================
   DOT EVENTS
===================================================== */

dots.forEach((dot, index) => {

    dot.addEventListener(
        "click",
        () => {

            showSlide(index);

            restartAutoSlide();

        }
    );

});


/* =====================================================
   AUTO SLIDER
===================================================== */

function startAutoSlide() {

    autoSlide =
        setInterval(() => {

            nextSlide();

        }, 4000);

}


function stopAutoSlide() {

    clearInterval(autoSlide);

}


function restartAutoSlide() {

    stopAutoSlide();

    startAutoSlide();

}


startAutoSlide();


/* =====================================================
   PAUSE WHEN MOUSE IS OVER SLIDER
===================================================== */

const testimonialSlider =
    document.querySelector(
        ".testimonial-slider"
    );


testimonialSlider.addEventListener(
    "mouseenter",
    stopAutoSlide
);


testimonialSlider.addEventListener(
    "mouseleave",
    startAutoSlide
);


/* =====================================================
   TOUCH / SWIPE SUPPORT
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


testimonialSlider.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

        stopAutoSlide();

    },
    {
        passive: true
    }
);


testimonialSlider.addEventListener(
    "touchend",
    event => {

        touchEndX =
            event.changedTouches[0]
                .screenX;

        handleSwipe();

        startAutoSlide();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    /* Swipe left */

    if (swipeDistance < -50) {

        nextSlide();

    }


    /* Swipe right */

    if (swipeDistance > 50) {

        previousSlide();

    }

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(
        ".contact-form"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        alert(
            "Thank you! Your message has been received."
        );


        contactForm.reset();

    }
);


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("show");


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right"
    )
    .forEach(element => {

        observer.observe(element);

    });


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a:not(.login-btn)"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);