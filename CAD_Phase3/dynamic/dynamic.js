document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert("Signup successful!");
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
