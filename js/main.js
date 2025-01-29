document.addEventListener('DOMContentLoaded', function () {
    // Detectar idioma y cargar el header correspondiente
    const currentPath = window.location.pathname;
    let headerFile = '';

    if (currentPath.includes('/es/')) {
        headerFile = '../componets/header-es.html';
    } else if (currentPath.includes('/en/')) {
        headerFile = '../componets/header-en.html';
    }

    if (headerFile) {
        fetch(headerFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;

                // Activar el efecto de scroll una vez cargado el header
                const header = document.querySelector('.header');
                if (header) {
                    window.addEventListener('scroll', () => {
                        header.classList.toggle('header--scrolled', window.scrollY > 10);
                    });
                }

                // Lógica del menú móvil (opcional, si está incluido en el header)
                const nav = document.querySelector("#nav");
                const open = document.querySelector("#open");
                const close = document.querySelector("#close");

                if (nav && open && close) {
                    open.addEventListener("click", () => {
                        nav.classList.add("active");
                    });

                    close.addEventListener("click", () => {
                        nav.classList.remove("active");
                    });
                }
            })
            .catch(error => console.error('Error loading header:', error));
    }
// Mostrar/Ocultar botón de WhatsApp
document.addEventListener("scroll", () => {
    const whatsappButton = document.querySelector(".whatsapp-button");
    const contactSection = document.querySelector("#contact"); // Asegúrate de que la sección de contacto tenga el id "contact"
    const contactSectionTop = contactSection.offsetTop;
    const contactSectionBottom = contactSectionTop + contactSection.offsetHeight;
  
    if (window.scrollY >= contactSectionTop && window.scrollY <= contactSectionBottom) {
      whatsappButton.classList.add("hidden");
      whatsappButton.classList.remove("visible");
    } else {
      whatsappButton.classList.add("visible");
      whatsappButton.classList.remove("hidden");
    }
  });
  
  

    // Counter animation (se ejecuta directamente si está presente en la página)
    const counterElement = document.getElementById("counter");
    if (counterElement) {
        let count = 0;
        const target = 100; // Cambia este valor si el objetivo es diferente
        const speed = 20; // Ajusta la velocidad de la animación

        const updateCounter = () => {
            if (count < target) {
                count++;
                counterElement.textContent = "+" + count;
                setTimeout(updateCounter, speed);
            }
        };
        updateCounter();
    }
});

   
document.addEventListener('DOMContentLoaded', function () {
  // Detectar idioma basado en la URL
  const currentPath = window.location.pathname;
  let footerFile = '';

  if (currentPath.includes('/es/')) {
      // Si la URL contiene '/es/', cargar el footer en español
      footerFile = '../componets/footer-es.html';
  } else if (currentPath.includes('/en/')) {
      // Si la URL contiene '/en/', cargar el footer en inglés
      footerFile = '../componets/footer-en.html';
  }

  // Cargar el archivo de footer correspondiente
  if (footerFile) {
      fetch(footerFile)
          .then(response => response.text())
          .then(data => {
              document.getElementById('footer').innerHTML = data;
          })
          .catch(error => console.error('Error loading footer:', error));
  }
});
// Simular la carga de la página
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const preloader = document.getElementById('preloader');
  const loadingPercentageElement = document.getElementById('loading-percentage');

  if (preloader && loadingPercentageElement) {
      let loadPercentage = 0;
      const interval = setInterval(() => {
          loadPercentage += 1;
          loadingPercentageElement.textContent = `${loadPercentage}%`;

          if (loadPercentage >= 100) {
              clearInterval(interval);
              preloader.style.display = 'none';
          }
      }, 30);
  }

  // Stats counter animation
  const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const stats = entry.target.querySelectorAll(".stat-item h3");
              stats.forEach((stat) => {
                  const endValue = parseInt(stat.textContent.replace("+", "").replace("%", ""));
                  animateCount(stat, 0, endValue, 2000);
              });
              statsObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

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
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if particles container exists
  const particlesContainer = document.getElementById("particles-js");
  
  if (particlesContainer) {
      try {
          particlesJS("particles-js", {
              particles: {
                  number: { value: 120 },
                  color: { value: "#ffffff" },
                  shape: { type: "circle" },
                  opacity: { value: 0.5 },
                  size: { value: 3 },
                  move: {
                      speed: 2,
                      direction: "none",
                      out_mode: "out",
                  },
              },
              interactivity: {
                  events: {
                      onhover: { enable: true, mode: "repulse" },
                      onclick: { enable: true, mode: "push" },
                  },
                  modes: {
                      repulse: { distance: 100 },
                      push: { particles_nb: 4 },
                  },
              },
              retina_detect: true,
          });
      } catch (error) {
          console.error("Error initializing particles:", error);
      }
  }
});

