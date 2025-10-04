// Open modal
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      let modalId = card.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });
  
  // Close modal
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });
  
  // Close when clicking outside modal
  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
  