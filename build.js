#!/usr/bin/env node
/*
 * build.js - static site builder for clbwhazzup.github.io
 *
 * Content lives in  src/data/     (site.js, projects.js)
 * Markup lives in   src/modules/  (small HTML partials with {{placeholders}})
 * Styles live in    src/styles/   (concatenated in order into css/site.css)
 *
 * Run:  node build.js      (or: npm run build)
 *
 * Output: index.html, web.html, program.html, game.html, 3d.html, css/site.css
 * Hand-written pages that the build does NOT touch:
 *   gam495.html, paddleball-privacy.html, GRA310Website/, stylesheet.css
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const MODULES = path.join(ROOT, 'src', 'modules');
const STYLES = path.join(ROOT, 'src', 'styles');

const site = require('./src/data/site');
const projects = require('./src/data/projects');

/* ---------- tiny template helpers ---------- */

const cache = new Map();
function mod(name) {
  if (!cache.has(name)) {
    cache.set(name, fs.readFileSync(path.join(MODULES, name + '.html'), 'utf8'));
  }
  return cache.get(name);
}

// Replaces {{key}} / {{a.b}} in a template. Missing keys render as ''.
// A multi-line value keeps the indentation of the line its placeholder sat on,
// so nested modules come out neatly indented.
function render(template, vars) {
  return template.replace(/([ \t]*)\{\{\s*([\w.]+)\s*\}\}/g, (_, pad, key) => {
    const value = key.split('.').reduce((o, k) => (o == null ? o : o[k]), vars);
    if (value == null) return '';
    const text = String(value);
    if (!text.includes('\n')) return pad + text;
    return text
      .split('\n')
      .map((line, i) => (i === 0 || !line.trim() ? pad + line : pad + line))
      .join('\n');
  });
}

function renderMod(name, vars) {
  return render(mod(name), vars).trim();
}

/* ---------- pieces ---------- */

function buildNav(currentId) {
  return site.nav
    .map((item) =>
      renderMod('nav-item', {
        href: item.href,
        label: item.label,
        current: item.id === currentId ? ' aria-current="page"' : '',
        active: item.id === currentId ? ' is-active' : '',
      })
    )
    .join('\n');
}

function buildMedia(project) {
  return (project.media || [])
    .map((item) =>
      item.type === 'video'
        ? renderMod('media-video', item)
        : renderMod('media-image', { src: item.src, alt: item.alt || '' })
    )
    .join('\n');
}

function buildBody(project) {
  const parts = [`<p>${project.details}</p>`];
  (project.sections || []).forEach((section) => {
    parts.push(`<h3 class="project-subhead">${section.heading}</h3>`);
    section.paragraphs.forEach((p) => parts.push(`<p>${p}</p>`));
  });
  return parts.join('\n');
}

function buildProject(project) {
  return renderMod('project', {
    id: project.id,
    title: project.title,
    tags: (project.tags || [])
      .map((tag) => `<li class="tag">${tag}</li>`)
      .join('\n'),
    body: buildBody(project),
    media: buildMedia(project),
  });
}

function projectsFor(pageId) {
  return projects
    .filter((p) => p.pages.includes(pageId))
    .sort((a, b) => {
      const ao = (a.order && a.order[pageId]) || 0;
      const bo = (b.order && b.order[pageId]) || 0;
      return ao - bo;
    });
}

function buildPage(page) {
  const content =
    page.id === 'home'
      ? buildHome()
      : renderMod('page', {
          pageTitle: page.heading,
          lead: page.lead || '',
          projects: projectsFor(page.id).map(buildProject).join('\n\n'),
        });

  return render(mod('layout'), {
    lang: 'en',
    title: page.title,
    description: page.description,
    heading: site.name,
    subhead: site.role,
    nav: buildNav(page.id),
    content: content,
    year: new Date().getFullYear(),
    footer: renderMod('footer', { github: site.github, year: new Date().getFullYear() }),
  });
}

function buildHome() {
  const cards = site.nav
    .filter((item) => item.id !== 'home')
    .map((item) => {
      const page = site.pages.find((p) => p.id === item.id);
      return renderMod('page-card', {
        href: item.href,
        label: item.label,
        blurb: page ? page.blurb : '',
        count: (() => {
          const n = projectsFor(item.id).length;
          return n + (n === 1 ? ' project' : ' projects');
        })(),
      });
    })
    .join('\n');

  // Thumbnail grid is generated from the remaining projects, so nothing that
  // was removed from a page can linger on the home page.
  const seen = new Set();
  const thumbs = [];
  site.nav
    .filter((item) => item.id !== 'home')
    .forEach((item) => {
      projectsFor(item.id).forEach((project) => {
        (project.media || [])
          .filter((m) => m.type !== 'video')
          .forEach((image) => {
            if (seen.has(image.src)) return;
            seen.add(image.src);
            thumbs.push(
              renderMod('thumb', {
                href: item.href,
                src: image.src,
                alt: image.alt || '',
              })
            );
          });
      });
    });

  return renderMod('home', {
    intro: site.intro,
    cards: cards,
    thumbs: thumbs.join('\n'),
  });
}

function buildStyles() {
  const order = site.styles;
  const css = order
    .map((file) => {
      const body = fs.readFileSync(path.join(STYLES, file), 'utf8').trim();
      return `/* ---------- ${file} ---------- */\n${body}`;
    })
    .join('\n\n');
  return `/* Generated by build.js - edit src/styles/, not this file. */\n\n${css}\n`;
}

/* ---------- run ---------- */

function main() {
  const written = [];

  site.pages.forEach((page) => {
    const html = buildPage(page);
    fs.writeFileSync(path.join(ROOT, page.file), html);
    written.push(page.file);
  });

  fs.mkdirSync(path.join(ROOT, 'css'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'css', 'site.css'), buildStyles());
  written.push('css/site.css');

  console.log('Built:');
  written.forEach((f) => console.log('  ' + f));
}

main();
