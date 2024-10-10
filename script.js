console.log("Arquivo script.js carregado");

document.addEventListener('DOMContentLoaded', function () {
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    // Log para verificar se o JavaScript está funcionando
    console.log("Script carregado");

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Clicou no link para login");  // Verifique se aparece no console
        registerContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });

    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Clicou no link para cadastro");  // Verifique se aparece no console
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
    });
});
