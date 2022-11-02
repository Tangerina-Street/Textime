username = document.getElementById("username").value;
password = document.getElementById("password").value;
console.log(username);
console.log(password);
function SignUp()
{
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    window.location = "textime-page.html";
}