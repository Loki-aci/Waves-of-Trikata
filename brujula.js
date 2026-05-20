// --- LÓGICA DE ROTACIÓN DE LA AGUJA DE LA BRÚJULA ---

document.addEventListener("mousemove", (event) => {
    const aguja = document.getElementById("agujaBrujula");
    
    if (!aguja) return;

    const rect = aguja.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centroX;
    const deltaY = event.clientY - centroY;

    const radianes = Math.atan2(deltaY, deltaX) + Math.PI / 2;
    
    const grados = radianes * (180 / Math.PI);

    aguja.style.transform = `rotate(${grados}deg)`;
});