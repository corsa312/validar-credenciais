// Função chamada ao clicar no botão "Entrar"
function validarLogin() {
    // Pega o que foi digitado nos campos
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem");
  
    // Verifica se as credenciais estão corretas
    if (user === "admin" && pass === "123@456") {
      msg.style.color = "green";
      msg.textContent = "Login bem-sucedido!";
      // Aqui poderia redirecionar para outra página, caso seja necessario
      // window.location.href = "painel.html";
    } else {
      msg.style.color = "red";
      msg.textContent = "Usuário ou senha incorretos.";
    }
  }
  