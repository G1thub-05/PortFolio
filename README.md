from pathlib import Path

svg = r'''<svg width="1600" height="330" viewBox="0 0 1600 330" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1600" y2="330" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18253D"/>
      <stop offset="1" stop-color="#35527F"/>
    </linearGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" stroke="#AFC8F4" stroke-opacity="0.08"/>
    </pattern>
    <linearGradient id="name" x1="270" y1="180" x2="560" y2="230" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#A9C7FF"/>
    </linearGradient>
  </defs>

  <rect x="2" y="2" width="1596" height="326" rx="20" fill="url(#bg)"/>
  <rect x="2" y="2" width="1596" height="326" rx="20" fill="url(#grid)"/>

  <!-- subtle border -->
  <rect x="2" y="2" width="1596" height="326" rx="20" stroke="#4B6792" stroke-opacity="0.45" stroke-width="2"/>

  <!-- left content -->
  <text x="62" y="112"
        fill="#BBD1F5"
        font-family="Courier New, monospace"
        font-size="18"
        font-weight="600"
        letter-spacing="5">JAVA FULL STACK DEVELOPER</text>

  <text x="62" y="188"
        fill="#FFFFFF"
        font-family="Inter, Arial, sans-serif"
        font-size="54"
        font-weight="700">Hey, I’m</text>

  <text x="334" y="188"
        fill="url(#name)"
        font-family="Inter, Arial, sans-serif"
        font-size="54"
        font-weight="700">Digeshwar</text>

  <circle cx="616" cy="177" r="7" fill="#7AD9C8"/>

  <text x="62" y="236"
        fill="#C7D6EF"
        font-family="Inter, Arial, sans-serif"
        font-size="23"
        font-weight="400">Building scalable systems &amp; thoughtful web experiences.</text>

  <!-- code decoration -->
  <g fill="#A9C8F4" fill-opacity="0.26"
     font-family="Courier New, monospace" font-weight="700">
    <text x="1430" y="150" font-size="112">{</text>
    <text x="1510" y="212" font-size="112">}</text>
    <text x="1395" y="268" font-size="112">/</text>
    <text x="1475" y="280" font-size="112">}</text>
  </g>

  <circle cx="1465" cy="221" r="13" fill="#A9CFFF"/>
</svg>
'''

header_path = "/mnt/data/portfolio-header.svg"
Path(header_path).write_text(svg, encoding="utf-8")

readme_header = r'''<div align="center">

<img src="./portfolio-header.svg" width="100%" alt="Digeshwar - Java Full Stack Developer"/>

<br/>

<a href="https://g1thub-05.github.io/PortFolio/">
  <img src="https://img.shields.io/badge/🌐%20Live%20Portfolio-Visit%20Website-0072ff?style=for-the-badge" alt="Live Portfolio"/>
</a>

<a href="https://github.com/G1thub-05">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>

</div>

---

## 👨‍💻 About Me

I am a **Java Full Stack Developer** focused on building clean, responsive, and user-friendly web applications.

This repository contains my personal portfolio website built with **HTML, CSS, and JavaScript** and deployed using **GitHub Pages**.

## 🌐 Live Portfolio

**https://g1thub-05.github.io/PortFolio/**

## 🧰 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,javascript&perline=10"/>

</div>

## ✨ Features

- 📱 Responsive design
- 🎨 Modern UI
- ⚡ JavaScript interactions
- 📂 Project showcase
- 🛠️ Skills section
- 📞 Contact section
- 🌐 GitHub Pages deployment

## 📁 Project Structure

```text
PortFolio/
├── index.html
├── css/
├── js/
├── images/
├── portfolio-header.svg
└── README.md
```

## 🚀 Run Locally

```bash
git clone https://github.com/G1thub-05/PortFolio.git
cd PortFolio
```

Open `index.html` in your browser, or use VS Code with Live Server.

---

<div align="center">

⭐ **Thanks for visiting my portfolio!**

</div>
'''

readme_path = "/mnt/data/README_with_custom_header.md"
Path(readme_path).write_text(readme_header, encoding="utf-8")

print(header_path)
print(readme_path)
