
const loginButton = document.getElementById('loginbtn');

loginButton.addEventListener('click', function () {
    const mail = document.getElementById('mail');
    const password = document.getElementById('password');
    const getMailValue = mail.value;
    console.log(getMailValue);

    const getPasswordValue = password.value;
    console.log(getPasswordValue);
 

    if (getMailValue == 'wemon30@gmail.com' && getPasswordValue == "emon") {
        window.location.href="bank.html";
    } else {
        // alert("please enter valid mail or password");
        document.getElementById('login-error').classList.remove("hidden");
    }
})