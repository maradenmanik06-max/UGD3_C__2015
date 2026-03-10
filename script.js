const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(username === "" || password === ""){
        error.textContent = "Username atau Password tidak boleh kosong!";
    }
    else{
        error.textContent = "";
        
        window.location.href = "https://www.instagram.com/maradenmanik_?igsh=NXIzeTkydXJ0d25m";
    }

});