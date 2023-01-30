const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");


form.addEventListener("submit",(event) => {
    event.preventDefault();

    //verificar se o nome está vazio
    if(nameInput.value ===""){
        alert("Por favor, preencha seu nome");
        return;
    }

    //verificar email preencehido de forma correta

    if(emailInput.value ==="" || isEmailValid(emailInput.value)){
        alert("Por favor preeneha o campo E-mail");
        return;
    }
  //verificar senha preencehido de forma correta
    if(!validaPassword(passwordInput.value,8)){
        alert("A senha precisa ter no minino 8 dígitos");
        return;
    }

    // verifica se a situaçao foi seleciona
       if(jobSelect.value === "") {
        alert("Por favor, selecione uma das opções");
        return;
       }

    // verifica se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, deixe sua mensagem");
        return;    
    }
    
    // se todos os campos estivem preenchidos enviar form
         form.submit()
     });

    //Função que valida e-mail
    function isEmailValid(email) {
        //cria uma regex para validar email
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if(emailRegex.test(email)){
            return true;
        }

        return false;
    }

    // Função que valida senha
    function validaPassword(password,minDigits) {
        if(password.length >= minDigits){
            // senha válida
            return true
        }

        // senha invalida
        return false
    }

   