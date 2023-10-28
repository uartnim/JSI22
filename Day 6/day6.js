// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMUp430NFX6_A41BXdfFrYV_3Zlv-0Ai0",
    authDomain: "login-jsi-22.firebaseapp.com",
    projectId: "login-jsi-22",
    storageBucket: "login-jsi-22.appspot.com",
    messagingSenderId: "865362854498",
    appId: "1:865362854498:web:7e9dcef1b055e82817473b",
    measurementId: "G-QVY879JNY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let username_login = document.getElementById("username_input_login");
let password_login = document.getElementById("password_input_login");
let username_register = document.getElementById("username_input_register");
let password_register = document.getElementById("password_input_register");
let login_btn = document.getElementById("login_btn");
let register_btn = document.getElementById("register_btn");

//register an account

register_btn.addEventListener("click", function () {
    let username = username_register.value;
    let password = password_register.value;

    createUserWithEmailAndPassword(auth, username, password)
        //trong cái then có 1 function là userCredential
        .then((userCredential) => {
            const user = userCredential.user;
            //set là đặt thêm vào, reference là đặt tới link nào đấy của cta
            set(ref(database, "user/" + user.uid), {
                username: username,
                password: password,
            })
            alert("Tạo tài khoản thành công");
            //nếu tạo tk thất bại sẽ đi vào nhánh catch, hiện tbao tại tk thất bại
        }).catch((err) => {
            const errorCode = err.code;
            const erroMess = err.message;

            alert(erroMess);
        })

});


//login an exist account
login_btn.addEventListener('click', function () {
    let username = username_login.value;
    let password = password_login.value;


    signInWithEmailAndPassword(auth, username, password)

        .then((userCredential) => {
            const user = userCredential.user;
            let date = new Date();
            update(ref(database, "user/" + user.uid), {
                lastLogin: date
            })
            localStorage.setItem("username_login", username);

            window.location.href="./success.html";


                alert("Đăng nhập thành công");

            })
        .catch((err) => {
            const errorCode = err.code;
            const erroMess = err.message;

            alert(erroMess);
        })

})



//

