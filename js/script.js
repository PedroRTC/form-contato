

let input_email=document.querySelector("#input_email")
let input_senha=document.querySelector("#input_senha")
let label_senha=document.querySelector("#label_senha")
let label_email=document.querySelector("#label_email")



input_email.addEventListener("keyup" , ()=>{
   
    
    if(input_email.value.length <= 0){
        label_email.style.color="yellow"
        label_email.innerHTML="*obrigatorio"
 
    } else if(input_email.value.length < 10 || !input_email.value.includes("@")){
        label_email.style.color="red"
        label_email.innerHTML="*email invalido "

    }else{
        label_email.style.color="aqua"
        label_email.innerHTML="E-mail"
    }
})


input_senha.addEventListener("keyup" , ()=>{
   
    
    if(input_senha.value.length <= 0){
        label_senha.style.color="yellow"
        label_senha.innerHTML="*obrigatorio"
 
    } else if(input_senha.value.length < 8){
        label_senha.style.color="red"
        label_senha.innerHTML="*pelo menos 8 caracteres"

    }else{
        label_senha.style.color="aqua"
        label_senha.innerHTML="Password"
    }
})