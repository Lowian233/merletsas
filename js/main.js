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
  document.addEventListener('DOMContentLoaded', function() {
    // Cargar el header
    fetch('componets/header.html')
        .then(response => response.text())
        .then(data => {
     document.getElementById('header').innerHTML = data;
             // Lógica del menú móvil
           const nav = document.querySelector("#nav");
           const open= document.querySelector("#open");
           const close = document.querySelector("#close");
           
           open.addEventListener("click", () => {
              nav.classList.add("active");
            });
            close.addEventListener("click", () => {
              nav.classList.remove("active");
            });     
        }); 
      
    // Cargar el footer
    fetch('componets/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
// Simular la carga de la página
let loadPercentage = 0;
const loadingPercentageElement = document.getElementById('loading-percentage');
const interval = setInterval(() => {
    loadPercentage += 1;
    loadingPercentageElement.textContent = `${loadPercentage}%`;

    if (loadPercentage >= 100) {
        clearInterval(interval);
        document.getElementById('preloader').style.display = 'none';
    }
}, 30); // Ajusta el tiempo según sea necesario


// Quitar el preloader al cargar
window.addEventListener('load', function() {
document.getElementById('preloader').style.display = 'none';
});
// Cambiar el estilo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('header--scrolled', window.scrollY > 10);}
);
const counterElement = document.getElementById("counter");
let count = 0;
const target = 100; // Número final
const speed = 20; // Velocidad del contador (ms)

const updateCounter = () => {
  if (count < target) {
    count++;
    counterElement.textContent = "+" + count ;
    setTimeout(updateCounter, speed);
  }
};

// Iniciar el contador
updateCounter();