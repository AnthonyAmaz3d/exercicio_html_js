const form = document.querySelector('form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');

form.addEventListener('submit', (event) => {
    event.preventDefault();

if (Number(campoB.value) > Number(campoA.value)) {
    alert('Formulário é válido');
} else {
    alert('Formulário é inválido');
}
});