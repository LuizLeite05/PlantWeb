// Obtém o elemento com o id 'container' e o armazena na variável 'container'
const container = document.getElementById('container');

// Obtém o botão com o id 'register' e o armazena na variável 'registerBtn'
const registerBtn = document.getElementById('register');

// Obtém o botão com o id 'login' e o armazena na variável 'loginBtn'
const loginBtn = document.getElementById('login');

// Adiciona um ouvinte de evento de clique ao botão 'registerBtn'
registerBtn.addEventListener('click', () => {
    // Adiciona a classe 'active' ao elemento 'container' quando o botão 'register' é clicado
    container.classList.add("active");
});

// Adiciona um ouvinte de evento de clique ao botão 'loginBtn'
loginBtn.addEventListener('click', () => {
    // Remove a classe 'active' do elemento 'container' quando o botão 'login' é clicado
    container.classList.remove("active");
});
