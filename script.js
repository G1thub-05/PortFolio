const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
	const open = menuButton.getAttribute("aria-expanded") === "true";
	menuButton.setAttribute("aria-expanded", String(!open));
	navigation.classList.toggle("open", !open);
});
navigation.querySelectorAll("a").forEach((link) =>
	link.addEventListener("click", () => {
		navigation.classList.remove("open");
		menuButton.setAttribute("aria-expanded", "false");
	}),
);
document.querySelector("#year").textContent = new Date().getFullYear();

const skillIcons = {
	REACT: "react",
	JAVASCRIPT: "js",
	TYPESCRIPT: "ts",
	HTML: "html",
	CSS: "css",
	BOOTSTRAP: "bootstrap",
	TAILWIND: "tailwind",
	JAVA: "java",
	"SPRING BOOT": "spring",
	"SPRING SECURITY": "spring",
	JPA: "hibernate",
	MYSQL: "mysql",
	MONGODB: "mongodb",
	GIT: "git",
	DOCKER: "docker",
	"AWS BASICS": "aws",
	"GITHUB ACTIONS": "github",
	POSTMAN: "postman",
};
const skillGlyphs = {
	"REST APIS":
		'<svg viewBox="0 0 20 20"><path d="M7 4 2.5 10 7 16M13 4l4.5 6-4.5 6M11.5 3l-3 14"/></svg>',
	MICROSERVICES:
		'<svg viewBox="0 0 20 20"><rect x="1.5" y="2" width="7" height="6" rx="1.2"/><rect x="11.5" y="2" width="7" height="6" rx="1.2"/><rect x="6.5" y="12" width="7" height="6" rx="1.2"/><path d="M5 8v1.5h10V8M10 9.5V12"/><path d="M3.5 4.5h.01M13.5 4.5h.01M8.5 14.5h.01"/></svg>',
};
const skillIconUrls = {
	SWAGGER: "https://cdn.simpleicons.org/swagger/88A3C8",
	ORACLE:
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
	"OAUTH 2.0": "https://api.iconify.design/logos/oauth.svg",
};

document.querySelectorAll(".skill-chips span").forEach((chip) => {
	const label = chip.textContent.trim();
	const icon = skillIcons[label];
	const iconUrl = skillIconUrls[label];
	if (icon || iconUrl) {
		const image = document.createElement("img");
		image.src = iconUrl || `https://skillicons.dev/icons?i=${icon}&theme=light`;
		image.alt = "";
		image.loading = "lazy";
		image.setAttribute("aria-hidden", "true");
		chip.prepend(image);
	} else if (skillGlyphs[label]) {
		const glyph = document.createElement("span");
		glyph.className = "skill-glyph";
		glyph.innerHTML = skillGlyphs[label];
		glyph.setAttribute("aria-hidden", "true");
		chip.prepend(glyph);
	}
});

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
	const darkMode = theme === "dark";
	themeIcon.className = `fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`;
	themeToggle.setAttribute("aria-label", `Switch to ${darkMode ? "light" : "dark"} mode`);
	themeToggle.title = `Switch to ${darkMode ? "light" : "dark"} mode`;
	document.querySelector('meta[name="theme-color"]').content = darkMode ? "#0b1220" : "#f7f8fa";
};

let savedTheme = "light";
try {
	savedTheme = localStorage.getItem("portfolio-theme") || "light";
} catch {}
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
	const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
	setTheme(nextTheme);
	try {
		localStorage.setItem("portfolio-theme", nextTheme);
	} catch {}
});

