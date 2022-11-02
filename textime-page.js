username = localStorage.getItem("username");

function PostStatus()
{
    status = document.getElementById("status").value;
    document.getElementById("statuses").innerHTML = username + ": " + status;
    localStorage.setItem("status", status);
}