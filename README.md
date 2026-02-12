# Love-Letter — For Haritha ❤️

A small, lovingly-crafted single-page site made for Haritha. It combines floating heart animations, soft typography, an optional background track, a surprise message button, and a simple photo gallery (placeholders) to create a romantic, shareable little experience.

## What you get

- `index.html` — The single-page markup and structure.
- `style.css` — Styling, layout and animations (floating hearts, fades, hero section).
- `script.js` — JS to power floating hearts, the surprise button, music control, and scroll animations.
- `README.md` — (this file)

## Features

- Animated floating hearts background.
- Play/pause background music (uses an external sample by default).
- Surprise button that reveals a hidden message and triggers a heart burst.
- Photo gallery placeholders you can replace with your own images.
- Smooth fade-in scroll animations using Intersection Observer.

## How to open

The site is static — no build step or server required. Options:

- Double-click `index.html` in File Explorer to open in your default browser.
- From PowerShell, run:

```powershell
Invoke-Item .\\index.html
```

- (Optional) If you prefer a local server (recommended for testing audio or CORS-sensitive resources), use VS Code Live Server or run a simple HTTP server in the project folder.

## Customize

1. Replace gallery images
	- Edit `index.html` and replace the empty `src` values in the `.photo-card img` elements with your image paths (e.g., `photos/us1.jpg`).

2. Use your own background music
	- By default the page uses a sample track hosted on Bensound. For a local file, download your MP3 into the project folder and update the `<source src="...">` line inside the `<audio id="bg-music">` element in `index.html`, for example:

```html
<source src="music.mp3" type="audio/mp3">
```

3. Fonts
	- The page loads Google Fonts (`Dancing Script` and `Poppins`) from the `<head>` of `index.html`. To change fonts, update that `<link>` or the `:root` CSS variables in `style.css`.

4. Timing & heart density
	- Edit `script.js` if you'd like to change how frequently hearts spawn (adjust the interval) or their animation duration/font size.

## Notes & browser behavior

- Some browsers block autoplaying audio until the user interacts with the page. The play button handles this by prompting the user when necessary.
- The sample music is an external URL; if you want reliable offline playback, include a local copy and update the `<audio>` source.

## Credits

- Fonts: Google Fonts — `Dancing Script`, `Poppins`.
- Sample audio (default link): Bensound — "Love" (replace with your own licensed track for distribution).

## License

This project is provided as-is for personal use. If you'd like to reuse or share it publicly, consider adding a license. A permissive option is the MIT License.

---

Made with ❤ — feel free to customize and make it yours.