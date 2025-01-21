// Mostrar/Ocultar botón de WhatsApp
document.addEventListener("scroll", () => {
    const whatsappButton = document.querySelector(".whatsapp-button");
    if (window.scrollY > 200) {
      whatsappButton.classList.add("visible");
      whatsappButton.classList.remove("hidden");
    } else {
      whatsappButton.classList.add("hidden");
      whatsappButton.classList.remove("visible");
    }
  });