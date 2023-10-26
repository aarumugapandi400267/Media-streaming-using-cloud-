document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your authentication logic here
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        // Redirect to the desired page
        // window.location.href = "dashboard.html";
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // You can add your signup logic here
    // Example: Sending data to a server using AJAX or a fetch request

    alert("Signup successful!");
    // You can redirect to a login page or a dashboard after successful signup
});
function signup(){
    var signupBtn=document.getElementById("login")
    var loginBtn=document.getElementById("signup")
    if(signupBtn.className==="login-container"){
        signupBtn.className+=" hide"
        loginBtn.className+=" show"
    }
    else{
        signupBtn.className="login-container"
        loginBtn.className="signup-container"
    }
}