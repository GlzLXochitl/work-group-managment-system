<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


function sayHello() {
    alert("Hola");
}

function addUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    if (username == "" || email == "" || password == "" || confirmpassword == "") {
        alert("Please fill all the fields");
    } else if (password != confirmpassword) {
        alert("Password does not match");
    } else {
        alert("User added successfully");
    }
}