function pontosIdo() {
    const now = new Date();
    const ido = document.getElementById("ido");
    ido.textContent = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0') + ":" + String(now.getSeconds()).padStart(2, '0');
}

pontosIdo();
setInterval(pontosIdo, 1000);