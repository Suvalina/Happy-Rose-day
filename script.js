function showMessage() {
    document.getElementById("surprise").innerHTML =
        "🌹 Soumyadeep, you are my forever rose. I love you endlessly ❤️";
}

// Floating roses
for (let i = 0; i < 20; i++) {
    let rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.style.position = "absolute";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.top = Math.random() * 100 + "vh";
    rose.style.fontSize = Math.random() * 30 + 20 + "px";
    rose.style.animation = "float 6s infinite";
    document.body.appendChild(rose);
}
