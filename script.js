// ── MOCK DATA ───────────────────────────────────────────────────────────────
const USERS = [
  { name: "Ana Beatriz Costa", email: "ana.costa@empresa.com" },
  { name: "Carlos Eduardo Lima", email: "carlos.lima@tech.io" },
  { name: "Fernanda Oliveira", email: "fernanda.o@startup.co" },
  { name: "Gabriel Santos", email: "gabriel.s@corp.net" },
  { name: "Helena Rodrigues", email: "helena.r@agency.br" },
  { name: "Igor Mendes", email: "igor.m@design.io" },
  { name: "Juliana Pereira", email: "juliana.p@finance.com" },
  { name: "Lucas Ferreira", email: "lucas.f@dev.tech" },
  { name: "Mariana Silva", email: "mariana.s@media.br" },
  { name: "Nicolas Alves", email: "nicolas.a@cloud.io" },
];

const SUBJECTS = [
  "Reunião de alinhamento da equipe para o próximo quarter",
  "Proposta de projeto: Redesign do sistema de e-commerce",
  "Atualização importante sobre metas de vendas Q3",
  "Convite para o evento de lançamento do novo produto",
  "Relatório mensal de performance — Outubro 2025",
  "Feedback sobre a apresentação da última semana",
  "Nova parceria estratégica com empresa internacional",
  "Urgente: Revisão do contrato antes da assinatura",
  "Boas-vindas à nossa nova plataforma colaborativa",
  "Análise de mercado e oportunidades de crescimento",
  "Solicitação de aprovação para orçamento adicional",
  "Atualização de segurança — Ação necessária",
  "Resultado do processo seletivo para vaga sênior",
  "Workshop de inovação: Inscrições abertas",
  "Fatura #2025-4821 disponível para pagamento",
  "Convocação para assembleia geral extraordinária",
  "Novo framework adotado pela engenharia de software",
  "Pesquisa de satisfação dos colaboradores — Q4",
  "Política de home office atualizada para 2026",
  "Parabéns! Você foi promovido(a) 🎉",
  "Sprint review: entregáveis da semana",
  "Integração com API externa — status update",
  "Bem-vindo ao programa de mentoria 2026",
  "Convite: Team building — Janeiro 2026",
  "Mudança no horário da reunião semanal",
  "Documentação técnica v3.0 disponível",
  "Feedback 360° — período de avaliação aberto",
  "Oportunidade: Vaga de liderança disponível internamente",
  "Confirmação de viagem corporativa — São Paulo",
  "Relatório de segurança — Acesso suspeito detectado",
];

const BODIES = [
  "Espero que esteja bem! Gostaria de agendar uma reunião para alinharmos os próximos passos do projeto. Temos vários pontos importantes para discutir, incluindo o cronograma de entregas, a divisão de tarefas entre os membros da equipe e as métricas de sucesso. Por favor, me informe sua disponibilidade para os próximos dias.\n\nAguardo seu retorno com ansiedade.",
  "Segue em anexo a proposta detalhada que preparei para o nosso próximo projeto. Acredito que essa iniciativa tem um grande potencial de impacto positivo nos nossos resultados. Precisaria da sua análise e aprovação o quanto antes para darmos início à fase de planejamento detalhado.\n\nFique à vontade para fazer qualquer pergunta ou solicitar ajustes.",
  "Como combinado na nossa última conversa, estou enviando o relatório completo com todas as informações solicitadas. Caso precise de algum esclarecimento adicional ou queira discutir qualquer ponto específico, estou à disposição para uma chamada a qualquer momento durante a semana.\n\nAtenciosamente,",
  "Prezado(a), venho por meio deste comunicar uma atualização importante em relação ao projeto em andamento. Após análises internas, decidimos ajustar o escopo para garantir maior qualidade nas entregas e melhor alinhamento com os objetivos estratégicos da organização.\n\nEm breve enviaremos mais detalhes sobre as mudanças previstas.",
  "É com grande satisfação que compartilho esta notícia. Nossa equipe trabalhou arduamente nos últimos meses e finalmente conseguimos atingir os resultados esperados. Este é um momento de celebração para todos nós e representa o fruto do esforço coletivo!\n\nObrigado a todos pelo comprometimento.",
];

const FOLDERS_LIST = ["inbox", "inbox", "inbox", "sent", "drafts"];
const TAGS_LIST = [
  "work",
  "personal",
  "newsletter",
  "finance",
  null,
  null,
  "social",
  "work",
  null,
  "finance",
];
const TAG_STYLES = {
  work: { bg: "#dbeafe", color: "#1e40af" },
  personal: { bg: "#dcfce7", color: "#166534" },
  newsletter: { bg: "#fef9c3", color: "#854d0e" },
  finance: { bg: "#fce7f3", color: "#9d174d" },
  social: { bg: "#f3e8ff", color: "#6b21a8" },
};

const AVATAR_COLORS = [
  "#C62828",
  "#AD1457",
  "#6A1B9A",
  "#283593",
  "#1565C0",
  "#00695C",
  "#2E7D32",
  "#E65100",
  "#BF360C",
  "#37474F",
  "#880E4F",
  "#004D40",
];

// ── UTILS ───────────────────────────────────────────────────────────────────
function strColor(s) {
  let h = 0;
  for (const c of s) h = c.charCodeAt(0) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}
function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}
function formatDate(date) {
  const now = new Date(),
    diff = now - date;
  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);
  if (mins < 1) return "Agora";
  if (mins < 60) return `${mins}min`;
  if (hrs < 24) return `${hrs}h`;
  if (days === 1) return "Ontem";
  if (days < 7) return date.toLocaleDateString("pt-BR", { weekday: "short" });
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}
function formatFullDate(date) {
  return date.toLocaleString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function highlight(text, q) {
  if (!q) return escHtml(text);
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return escHtml(text).replace(new RegExp(`(${esc})`, "gi"), "<mark>$1</mark>");
}
function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ── GENERATE EMAILS ─────────────────────────────────────────────────────────
function generateEmails(count = 30) {
  const now = Date.now();
  const offsets = [
    3, 12, 35, 78, 150, 240, 480, 720, 1440, 2880, 4320, 7200, 10080, 14400,
  ];
  return Array.from({ length: count }, (_, i) => {
    const user = USERS[i % USERS.length];
    const folder = FOLDERS_LIST[i % FOLDERS_LIST.length];
    const tag = TAGS_LIST[i % TAGS_LIST.length];
    return {
      id: i + 1,
      subject: SUBJECTS[i % SUBJECTS.length],
      preview: BODIES[i % BODIES.length].slice(0, 110) + "…",
      body: BODIES[i % BODIES.length],
      from:
        folder === "sent" ? { name: "Você", email: "voce@mailflow.io" } : user,
      to:
        folder === "sent"
          ? [user]
          : [{ name: "Você", email: "voce@mailflow.io" }],
      date: new Date(now - offsets[i % offsets.length] * 60000),
      read: i % 3 !== 0,
      starred: i % 7 === 0,
      folder,
      tag,
      attachments:
        i % 6 === 0
          ? [
              { name: "documento.pdf", size: "245 KB" },
              { name: "relatorio.xlsx", size: "1.2 MB" },
            ]
          : [],
    };
  });
}

// ── STATE ───────────────────────────────────────────────────────────────────
const State = {
  emails: generateEmails(30),
  activeFolder: "inbox",
  activeFilter: "all",
  searchQuery: "",
  selectedId: null,
  darkMode: false,
  sidebarOpen: true,

  get filtered() {
    let list = this.emails;
    // Folder filter
    if (this.activeFolder.startsWith("tag-")) {
      const tag = this.activeFolder.replace("tag-", "");
      list = list.filter((e) => e.tag === tag);
    } else if (this.activeFolder === "starred") {
      list = list.filter((e) => e.starred);
    } else {
      list = list.filter((e) => e.folder === this.activeFolder);
    }
    // Tab filter
    if (this.activeFilter === "unread") list = list.filter((e) => !e.read);
    if (this.activeFilter === "starred") list = list.filter((e) => e.starred);
    if (this.activeFilter === "attach")
      list = list.filter((e) => e.attachments.length > 0);
    // Search
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(
        (e) =>
          e.subject.toLowerCase().includes(q) ||
          e.from.name.toLowerCase().includes(q) ||
          e.preview.toLowerCase().includes(q),
      );
    }
    return list;
  },
  get selectedEmail() {
    return this.emails.find((e) => e.id === this.selectedId) || null;
  },
  get unreadCount() {
    return this.emails.filter((e) => e.folder === "inbox" && !e.read).length;
  },
  get starredCount() {
    return this.emails.filter((e) => e.starred).length;
  },
  get draftsCount() {
    return this.emails.filter((e) => e.folder === "drafts").length;
  },
};

// ── AVATAR HELPER ────────────────────────────────────────────────────────────
function avatarHtml(name, size = 34, fontSize = 13) {
  const bg = strColor(name);
  const ini = initials(name);
  return `<div class="avatar" style="width:${size}px;height:${size}px;font-size:${fontSize}px;background:${bg}">${ini}</div>`;
}

// ── TAG HELPER ───────────────────────────────────────────────────────────────
function tagHtml(tag) {
  if (!tag) return "";
  const s = TAG_STYLES[tag] || { bg: "#f3f4f6", color: "#374151" };
  return `<span class="tag-pill" style="background:${s.bg};color:${s.color}">${tag}</span>`;
}

// ── RENDER EMAIL LIST ────────────────────────────────────────────────────────
function renderList() {
  const list = State.filtered;
  const container = document.getElementById("email-list");
  const title = document.getElementById("list-title");
  const chip = document.getElementById("unread-chip");
  const q = State.searchQuery;

  // Update title
  const LABELS = {
    inbox: "Caixa de Entrada",
    starred: "Com Estrela",
    sent: "Enviados",
    drafts: "Rascunhos",
    trash: "Lixeira",
    "tag-work": "Trabalho",
    "tag-personal": "Pessoal",
    "tag-finance": "Finanças",
  };
  title.textContent = q
    ? `Resultados para "${q}"`
    : LABELS[State.activeFolder] || State.activeFolder;

  // Unread chip
  const unread = list.filter((e) => !e.read).length;
  if (unread > 0) {
    chip.textContent = `${unread} não ${unread === 1 ? "lido" : "lidos"}`;
    chip.style.display = "";
  } else {
    chip.style.display = "none";
  }

  // Update badges
  document.getElementById("badge-inbox").textContent = State.unreadCount;
  document.getElementById("badge-starred").textContent = State.starredCount;
  document.getElementById("badge-drafts").textContent = State.draftsCount;
  document.querySelectorAll('[id^="badge-"]').forEach((b) => {
    b.style.display = b.textContent === "0" ? "none" : "";
  });

  // Empty
  if (list.length === 0) {
    container.innerHTML = `
        <div class="list-empty">
          <i class="bi bi-inbox list-empty-icon"></i>
          <div style="text-align:center">
            <p style="font-size:13px;font-weight:600;color:var(--text-2);margin-bottom:4px">
              ${q ? "Nenhum resultado encontrado" : "Pasta vazia"}
            </p>
            <p style="font-size:12px;color:var(--text-3)">
              ${q ? "Tente outros termos de pesquisa" : "Nenhum email aqui"}
            </p>
          </div>
        </div>`;
    return;
  }

  // Build items
  container.innerHTML = list
    .map((email, idx) => {
      const selected = email.id === State.selectedId;
      const delay = idx * 25;
      const att =
        email.attachments.length > 0
          ? '<i class="bi bi-paperclip" style="font-size:11px;color:var(--text-3)"></i>'
          : "";
      return `
      <div class="email-item${email.read ? "" : " unread"}${selected ? " selected" : ""}"
           data-id="${email.id}"
           style="animation:fadeUp .3s cubic-bezier(.4,0,.2,1) ${delay}ms both">
        <div class="email-item-avatar">
          ${avatarHtml(email.from.name, 35, 13)}
        </div>
        <div class="email-item-body">
          <div class="email-item-row1">
            <span class="email-item-from">${highlight(email.from.name, q)}</span>
            <div class="email-item-actions">
              <button class="action-mini" data-action="read" data-id="${email.id}" title="${email.read ? "Marcar não lido" : "Marcar lido"}">
                <i class="bi bi-${email.read ? "envelope" : "envelope-open"}"></i>
              </button>
              <button class="action-mini danger" data-action="delete" data-id="${email.id}" title="Excluir">
                <i class="bi bi-trash"></i>
              </button>
            </div>
            <span class="email-item-date">${formatDate(email.date)}</span>
          </div>
          <div class="email-item-subject">${highlight(email.subject, q)}</div>
          <div class="email-item-row3">
            <span class="email-item-preview">${highlight(email.preview, q)}</span>
            ${tagHtml(email.tag)}
            ${att}
            <button class="star-btn${email.starred ? " starred" : ""}" data-action="star" data-id="${email.id}" title="Favoritar">
              <i class="bi bi-star${email.starred ? "-fill" : ""}"></i>
            </button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  // Attach click events
  container.querySelectorAll(".email-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      // Ignore action button clicks
      if (e.target.closest("[data-action]")) return;
      const id = +el.dataset.id;
      selectEmail(id);
    });
  });

  container.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = +btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "star") {
        toggleStar(id);
      }
      if (action === "read") {
        toggleRead(id);
      }
      if (action === "delete") {
        deleteEmail(id);
      }
    });
  });
}

// ── SKELETON LOADING ─────────────────────────────────────────────────────────
function showSkeleton() {
  const container = document.getElementById("email-list");
  container.innerHTML = Array.from(
    { length: 10 },
    (_, i) => `
      <div style="display:flex;gap:10px;padding:11px 10px;margin-bottom:3px;animation:fadeUp .3s ease ${i * 50}ms both">
        <div class="skeleton" style="width:35px;height:35px;border-radius:50%;flex-shrink:0"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:7px">
          <div style="display:flex;justify-content:space-between">
            <div class="skeleton" style="width:${120 + (i % 3) * 30}px;height:12px"></div>
            <div class="skeleton" style="width:34px;height:10px"></div>
          </div>
          <div class="skeleton" style="width:${70 + (i % 4) * 5}%;height:11px"></div>
          <div class="skeleton" style="width:${50 + (i % 3) * 8}%;height:10px"></div>
        </div>
      </div>`,
  ).join("");
}

// ── SELECT EMAIL ─────────────────────────────────────────────────────────────
function selectEmail(id) {
  // Mark as read
  const email = State.emails.find((e) => e.id === id);
  if (email) email.read = true;
  State.selectedId = id;
  renderList();
  renderEmailView();

  // Mobile: show view panel
  document.getElementById("email-view-panel").classList.add("show");
}

// ── RENDER EMAIL VIEW ────────────────────────────────────────────────────────
function renderEmailView() {
  const email = State.selectedEmail;
  const empty = document.getElementById("empty-state");
  const view = document.getElementById("email-view");

  if (!email) {
    empty.style.display = "flex";
    view.style.display = "none";
    return;
  }

  empty.style.display = "none";
  view.style.display = "flex";
  view.classList.add("anim-slideRight");
  setTimeout(() => view.classList.remove("anim-slideRight"), 350);

  // Subject
  document.getElementById("view-subject").textContent = email.subject;

  // Tag next to subject
  const subjEl = document.getElementById("view-subject");
  subjEl.innerHTML =
    escHtml(email.subject) +
    (email.tag
      ? ` <span style="vertical-align:middle;margin-left:10px">${tagHtml(email.tag)}</span>`
      : "");

  // Sender card
  const avEl = document.getElementById("sender-avatar");
  avEl.style.background = strColor(email.from.name);
  avEl.textContent = initials(email.from.name);
  document.getElementById("sender-name").textContent = email.from.name;
  document.getElementById("sender-email").textContent = `<${email.from.email}>`;
  document.getElementById("sender-to").textContent =
    `Para: ${email.to.map((t) => t.name).join(", ")}`;
  document.getElementById("view-full-date").textContent = formatFullDate(
    email.date,
  );
  document.getElementById("view-date-label").textContent = formatFullDate(
    email.date,
  );

  // Attachments
  const attRow = document.getElementById("attachments-row");
  if (email.attachments.length > 0) {
    attRow.style.display = "flex";
    attRow.innerHTML = email.attachments
      .map(
        (a) => `
        <div class="attachment-chip">
          <i class="bi bi-file-earmark-pdf"></i>
          <span>${a.name}</span>
          <span style="color:var(--text-3);font-size:11px">${a.size}</span>
          <i class="bi bi-download" style="font-size:11px;margin-left:4px"></i>
        </div>`,
      )
      .join("");
  } else {
    attRow.style.display = "none";
  }

  // Body
  document.getElementById("email-body").innerHTML = email.body
    .split("\n")
    .map((l) => `<p>${escHtml(l)}</p>`)
    .join("");

  // Toolbar buttons state
  const starBtn = document.getElementById("view-star");
  starBtn.querySelector("i").className =
    `bi bi-star${email.starred ? "-fill" : ""}`;
  starBtn.style.color = email.starred ? "#f59e0b" : "";

  const readBtn = document.getElementById("view-read-toggle");
  readBtn.querySelector("i").className =
    `bi bi-${email.read ? "envelope" : "envelope-open"}`;
  readBtn.title = email.read ? "Marcar não lido" : "Marcar como lido";
}

// ── MUTATIONS ────────────────────────────────────────────────────────────────
function toggleStar(id) {
  const e = State.emails.find((e) => e.id === id);
  if (e) e.starred = !e.starred;
  renderList();
  if (State.selectedId === id) renderEmailView();
}

function toggleRead(id) {
  const e = State.emails.find((e) => e.id === id);
  if (e) e.read = !e.read;
  renderList();
  if (State.selectedId === id) renderEmailView();
}

function deleteEmail(id) {
  State.emails = State.emails.filter((e) => e.id !== id);
  if (State.selectedId === id) {
    State.selectedId = null;
    renderEmailView();
  }
  renderList();
  showToast("Email excluído", "default", "bi-trash");
}

function setFolder(folder) {
  State.activeFolder = folder;
  State.selectedId = null;
  State.searchQuery = "";
  State.activeFilter = "all";
  document.getElementById("search-input").value = "";
  document.getElementById("search-clear").classList.remove("visible");
  // Update active nav item
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.folder === folder);
  });
  // Update active filter tab
  document.querySelectorAll(".filter-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.filter === "all");
  });
  // Skeleton + render
  showSkeleton();
  setTimeout(() => {
    renderList();
    renderEmailView();
  }, 500);
  // Mobile: close sidebar
  if (window.innerWidth <= 700) closeSidebar();
}

// ── REFRESH ──────────────────────────────────────────────────────────────────
function refresh() {
  const icon = document.getElementById("refresh-icon");
  icon.classList.add("spin");
  showSkeleton();
  setTimeout(() => {
    icon.classList.remove("spin");
    renderList();
    showToast("Emails atualizados", "default", "bi-check-circle");
  }, 1000);
}

// ── SIDEBAR TOGGLE ───────────────────────────────────────────────────────────
function toggleSidebar() {
  State.sidebarOpen = !State.sidebarOpen;
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("overlay");
  sb.classList.toggle("collapsed", !State.sidebarOpen);
  if (window.innerWidth <= 700) {
    ov.classList.toggle("show", State.sidebarOpen);
  }
}
function closeSidebar() {
  State.sidebarOpen = false;
  document.getElementById("sidebar").classList.add("collapsed");
  document.getElementById("overlay").classList.remove("show");
}

// ── DARK MODE ────────────────────────────────────────────────────────────────
function toggleDark() {
  State.darkMode = !State.darkMode;
  document.documentElement.setAttribute(
    "data-theme",
    State.darkMode ? "dark" : "light",
  );
  const btn = document.getElementById("dark-toggle");
  btn.querySelector("i").className = `bi bi-${State.darkMode ? "sun" : "moon"}`;
  btn.classList.toggle("active", State.darkMode);
}

// ── SEARCH ───────────────────────────────────────────────────────────────────
let searchTimer;
function onSearch(val) {
  clearTimeout(searchTimer);
  document
    .getElementById("search-clear")
    .classList.toggle("visible", val.length > 0);
  searchTimer = setTimeout(() => {
    State.searchQuery = val;
    showSkeleton();
    setTimeout(renderList, 400);
  }, 350);
}

// ── COMPOSE ──────────────────────────────────────────────────────────────────
let composeMinimized = false;

function openCompose(opts = {}) {
  const win = document.getElementById("compose-window");
  win.classList.remove("hidden", "minimized");
  composeMinimized = false;
  document.getElementById("compose-to").value = opts.to || "";
  document.getElementById("compose-subject").value = opts.subject || "";
  document.getElementById("compose-body-text").value = opts.body || "";
  clearComposeErrors();
  // Focus
  setTimeout(() => {
    (opts.to
      ? document.getElementById("compose-subject")
      : document.getElementById("compose-to")
    ).focus();
  }, 100);
}

function closeCompose() {
  document.getElementById("compose-window").classList.add("hidden");
}

function toggleMinimize() {
  composeMinimized = !composeMinimized;
  document
    .getElementById("compose-window")
    .classList.toggle("minimized", composeMinimized);
  const icon = document.getElementById("compose-minimize").querySelector("i");
  icon.className = `bi bi-${composeMinimized ? "arrows-angle-expand" : "dash-lg"}`;
}

function clearComposeErrors() {
  ["to", "subject"].forEach((f) => {
    document.getElementById(`field-${f}`).classList.remove("error");
    document.getElementById(`err-${f}`).style.display = "none";
  });
}

async function sendEmail() {
  const to = document.getElementById("compose-to").value.trim();
  const subject = document.getElementById("compose-subject").value.trim();
  const body = document.getElementById("compose-body-text").value.trim();
  clearComposeErrors();
  let valid = true;
  if (!to) {
    document.getElementById("field-to").classList.add("error");
    document.getElementById("err-to").style.display = "";
    valid = false;
  }
  if (!subject) {
    document.getElementById("field-subject").classList.add("error");
    document.getElementById("err-subject").style.display = "";
    valid = false;
  }
  if (!valid) return;

  // Sending state
  const sendBtn = document.getElementById("send-btn");
  const sendLabel = document.getElementById("send-label");
  sendBtn.disabled = true;
  sendLabel.innerHTML = `<span class="sending-dots"><span></span><span></span><span></span></span>`;

  await new Promise((r) => setTimeout(r, 900));

  // Add to sent
  const newEmail = {
    id: Date.now(),
    subject,
    preview: body.slice(0, 110) + "…",
    body,
    from: { name: "Você", email: "voce@mailflow.io" },
    to: [{ name: to, email: to }],
    date: new Date(),
    read: true,
    starred: false,
    folder: "sent",
    tag: null,
    attachments: [],
  };
  State.emails.unshift(newEmail);

  sendBtn.disabled = false;
  sendLabel.textContent = "Enviar";
  closeCompose();
  showToast("Email enviado com sucesso!", "success", "bi-check-circle-fill");

  if (State.activeFolder === "sent") renderList();
}

// ── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type = "default", icon = "bi-info-circle") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast-msg${type !== "default" ? " " + type : ""}`;
  toast.innerHTML = `<i class="bi ${icon}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all .3s";
    setTimeout(() => toast.remove(), 320);
  }, 3000);
}

// ── KEYBOARD SHORTCUTS ────────────────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
  if (e.key === "c" || e.key === "C") openCompose();
  if (e.key === "Escape") {
    if (State.selectedId) {
      State.selectedId = null;
      renderEmailView();
    }
    closeCompose();
  }
  if (e.key === "?")
    showToast("Atalhos: C = Compor, Esc = Fechar", "default", "bi-keyboard");
  if (e.key === "d" && State.selectedId) deleteEmail(State.selectedId);
  if (e.key === "u" && State.selectedId) toggleRead(State.selectedId);
  if (e.key === "s" && State.selectedId) toggleStar(State.selectedId);
});

// ── EVENT BINDINGS ────────────────────────────────────────────────────────────
document
  .getElementById("sidebar-toggle")
  .addEventListener("click", toggleSidebar);
document.getElementById("overlay").addEventListener("click", closeSidebar);
document.getElementById("dark-toggle").addEventListener("click", toggleDark);
document.getElementById("refresh-btn").addEventListener("click", refresh);
document
  .getElementById("compose-btn")
  .addEventListener("click", () => openCompose());
document
  .getElementById("compose-close")
  .addEventListener("click", closeCompose);
document
  .getElementById("compose-minimize")
  .addEventListener("click", toggleMinimize);
document
  .getElementById("compose-header")
  .addEventListener("dblclick", toggleMinimize);
document.getElementById("send-btn").addEventListener("click", sendEmail);

// Search
document
  .getElementById("search-input")
  .addEventListener("input", (e) => onSearch(e.target.value));
document.getElementById("search-clear").addEventListener("click", () => {
  document.getElementById("search-input").value = "";
  onSearch("");
  document.getElementById("search-input").focus();
});

// Nav folders
document.querySelectorAll(".nav-item[data-folder]").forEach((btn) => {
  btn.addEventListener("click", () => setFolder(btn.dataset.folder));
});

// Filter tabs
document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    State.activeFilter = tab.dataset.filter;
    showSkeleton();
    setTimeout(renderList, 380);
  });
});

// View toolbar
document.getElementById("view-back").addEventListener("click", () => {
  State.selectedId = null;
  renderEmailView();
  renderList();
  document.getElementById("email-view-panel").classList.remove("show");
});

document.getElementById("view-delete").addEventListener("click", () => {
  if (State.selectedId) deleteEmail(State.selectedId);
});
document.getElementById("view-read-toggle").addEventListener("click", () => {
  if (State.selectedId) toggleRead(State.selectedId);
});
document.getElementById("view-star").addEventListener("click", () => {
  if (State.selectedId) toggleStar(State.selectedId);
});
document.getElementById("reply-btn").addEventListener("click", () => {
  const e = State.selectedEmail;
  if (e) openCompose({ to: e.from.email, subject: `Re: ${e.subject}` });
});
document.getElementById("reply-all-btn").addEventListener("click", () => {
  const e = State.selectedEmail;
  if (e) openCompose({ to: e.from.email, subject: `Re: ${e.subject}` });
});
document.getElementById("forward-btn").addEventListener("click", () => {
  const e = State.selectedEmail;
  if (e)
    openCompose({
      subject: `Fwd: ${e.subject}`,
      body: `\n\n--- Mensagem original ---\nDe: ${e.from.name} <${e.from.email}>\n\n${e.body}`,
    });
});

// ── INITIAL RENDER ────────────────────────────────────────────────────────────
showSkeleton();
setTimeout(() => {
  renderList();
  renderEmailView();
  showToast(
    "Bem-vindo ao MailFlow! Pressione ? para atalhos.",
    "default",
    "bi-envelope-heart-fill",
  );
}, 700);

// ── RESPONSIVE: close sidebar on small screen initially ───────────────────────
if (window.innerWidth <= 700) {
  State.sidebarOpen = false;
  document.getElementById("sidebar").classList.add("collapsed");
}
