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
document.addEventListener("DOMContentLoaded", () => {
  // Create intersection observer for stats section
  const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Get all stat counters
              const stats = entry.target.querySelectorAll(".stat-item h3");
              stats.forEach((stat) => {
                  const endValue = parseInt(stat.textContent.replace("+", "").replace("%", ""));
                  animateCount(stat, 0, endValue, 2000);
              });
              // Unobserve after animation starts
              statsObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  // Observe stats section
  const statsSection = document.querySelector("#statistics");
  if (statsSection) {
      statsObserver.observe(statsSection);
  }
});

function animateCount(element, start, end, duration) {
  let startTime = null;

  const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + (element.textContent.includes("+") ? "+" : 
                                   element.textContent.includes("%") ? "%" : "");
      if (progress > 1) {
          window.requestAnimationFrame(step);
      }
  };

  window.requestAnimationFrame(step);
}