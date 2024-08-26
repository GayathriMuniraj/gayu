const form=document.querySelector("form");
const username=document.querySelector("#username");
const email=document.querySelector("#emails");
const check=document.querySelector("#gender");
const radio=document.querySelector("#agree");

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("form submitted");
    console.log("username: ",username.value);
    console.log("email: ",email.value);
    console.log("email: ",email.value);
});

username.addEventListener("focus",function(e){
    username.style.borderColor="darkblue";
})
email.addEventListener("blur",function(e){
    email.style.borderColor="red";
})
username.addEventListener("reset",function(e){
    console.log("user reset the pass");
});
gender.addEventListener("change",function(){
    const changed=e.target.value;
    console.log(changed);
});
let checkeds=" ";
check.forEach((checks)=>{
    if(checks.checked){
        checkeds=checks.value;
    }
    console.log("gender :",checkeds);
})