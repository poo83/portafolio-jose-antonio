// Cambia este correo por el correo real que recibirá los mensajes.
const correoDestino = "reemplaza-tu-correo@example.com";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(abierto));
  menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  menuToggle.innerHTML = abierto ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
});

document.querySelectorAll(".nav-links a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.innerHTML = '<i class="bi bi-list"></i>';
  });
});

// Los dos textos son demostrativos: reemplázalos por testimonios reales y autorizados.
const testimonios = [
  {
    texto: "Este espacio está reservado para una recomendación real sobre colaboración, responsabilidad o capacidad de análisis.",
    nombre: "Testimonio de ejemplo",
    cargo: "Reemplazar con cargo real y autorización",
    iniciales: "TR"
  },
  {
    texto: "Añade aquí una opinión auténtica de un compañero, docente o colaborador, con su permiso para publicarla.",
    nombre: "Segundo testimonio de ejemplo",
    cargo: "Nombre y relación profesional por confirmar",
    iniciales: "TE"
  }
];
let indiceTestimonio = 0;

function mostrarTestimonio() {
  const t = testimonios[indiceTestimonio];
  document.getElementById("testimonialText").textContent = `“${t.texto}”`;
  document.getElementById("testimonialName").textContent = t.nombre;
  document.getElementById("testimonialRole").textContent = t.cargo;
  document.getElementById("testimonialInitials").textContent = t.iniciales;
  document.getElementById("testimonialCounter").textContent =
    `${String(indiceTestimonio + 1).padStart(2, "0")} / ${String(testimonios.length).padStart(2, "0")}`;
}

document.getElementById("prevTestimonial").addEventListener("click", () => {
  indiceTestimonio = (indiceTestimonio - 1 + testimonios.length) % testimonios.length;
  mostrarTestimonio();
});
document.getElementById("nextTestimonial").addEventListener("click", () => {
  indiceTestimonio = (indiceTestimonio + 1) % testimonios.length;
  mostrarTestimonio();
});

document.getElementById("contactForm").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("subject").value.trim();
  const mensaje = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (correoDestino === "reemplaza-tu-correo@example.com") {
    feedback.textContent = "Antes de usar el formulario, cambia correoDestino en script.js por tu correo real.";
    return;
  }

  const cuerpo = `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`;
  const url = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  feedback.textContent = "Se abrirá tu aplicación de correo para que revises y envíes el mensaje.";
  window.location.href = url;
});

document.getElementById("year").textContent = new Date().getFullYear();
mostrarTestimonio();
