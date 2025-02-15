function showModal(message) {
    document.getElementById("modalMessage").textContent = message;
    document.getElementById("modal").style.display = "block";
}

document.getElementById("startAnimation").addEventListener("click", function() {
    showModal("💖 Cupón valido para: Una cena con el amor de tu vida (Tu huguito ) 💖");
});


document.getElementById("revealMessage").addEventListener("click", function() {
    showModal("Eres la mujer más perfecta sobre este universo, nunca lo dudes! 🌟");
});


document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
}); 


window.addEventListener("click", function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
