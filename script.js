const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password-re");
const submit = document.querySelector(".button");

submit.addEventListener("click", (e) => {
if (pass1.value !== pass2.value) {
    pass2.title = "Both passwords fields should contain the same value";
}
else{
    pass2.removeAttribute("title");
}
})