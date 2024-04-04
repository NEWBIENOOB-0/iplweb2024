const searchInput = document.getElementById("inputBox");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", search);

function search() {
  const input = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  if (!input) {
    // If input is empty, reload the home page
    window.location.href = "index.html";
  }
}

// script.js

function inviteToTelegram() {
  var message = "Join Us On Telegram For the Latest Updates! Click OK To Join.";
  if (confirm(message)) {
    window.location.href = "https://telegram.me/RDFilm_Zone";
  }
}
