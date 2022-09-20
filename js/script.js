

let input_email=document.querySelector("#input_email")
let input_senha=document.querySelector("#input_senha")
let label_senha=document.querySelector("#label_senha")
let label_email=document.querySelector("#label_email")
let form=document.querySelector("form")
let button_login=document.querySelector("#button_login")
let validacao_email = false;
let validacao_senha = false;

form.addEventListener("submit",Onsubmit)





    input_email.addEventListener("keyup" , ()=>{
    
        
        if(input_email.value.length <= 0){
            label_email.style.color="yellow"
            label_email.innerHTML="*obrigatorio"
            input_email.style.borderColor="yellow"
            window.document.body.style.backgroundImage=`url("../img/fundo-form02.png")`
            validacao_email=false

        } else if(input_email.value.length < 10 || !input_email.value.includes("@") || !input_email.value.includes(".com")){
            label_email.style.color="red"
            label_email.innerHTML="*email invalido "
            input_email.style.borderColor="red"
            window.document.body.style.backgroundImage=`url("../img/fundo-form03.png")`
            validacao_email=false

        }else{
            label_email.style.color="aqua"
            label_email.innerHTML="E-mail"
            input_email.style.borderColor=""
            window.document.body.style.backgroundImage=`url("../img/fundo-form.png")`
            validacao_email=true
        }
    })


    input_senha.addEventListener("keyup" , ()=>{
    
        
        if(input_senha.value.length <= 0){
            label_senha.style.color="yellow"
            label_senha.innerHTML="*obrigatorio"
            input_senha.style.borderColor="yellow"
            window.document.body.style.backgroundImage=`url("../img/fundo-form02.png")`
            validacao_senha=false
    
        } else if(input_senha.value.length < 8){
            label_senha.style.color="red"
            label_senha.innerHTML="*pelo menos 8 caracteres"
            input_senha.style.borderColor="red"
            window.document.body.style.backgroundImage=`url("../img/fundo-form03.png")`
            validacao_senha=false


        }else{
            label_senha.style.color="aqua"
            label_senha.innerHTML="Password"
            input_senha.style.borderColor=""
            window.document.body.style.backgroundImage=`url("../img/fundo-form.png")`
            validacao_senha=true
        }
    })
    

  
function Onsubmit(evt){
    evt.preventDefault();

    if(validacao_email && validacao_senha){
        let div_loading=document.createElement("div")
        let loading=document.createElement("div")

        div_loading.classList.add("div_loading")
        loading.classList.add("loading")
        loading.src="../img/img_loading"

        div_loading.appendChild(loading)
        window.document.body.appendChild(div_loading)

        setTimeout(() => {
            form.submit()
        }, 6000);
        
   }
}