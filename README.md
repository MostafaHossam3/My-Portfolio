# Mostafa Hossam — Portfolio (Vanilla HTML/CSS/JS)

A clone of [daksh.io](https://www.daksh.io/) built with plain HTML, CSS, and JavaScript. No framework, no build step.

## Stack
- HTML5 / CSS3
- Vanilla JavaScript (ES2020+ modules)
- [three.js](https://threejs.org/) (CDN, ES module) for the 3D starfield background
- [Font Awesome](https://fontawesome.com/) (CDN) for social and UI icons
- [Simple Icons](https://simpleicons.org/) (CDN) for tech logos in the skills grid
- [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) for typography

## Project structure
```
my_portfolio/
├── index.html
├── css/
│   ├── styles.css         # main theme + components
│   └── responsive.css     # breakpoints
├── js/
│   ├── starfield.js       # three.js Points starfield (ES module)
│   ├── data.js            # skills + projects data
│   └── main.js            # nav, sections rendering, form handler
└── assets/
    ├── favicon.png
    └── videos/
        ├── blackhole.webm
        └── cards-video.webm
```

## Run locally
The project uses ES modules (`type="module"` for `starfield.js`) so it must be served over HTTP, not opened with `file://`.

Pick any of:

```bash
# Python 3
python -m http.server 5173

# Node (npx)
npx serve .

# VS Code
# Install "Live Server" extension and click "Go Live"
```

Then open <http://localhost:5173>.

## Customizing
- **Colors / theme** — edit the CSS variables in `css/styles.css` `:root { ... }`.
- **Background color** — `--bg: #030014;` in `:root`.
- **Skills / Projects content** — edit `js/data.js`.
- **Starfield density / motion** — `STAR_COUNT`, `FIELD_RADIUS`, and the `stars.rotation.*` lines in `js/starfield.js`.

## License
For personal use.
