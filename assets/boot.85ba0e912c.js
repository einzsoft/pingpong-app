"use strict";
// Runs before the first paint, so a chosen theme never flashes the other one.
try {
  const saved = JSON.parse(localStorage.getItem("pingpong-settings-v1"));
  if (saved && (saved.theme === "dark" || saved.theme === "light")) document.documentElement.dataset.theme = saved.theme;
  if (saved && (saved.theme === "premium" || saved.skin === "premium")) { // for members: the same rule as isMember() in net.js, read from what the device kept
    const account = JSON.parse(localStorage.getItem("pingpong-account-v1")), member = JSON.parse(localStorage.getItem("pingpong-member-v1"));
    if (account && account.mode === "google" && member && Date.parse(member.expires_at) > Date.now()) {
      if (saved.theme === "premium") document.documentElement.dataset.theme = "premium";
      if (saved.skin === "premium") document.documentElement.dataset.skin = "premium";
    }
  }
} catch {}
