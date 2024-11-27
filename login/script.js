const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "ryne" && password === "1012"){
        alert("Login Successfull"); window.location.href = "file:///C:/Users/Sharyne%20Alania/OneDrive/Documents/Alania%20Sharyne/mainpage/index.html";
    }  else {
        alert("Inavalid UserName or Password.");
 
    }
});