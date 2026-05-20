console.log("JS cargado");

//FUNCIÓN GLOBAL PARA EL CLICK EN LAS BOTELLAS ---
function toggleFaq(elementoBotella) {
    const faqItems = document.querySelectorAll('.faq-item');
    const itemActual = elementoBotella.closest('.faq-item');
    const indexActual = Array.from(faqItems).indexOf(itemActual);
    
    if (itemActual.classList.contains('abierto')) {
        itemActual.classList.remove('abierto');
    } else {
        faqItems.forEach((item, idx) => {
            if (idx === indexActual) {
                item.classList.add('abierto');
            } else {
                item.classList.remove('abierto');
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {

    // LÓGICA DEL SLIDER PRINCIPAL
    const items = document.querySelectorAll('.item');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    let index = 0;

    function mostrarItem(i) {
        if (items.length === 0) return; 
        items.forEach(item => item.classList.remove('active'));
        items[i].classList.add('active');
    }

    if (next) {
        next.addEventListener('click', () => {
            index = (index + 1) % items.length;
            mostrarItem(index);
        });
    }

    if (prev) {
        prev.addEventListener('click', () => {
            index = (index - 1 + items.length) % items.length;
            mostrarItem(index);
        });
    }


    // LÓGICA DEL ACORDEÓN DE BOTELLAS (FAQ)
const faqItems = document.querySelectorAll('.faq-item');
const faqButtons = document.querySelectorAll('.faq-next');

function gestionarFaq(indexTarget) {
    faqItems.forEach((item, idx) => {
        if (idx === indexTarget) {
            item.classList.toggle('abierto');
        } else {
            item.classList.remove('abierto');
        }
    });
}

faqButtons.forEach((button, idx) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
        gestionarFaq(idx);
    });
});

function toggleFaq(elementoBotella) {
    const itemActual = elementoBotella.closest('.faq-item');
    const indexActual = Array.from(faqItems).indexOf(itemActual);
    
    gestionarFaq(indexActual);
}

});