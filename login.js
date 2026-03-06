document.getElementById("login-btn")
    .addEventListener("click", function () {
        const userName = document.getElementById("user_name").value;
        const pass = document.getElementById("input_password").value;
        if (userName === "admin" && pass === "admin123") {
            alert("Sign In successful!");
            window.location.assign("/home.html");
        }else {
            alert("Sign In failed!!! Please check your Username & Password.");
            return;
        }
    });