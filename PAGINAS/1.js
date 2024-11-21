
const bell = document.getElementById('notificacao');
const panel = document.getElementById('Painelnotificacao');


bell.addEventListener('click', () => {
    alert("foi")
    panel.classList.toggle('show');
});
