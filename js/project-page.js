function notFoundHTML() {
  return `
    <section class="project-notfound">
      <p class="eyebrow">Oups</p>
      <h1 class="display">Projet introuvable</h1>
      <p style="color:var(--ink-soft); margin:16px 0 28px;">Ce projet n'existe pas ou a été déplacé.</p>
      <a class="hero__scroll" href="index.html#projets" style="display:inline-flex;">← Retour aux projets</a>
    </section>
  `;
}

function projectDetailHTML(project) {
  const c = COLORS[project.color] || COLORS.blue;
  const gradient = `linear-gradient(150deg, ${c.soft}, ${c.solid})`;
  const coverInner = project.cover
    ? `<img src="${project.cover}" alt="${project.title} — visuel principal" />`
    : "";
  const coverIsContain = project.coverFit === "contain";
  const coverClass = coverIsContain ? "project-cover project-cover--contain" : "project-cover";
  const coverStyle = coverIsContain ? "" : `style="background:${gradient}"`;
  const detailsText =
    project.details ||
    "Texte à remplacer : ajoute ici le contexte pédagogique (module, durée, travail solo/groupe) et les résultats obtenus.";
  return `
    <section class="project-hero">
      <a class="project-back" href="index.html#projets">← Retour aux projets</a>
      <span class="project-hero__cat" style="color:${c.solid}">${project.category}</span>
      <h1 class="display">${project.title}</h1>
      <div class="project-hero__meta">
        <span>${project.year}</span>
        <span>${project.tagline}</span>
      </div>
      <div class="project-hero__tags">
        ${project.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="${coverClass}" ${coverStyle}>${coverInner}</div>
      <div class="project-body">
        <div>
          <p class="eyebrow">Le projet</p>
          <p>${project.description}</p>
        </div>
        <div>
          <p class="eyebrow">Détails</p>
          <p>${detailsText}</p>
          ${
            project.link
              ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener" style="background:${c.solid}">Voir le site ↗</a>`
              : `<p style="color:var(--ink-soft); font-size:.9rem;">Pas de lien en ligne pour ce projet.</p>`
          }
        </div>
      </div>
      <p class="eyebrow">Galerie</p>
      <div class="project-gallery">
        ${project.gallery
          .map((item, i) =>
            typeof item === "string"
              ? `<div class="project-gallery__item"><img src="${item}" alt="${project.title} — visuel ${i + 1}" /></div>`
              : `<div class="project-gallery__item" style="background:${gradient}">Image ${item}</div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function initProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find((p) => p.slug === slug);
  const root = document.getElementById("project-root");
  if (!root) return;
  if (!project) {
    root.innerHTML = notFoundHTML();
    return;
  }
  document.title = `${project.title} — Portfolio`;
  root.innerHTML = projectDetailHTML(project);
}

document.addEventListener("DOMContentLoaded", initProjectPage);
