/* =====================================================
   LOGIN FORM
===================================================== */

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value
                .trim();


        /* EMAIL VALIDATION */

        if (!email) {

            loginMessage.textContent =
                "Please enter your email.";

            loginMessage.style.color =
                "#d00000";

            return;
        }


        /* PASSWORD VALIDATION */

        if (!password) {

            loginMessage.textContent =
                "Please enter your password.";

            loginMessage.style.color =
                "#d00000";

            return;
        }


        /* PASSWORD LENGTH */

        if (password.length < 6) {

            loginMessage.textContent =
                "Password must be at least 6 characters.";

            loginMessage.style.color =
                "#d00000";

            return;
        }


        /* DEMO LOGIN */

        loginMessage.textContent =
            "Login successful! Welcome back.";

        loginMessage.style.color =
            "#198754";


        /*
            This is frontend-only login.

            For real login:
            connect this form to PHP,
            MySQL, Node.js, WordPress,
            Firebase, etc.
        */

    }
);


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

const password =
    document.getElementById("password");

const togglePassword =
    document.getElementById(
        "togglePassword"
    );


togglePassword.addEventListener(
    "click",
    function () {

        if (
            password.type ===
            "password"
        ) {

            password.type = "text";

            togglePassword.textContent =
                "Hide";

        } else {

            password.type =
                "password";

            togglePassword.textContent =
                "Show";

        }

    }
);


/* =====================================================
   FORGOT PASSWORD
===================================================== */

const forgotPassword =
    document.getElementById(
        "forgotPassword"
    );


forgotPassword.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        alert(
            "Password reset feature can be connected to your backend."
        );

    }
);


/* =====================================================
   CREATE ACCOUNT
===================================================== */

const createAccount =
    document.getElementById(
        "createAccount"
    );


createAccount.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        alert(
            "Create Account page can be added here."
        );

    }
);