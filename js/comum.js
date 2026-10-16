const $ = s => document.querySelector(s);

/* ---------- Armazenamento (localStorage). Troque por chamadas ao seu back-end. ---------- */
const store = {
  get(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const isAdmin = () => store.get('dc-admin', false);

/* ---------- Funções de apoio ---------- */
const eventos = () => store.get('dc-eventos', []);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = d => d.split('-').reverse().join('/');

/* ---------- Botão Login / Sair ---------- */
const btnLogin = $('#btn-login');
if (isAdmin()) {
  btnLogin.textContent = 'Sair';
  btnLogin.href = '#';
  btnLogin.onclick = e => {
    e.preventDefault();
    store.set('dc-admin', false);
    location.href = 'index.html';
  };
}

/* ---------- Menu do celular ---------- */
$('#btn-menu').onclick = () => {
  $('#nav-mobile').classList.toggle('hidden');
  $('#nav-mobile').classList.toggle('flex');
};
