/*--------------animacao do olho-----------------------*/
function togglePasswordVisibility() {
    var senha = document.getElementById("senha");
    var eyeIcon = document.getElementById("togglePasswordVisibility");
  
    if (senha.type === "password") {
      senha.type = "text";
      eyeIcon.src = "olhoaberto.png"; // imagem do ícone de olho aberto
    } else {
      senha.type = "password";
      eyeIcon.src = "olhofechado.png"; // imagem do ícone de olho fechado
    }
  }


/*------------------------------------------------------*/



let res_logar = document.getElementById('res_logar')
let logar = document.getElementById('logar')

logar.addEventListener('click',()=>{
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    

    const dados = {
        senha: senha,
        email:email
    }
    fetch('http://localhost:3000/logar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(logar => logar.json())
    .then(dados =>{
        console.log(dados)
        res_logar.innerHTML =  "Login com sucesso!"
        res_logar.style.color ='green'
    })
    .catch((err)=>{
        console.error("Erro ao logar no banco de dados",err)
        res_logar.innerHTML =  "Senha incorreta!"
        res_logar.style.color ='red'
    })
})


  
