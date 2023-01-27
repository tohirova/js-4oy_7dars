const EmailInp = document.querySelector("#email");
const PasswordInp = document.querySelector("#password");
const LoginBtn = document.querySelector(".login");

LoginBtn.addEventListener("click", function () {
    console.log(EmailInp.value);
    console.log(PasswordInp.value);
    const email = EmailInp.value;
    const password = PasswordInp.value;
    postLogin(email, password);
});

async function postLogin(e, p) {
    const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json ; charset=UTF-8",
        },
        body: JSON.stringify({
            email: e,
            password: p,
        }),
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", JSON.stringify(data.token));
        window.location.replace("./main.html");
    } else {
        alert(data.error);
    }
    console.log(data);
}
