const themeBtn = document.getElementById("themeBtn");
const siteBg = document.getElementById("siteBg");
const upload = document.getElementById("wallpaperUpload");
const resetBg = document.getElementById("resetBg");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const backgrounds = {
  study: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=2200&q=85',
  mountains: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85',
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=85',
  city: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2200&q=85',
  sunset: 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=2200&q=85',
  ocean: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85',
  space: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2200&q=85'
};

function setBackground(key) {
  if (key === "gradient") {
    siteBg.style.backgroundImage =
      "linear-gradient(135deg, #101a35, #34206e, #0b6078)";
    localStorage.setItem("sshBg", "gradient");
    return;
  }

  if (backgrounds[key]) {
    siteBg.style.backgroundImage = `url("${backgrounds[key]}")`;
    localStorage.setItem("sshBg", key);
  }
}

document.querySelectorAll(".wallpaper").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".wallpaper").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    setBackground(btn.dataset.bg);
  });
});

upload.addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    siteBg.style.backgroundImage = `url("${e.target.result}")`;
    try {
      localStorage.setItem("sshCustomBg", e.target.result);
      localStorage.setItem("sshBg", "custom");
    } catch {
      alert("The image is too large to save permanently. It will remain until this tab is closed.");
    }
  };
  reader.readAsDataURL(file);
});

resetBg.addEventListener("click", () => {
  localStorage.removeItem("sshCustomBg");
  setBackground("study");
  document.querySelectorAll(".wallpaper").forEach(x => x.classList.remove("active"));
  document.querySelector('[data-bg="study"]').classList.add("active");
});

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const light = document.body.classList.contains("light");
    localStorage.setItem("sshTheme", light ? "light" : "dark");
    themeBtn.textContent = light ? "🌙" : "☀️";
  });
}

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function scrollToFeatures() {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("sshTheme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙";
  }

  const custom = localStorage.getItem("sshCustomBg");
  const savedBg = localStorage.getItem("sshBg");

  if (custom && savedBg === "custom") {
    siteBg.style.backgroundImage = `url("${custom}")`;
    document.querySelectorAll(".wallpaper").forEach(x => x.classList.remove("active"));
  } else if (savedBg && (backgrounds[savedBg] || savedBg === "gradient")) {
    setBackground(savedBg);
    document.querySelectorAll(".wallpaper").forEach(x => x.classList.remove("active"));
    const selected = document.querySelector(`[data-bg="${savedBg}"]`);
    if (selected) selected.classList.add("active");
  }
});
