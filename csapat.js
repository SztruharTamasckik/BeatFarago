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

let counter = 0;

function galeryNext() {
  counter++;

  switch (counter) {
    case 1:
      document.getElementById("galery1").style.display = "block";
      document.getElementById("galery20").style.display = "none";
      break;
    case 2:
      document.getElementById("galery2").style.display = "block";
      document.getElementById("galery1").style.display = "none";
      break;
    case 3:
      document.getElementById("galery3").style.display = "block";
      document.getElementById("galery2").style.display = "none";
      break;
    case 4:
      document.getElementById("galery4").style.display = "block";
      document.getElementById("galery3").style.display = "none";
      break;
    case 5:
      document.getElementById("galery5").style.display = "block";
      document.getElementById("galery4").style.display = "none";
      break;
    case 6:
      document.getElementById("galery6").style.display = "block";
      document.getElementById("galery5").style.display = "none";
      break;
    case 7:
      document.getElementById("galery7").style.display = "block";
      document.getElementById("galery6").style.display = "none";
      break;
    case 8:
      document.getElementById("galery8").style.display = "block";
      document.getElementById("galery7").style.display = "none";
      break;
    case 9:
      document.getElementById("galery9").style.display = "block";
      document.getElementById("galery8").style.display = "none";
      break;
    case 10:
      document.getElementById("galery10").style.display = "block";
      document.getElementById("galery9").style.display = "none";
      break;
    case 11:
      document.getElementById("galery11").style.display = "block";
      document.getElementById("galery10").style.display = "none";
      break;
    case 12:
      document.getElementById("galery12").style.display = "block";
      document.getElementById("galery11").style.display = "none";
      break;
    case 13:
      document.getElementById("galery13").style.display = "block";
      document.getElementById("galery12").style.display = "none";
      break;
    case 14:
      document.getElementById("galery14").style.display = "block";
      document.getElementById("galery13").style.display = "none";
      break;
    case 15:
      document.getElementById("galery15").style.display = "block";
      document.getElementById("galery14").style.display = "none";
      break;
    case 16:
      document.getElementById("galery16").style.display = "block";
      document.getElementById("galery15").style.display = "none";
      break;
    case 17:
      document.getElementById("galery17").style.display = "block";
      document.getElementById("galery16").style.display = "none";
      break;
    case 18:
      document.getElementById("galery18").style.display = "block";
      document.getElementById("galery17").style.display = "none";
      break;
    case 19:
      document.getElementById("galery19").style.display = "block";
      document.getElementById("galery18").style.display = "none";
      break;
    case 20:
      document.getElementById("galery20").style.display = "block";
      document.getElementById("galery19").style.display = "none";
      counter = 0; // reset counter after showing the 20th image
      break;
    default:
      console.log("Something went wrong");
  }
}

document.getElementById("increaseBtn").addEventListener("click", galeryNext);
