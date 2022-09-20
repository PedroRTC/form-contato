

let input_email=document.querySelector("#input_email")
let input_senha=document.querySelector("#input_senha")
let label_senha=document.querySelector("#label_senha")
let label_email=document.querySelector("#label_email")



input_email.addEventListener("keyup" , ()=>{
    if(!input_email.value.includes("@")){
        label_email.style.color="red"
        label_email.innerHTML="*email invalido "
    }else{
        label_email.style.color="aqua"
        label_email.innerHTML="E-mail"
    }
})