
function toggleFaq(elemento) {
    const faqItem = elemento.parentElement;
    
    faqItem.classList.toggle('abierto');

    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('abierto');
        }
    });
}