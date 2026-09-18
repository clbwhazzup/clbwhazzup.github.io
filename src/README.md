# Source for the portfolio site

The pages at the repo root (`index.html`, `web.html`, `program.html`, `game.html`,
`3d.html`) and `css/site.css` are **generated**. Edit the files here, then run:

    node build.js        # or: npm run build

## Layout

    src/data/site.js       site name, nav order, page titles/leads, stylesheet order
    src/data/projects.js   every portfolio entry (text, tags, images)
    src/modules/*.html     small HTML partials with {{placeholders}}
    src/styles/*.css       CSS modules, concatenated into css/site.css
    build.js               the builder (no dependencies, plain Node)

## Common edits

* **Add a project** - add an object to `src/data/projects.js`. `pages` decides which
  page(s) it shows on; `order` decides where it sits on each. Images are listed in
  `media`. The home page thumbnail grid is generated from this file, so nothing has
  to be added or removed there by hand.
* **Add a page** - add an entry to `nav` and `pages` in `src/data/site.js`.
* **Change the look** - edit `src/styles/`. Colors are CSS variables at the top of
  `base.css`.

## Not built (hand-written, left alone by build.js)

    gam495.html              capstone page, still uses stylesheet.css
    paddleball-privacy.html  privacy policy, still uses stylesheet.css
    GRA310Website/           coursework site
    stylesheet.css           old stylesheet, kept for the two pages above
