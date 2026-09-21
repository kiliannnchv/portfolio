const COLORS = {
  blue: { solid: "#3E5CFF", soft: "#7C8FFF" },
  coral: { solid: "#FF5C45", soft: "#FF9483" },
  yellow: { solid: "#FFC24B", soft: "#FFD98A" },
  ink: { solid: "#16171B", soft: "#4C4E56" },
};

function projectCardHTML(project, index) {
  const c = COLORS[project.color] || COLORS.blue;
  const hasCover = Boolean(project.cover);
  const thumbStyle = hasCover
    ? `background-image:url('${project.cover}')`
    : `background:linear-gradient(150deg, var(--card-color-soft), var(--card-color))`;
  return `
    <div class="swiper-slide">
      <article class="project-card" style="--card-color:${c.solid}; --card-color-soft:${c.soft};">
        <a class="project-card__link" href="project.html?slug=${project.slug}">
          <div class="project-card__thumb${hasCover ? " has-image" : ""}" style="${thumbStyle}">
            ${hasCover ? "" : '<span class="project-card__shape"></span>'}
            <span class="project-card__num">0${index + 1}</span>
          </div>
          <div class="project-card__body">
            <span class="project-card__cat">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.tagline}</p>
            <div class="project-card__tags">
              ${project.tags.map((t) => `<span>${t}</span>`).join("")}
            </div>
          </div>
          <span class="project-card__more">En savoir plus →</span>
        </a>
      </article>
    </div>
  `;
}

function renderProjects() {
  const track = document.querySelector("[data-carousel-track]");
  if (!track) return;
  track.innerHTML = PROJECTS.map(projectCardHTML).join("");
}

// Carrousel "coverflow" 3D sur desktop (plusieurs cartes visibles),
// pile de cartes à swiper sur mobile — deux modes Swiper distincts,
// recréés quand on franchit le seuil pour garder l'effet adapté à l'écran.
function initProjectsCarousel() {
  const container = document.querySelector(".projects-swiper");
  if (!container || typeof Swiper === "undefined") return;

  const countEl = document.querySelector("[data-carousel-count]");
  const total = PROJECTS.length;
  const mq = window.matchMedia("(max-width: 760px)");
  let instance = null;

  const updateCount = (swiper) => {
    if (!countEl) return;
    const n = String(swiper.realIndex + 1).padStart(2, "0");
    countEl.textContent = `${n} / ${String(total).padStart(2, "0")}`;
  };

  const build = (isMobile) => {
    if (instance) {
      instance.destroy(true, true);
      instance = null;
    }
    instance = new Swiper(container, {
      effect: isMobile ? "cards" : "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: isMobile ? 1 : "auto",
      cardsEffect: isMobile
        ? { perSlideOffset: 10, perSlideRotate: 3, rotate: true, slideShadows: false }
        : undefined,
      coverflowEffect: !isMobile
        ? { rotate: 24, stretch: 0, depth: 190, modifier: 1, slideShadows: false }
        : undefined,
      keyboard: { enabled: true },
      navigation: {
        nextEl: "[data-carousel-next]",
        prevEl: "[data-carousel-prev]",
      },
      on: { slideChange: updateCount, afterInit: updateCount },
    });
  };

  build(mq.matches);
  mq.addEventListener("change", (e) => build(e.matches));
}

function initReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}

function initNavToggle() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("is-open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function initInstagramButton() {
  const btn = document.querySelector("[data-instagram]");
  if (!btn) return;
  btn.addEventListener("click", () => {
    showToast("Le compte Instagram n'est pas encore créé ✨ Reviens bientôt !");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initProjectsCarousel();
  initReveal();
  initNavToggle();
  initInstagramButton();
});
