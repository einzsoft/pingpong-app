"use strict";
// Runs before the first paint, so a chosen theme never flashes the other one.
try {
  const saved = JSON.parse(localStorage.getItem("pingpong-settings-v1"));
  if (saved && (saved.theme === "dark" || saved.theme === "light")) document.documentElement.dataset.theme = saved.theme;
} catch {}
