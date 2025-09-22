// real time updated óra
function pontosIdo() {
    const now = new Date();
    const ido = document.getElementById("ido");
    ido.textContent = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0') + ":" + String(now.getSeconds()).padStart(2, '0');
}

pontosIdo();
setInterval(pontosIdo, 1000);

// gombok
function gomb(button, tag) {
    document.getElementById(button).addEventListener("click", function() {
      const content = document.getElementById(tag);
       if (getComputedStyle(content).display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
}

gomb("button1", "kera");
gomb("button2", "aram");
gomb("button3", "lamas");