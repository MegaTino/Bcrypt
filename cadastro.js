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



  let res_gravar = document.getElementById('res_gravar')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click',()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value 
    

    const dados = {
        nome: nome,
        senha: senha,
        email:email
    }
    fetch('http://localhost:3000/cadastrar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(gravar => gravar.json())
    .then(dados =>{
        console.log(dados)
        res_gravar.innerHTML =  "Dados guardados com sucesso!"
        res_gravar.style.color ='green'
    })
    .catch((err)=>{
        console.error("Erro ao gravar no banco de dados",err)
        res_gravar.innerHTML =  "Erro ao cadastrar!"
        res_gravar.style.color ='red'
    })
})