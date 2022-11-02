username = document.getElementById("username_2").value;
password = document.getElementById("password_2").value;

function SignIn()
{
    if (localStorage.getItem('password') !== null) 
    {
       window.location = "textime-page.html";
       console.log("Password: " +password)
    }
    else {
        alert("Sorry, try again!");
    }

}