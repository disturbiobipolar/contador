let contador = 0;
const display = document.getElementById('display');

function atualizarDisplay() {
    display.textContent = contador;
}

function incrementar() {
    contador++;
    atualizarDisplay();
}

function decrementar() {
    if(contador > 0) { 
        contador--;
        atualizarDisplay();
    }
}

  document.addEventListener('keydown', (event) => {
    if(event.key === '+' || event.key === 'ArrowUp') {
        incrementar();
    }
    else if(event.key === '-' || event.key === 'ArrowDown') {
        decrementar();
    }
});