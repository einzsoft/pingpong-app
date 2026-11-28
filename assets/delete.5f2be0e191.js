"use strict";
/* The page where someone deletes their account without the app (/delete/, build_app.py delete_page). It signs in the same way the app
   does (Google, through our own server) and then calls the same delete-account function the app calls, which ends every session and removes
   the account and everything that hangs on it. Its own session lives only in this tab (sessionStorage, its own key): it never touches the
   web app's session or progress, and closing the tab ends it. Nothing is sent before the person presses a button. */
const BACKEND = {"url": "https://pngfgnfwezsgvgvvjbyn.supabase.co", "key": "sb_publishable_PpQ3FIBjIieO3HuBecOgxQ_w4qRAcxp", "provider": "google", "turnstile": null, "lib": "assets/supabase.ee3be8de19.js"};
const el = id => document.getElementById(id);
const show = (id, on) => { el(id).hidden = !on; };
const SIGN_IN_FAILED = "เข้าสู่ระบบไม่สำเร็จ ลองอีกครั้ง ถ้ายังไม่ได้ส่งอีเมลมาที่ pingpong@einzsoft.com";
const DELETE_FAILED = "ลบไม่สำเร็จ ข้อมูลยังไม่ถูกลบ ลองอีกครั้ง หรือส่งอีเมลมาที่ pingpong@einzsoft.com";

(async () => {
  const client = window.supabase.createClient(BACKEND.url, BACKEND.key, {
    auth: { storage: window.sessionStorage, storageKey: "pingpong-delete-auth", flowType: "pkce", persistSession: true, autoRefreshToken: false, detectSessionInUrl: false },
  });
  const problem = text => { el("problem").textContent = text; show("problem", !!text); };
  const here = () => location.origin + location.pathname;

  /* Which step is on screen: out (not signed in), in (signed in, asked to confirm), done. */
  function step(name, email) {
    show("step-out", name === "out"); show("step-in", name === "in"); show("step-done", name === "done");
    if (email !== undefined) el("who").textContent = email;
  }
  async function refresh() {
    const { data } = await client.auth.getSession();
    const user = data && data.session && data.session.user;
    if (user && !user.is_anonymous) step("in", user.email || "บัญชี Google");
    else step("out");
  }

  const params = new URLSearchParams(location.search);
  if (params.has("code") || params.has("error") || params.has("error_description")) {
    const code = params.get("code");
    history.replaceState(null, "", location.pathname); // the code is used once and does not stay in the address
    if (code) { const { error } = await client.auth.exchangeCodeForSession(code); if (error) problem(SIGN_IN_FAILED); }
    else problem(SIGN_IN_FAILED);
  }
  await refresh();

  el("sign-in").addEventListener("click", async () => {
    problem("");
    el("sign-in").disabled = true;
    const { error } = await client.auth.signInWithOAuth({ provider: BACKEND.provider, options: { redirectTo: here() } });
    if (error) { el("sign-in").disabled = false; problem(SIGN_IN_FAILED); }
  });
  el("sure").addEventListener("change", () => { el("delete").disabled = !el("sure").checked; });
  el("sign-out").addEventListener("click", async () => {
    await client.auth.signOut({ scope: "local" }).catch(() => {});
    el("sure").checked = false; el("delete").disabled = true; problem("");
    step("out");
  });
  el("delete").addEventListener("click", async () => {
    if (!el("sure").checked) return;
    problem("");
    el("delete").disabled = true;
    const { error } = await client.functions.invoke("delete-account", { method: "POST" });
    if (error) { el("delete").disabled = !el("sure").checked; problem(DELETE_FAILED); return; }
    await client.auth.signOut({ scope: "local" }).catch(() => {});
    step("done");
  });
})().catch(() => { const box = document.getElementById("problem"); if (box) { box.textContent = "หน้านี้ใช้งานไม่ได้ในตอนนี้ ส่งอีเมลมาที่ pingpong@einzsoft.com ได้เลย"; box.hidden = false; } });
