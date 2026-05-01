// ============================================================
//  THIRUKKURAL WEBSITE — MAIN JAVASCRIPT
// ============================================================
/* global KURALS, filterByPal, filterByTag, searchKurals, getKuralByNumber */

/* -----------------------------------------------
   SECTION 1: RENDERING
----------------------------------------------- */

const PAL_CLASS = { "Virtue": "pal-aram", "Wealth": "pal-porul", "Love": "pal-inbam" };

function renderTagsHtml(kural) {
  return [
    ...kural.tags.ta.map(t =>
      `<span class="tag tag-ta" onclick="setTagFilter('${escapeForAttr(t)}','ta')" title="Filter by this tag">${t}</span>`
    ),
    ...kural.tags.en.map(t =>
      `<span class="tag tag-en" onclick="setTagFilter('${escapeForAttr(t)}','en')" title="Filter by this tag">${t}</span>`
    )
  ].join("");
}

function renderKuralCard(kural, highlight = "") {
  const line1     = kural.kural.line1;
  const line2     = kural.kural.line2;
  const fullKural = line1 + "\n" + line2;
  const enText    = highlightText(kural.couplet_en, highlight);
  const meaningEn = highlightText(kural.meaning.en, highlight);
  const palClass  = PAL_CLASS[kural.pal.en] || "pal-aram";
  const v         = getVotes(kural.number);

  return `
    <div class="kural-card" id="kural-${kural.number}">
      <div class="kural-card-header">
        <div>
          <div class="kural-card-number">
            குறள் ${kural.number}
            <span class="pal-badge ${palClass}" style="margin-left:8px">${kural.pal.en}</span>
          </div>
          <div class="kural-card-adhigaram">${kural.adhigaram.ta} · ${kural.adhigaram.en}</div>
        </div>
        <div class="kural-votes" id="votes-${kural.number}">
          <button class="vote-btn vote-btn-up${v.userVote === 'up' ? ' voted' : ''}" onclick="castVote(${kural.number},'up')" title="Upvote this kural">
            ▲ <span class="vote-count">${v.up}</span>
          </button>
          <button class="vote-btn vote-btn-down${v.userVote === 'down' ? ' voted' : ''}" onclick="castVote(${kural.number},'down')" title="Downvote this kural">
            ▼ <span class="vote-count">${v.down}</span>
          </button>
        </div>
      </div>
      <div class="kural-text-ta">${line1}<br>${line2}</div>
      <div class="kural-text-en">${enText}</div>
      <div class="kural-meaning">
        <strong>பொருள் (Tamil):</strong> ${kural.meaning.ta}<br><br>
        <strong>Meaning (English):</strong> ${meaningEn}
      </div>
      <div class="kural-tags">${renderTagsHtml(kural)}</div>
      <div class="kural-actions">
        <button class="btn btn-primary btn-sm" onclick="copyText('${escapeForAttr(fullKural)}', this)">Copy kural</button>
        <button class="btn btn-sm" onclick="copyText('${escapeForAttr(kural.meaning.en)}', this)">Copy meaning</button>
        <button class="btn btn-sm" onclick="copyFull(${kural.number}, this)">Copy full</button>
        <a href="detail.html?kural=${kural.number}" class="btn btn-sm">View full →</a>
        <button class="btn btn-sm" onclick="shareKural(${kural.number}, this)" title="Share this kural">↗ Share</button>
      </div>
    </div>
  `;
}

function renderKuralList(container, kurals, highlight = "") {
  if (!container) return;
  if (kurals.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:48px 24px;color:var(--color-text-faint)">
        <div style="font-size:36px;margin-bottom:12px">🔍</div>
        <div style="font-size:16px;font-weight:500;margin-bottom:6px">No kurals found</div>
        <div style="font-size:13px">Try a different search term or browse by Pal above.</div>
      </div>
    `;
    return;
  }
  container.innerHTML = kurals.map(k => renderKuralCard(k, highlight)).join("");
}

/* -----------------------------------------------
   SECTION 2: SEARCH
----------------------------------------------- */

let searchTimeout = null;

function handleSearch(query, containerId) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const results  = searchKurals(query);
    const container = document.getElementById(containerId);
    const countEl  = document.getElementById("search-count");
    renderKuralList(container, results, query);
    if (countEl) {
      countEl.textContent = results.length > 0
        ? `${results.length} kural${results.length !== 1 ? "s" : ""} found for "${query}"`
        : `No results for "${query}"`;
    }
  }, 200);
}

function highlightText(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), '<mark class="highlight">$1</mark>');
}

/* -----------------------------------------------
   SECTION 3: BROWSE / FILTER
----------------------------------------------- */

let currentPalFilter = "all";
let currentTagFilter = null;
let currentPage = 1;
let resultsPerPage = 20;
let paginatedKurals = [];

function handleResultsPerPageChange(value) {
  resultsPerPage = parseInt(value);
  localStorage.setItem("kural-results-per-page", resultsPerPage);
  currentPage = 1;
  renderPaginatedKurals();
}

function renderPaginatedKurals() {
  if (paginatedKurals.length === 0) {
    document.getElementById("kural-list").innerHTML = `
      <div style="text-align:center;padding:48px 24px;color:var(--color-text-faint)">
        <div style="font-size:36px;margin-bottom:12px">🔍</div>
        <div style="font-size:16px;font-weight:500;margin-bottom:6px">No kurals found</div>
        <div style="font-size:13px">Try a different search term or browse by Pal above.</div>
      </div>
    `;
    document.getElementById("pagination-controls").style.display = "none";
    return;
  }

  const totalPages = Math.ceil(paginatedKurals.length / resultsPerPage);
  const start = (currentPage - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  const pageKurals = paginatedKurals.slice(start, end);

  renderKuralList(document.getElementById("kural-list"), pageKurals);

  if (totalPages > 1) {
    document.getElementById("pagination-controls").style.display = "flex";
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === totalPages;
    document.getElementById("pagination-info").textContent = `Page ${currentPage} of ${totalPages}`;
  } else {
    document.getElementById("pagination-controls").style.display = "none";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextPage() {
  const totalPages = Math.ceil(paginatedKurals.length / resultsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderPaginatedKurals();
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPaginatedKurals();
  }
}

function setPalFilter(pal) {
  currentPalFilter = pal;
  clearTagFilterUI();
  document.querySelectorAll(".pal-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.pal === pal);
  });
  paginatedKurals = filterByPal(pal);
  currentPage = 1;
  renderPaginatedKurals();
  const countEl = document.getElementById("search-count");
  if (countEl) countEl.textContent = `${paginatedKurals.length} kurals`;
}

function setAdhigaramFilter(adhiNum) {
  clearTagFilterUI();
  paginatedKurals = KURALS.filter(k => k.adhigaram.number === adhiNum);
  currentPage = 1;
  renderPaginatedKurals();
  document.querySelectorAll(".adhigaram-item").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.adhi) === adhiNum);
  });
}

function setTagFilter(tag, lang) {
  const container = document.getElementById("kural-list");
  if (!container) {
    window.location.href = `browse.html?tag=${encodeURIComponent(tag)}&lang=${lang || "en"}`;
    return;
  }
  currentTagFilter = { tag, lang };
  paginatedKurals = filterByTag(tag, lang);
  currentPage = 1;
  renderPaginatedKurals();
  showTagFilterBar(tag, paginatedKurals.length);
  const url = new URL(window.location.href);
  url.searchParams.set("tag", tag);
  url.searchParams.set("lang", lang || "en");
  window.history.pushState({}, "", url);
}

function clearTagFilter() {
  currentTagFilter = null;
  clearTagFilterUI();
  const container = document.getElementById("kural-list");
  renderKuralList(container, filterByPal(currentPalFilter));
  const url = new URL(window.location.href);
  url.searchParams.delete("tag");
  url.searchParams.delete("lang");
  window.history.pushState({}, "", url);
}

function showTagFilterBar(tag, count) {
  clearTagFilterUI();
  const container = document.getElementById("kural-list");
  if (!container) return;
  const bar = document.createElement("div");
  bar.id = "tag-filter-bar";
  bar.className = "tag-filter-bar";
  bar.innerHTML = `
    <span class="tag-filter-bar-label">Filtered by tag:</span>
    <span class="tag-filter-bar-tag">${tag}</span>
    <span class="tag-filter-bar-label">&nbsp;·&nbsp; ${count} kural${count !== 1 ? "s" : ""}</span>
    <button class="tag-filter-bar-clear" onclick="clearTagFilter()">✕ Clear</button>
  `;
  container.parentNode.insertBefore(bar, container);
}

function clearTagFilterUI() {
  document.getElementById("tag-filter-bar")?.remove();
}

/* -----------------------------------------------
   SECTION 4: KURAL OF THE DAY
----------------------------------------------- */

function getKuralOfTheDay() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((today - start) / 86400000);
  return KURALS[dayOfYear % KURALS.length];
}

function renderKuralOfTheDay() {
  const container = document.getElementById("kotd-container");
  if (!container) return;
  const kural    = getKuralOfTheDay();
  const fullText = kural.kural.line1 + "\n" + kural.kural.line2;

  container.innerHTML = `
    <div class="kotd-card">
      <div class="kotd-meta">
        குறள் ${kural.number} &nbsp;·&nbsp; ${kural.adhigaram.ta} &nbsp;·&nbsp; ${kural.pal.ta}
      </div>
      <div class="kural-text-ta">${kural.kural.line1}<br>${kural.kural.line2}</div>
      <div class="kural-text-en">${kural.couplet_en}</div>
      <div class="kural-meaning">
        <strong>பொருள்:</strong> ${kural.meaning.ta}<br><br>
        <strong>Meaning:</strong> ${kural.meaning.en}
      </div>
      <div class="kural-tags">${renderTagsHtml(kural)}</div>
      <div class="kural-actions">
        <button class="btn btn-primary" onclick="copyText('${escapeForAttr(fullText)}', this)">Copy kural</button>
        <button class="btn" onclick="copyText('${escapeForAttr(kural.meaning.en)}', this)">Copy meaning</button>
        <button class="btn" onclick="copyFull(${kural.number}, this)">Copy full</button>
        <a href="detail.html?kural=${kural.number}" class="btn">Read more →</a>
      </div>
      <div class="share-section">
        <span class="share-label">Share:</span>
        <a href="${getTwitterShareUrl(kural)}" target="_blank" rel="noopener" class="share-btn share-btn-twitter">𝕏 Twitter</a>
        <a href="${getFacebookShareUrl(kural)}" target="_blank" rel="noopener" class="share-btn share-btn-facebook">Facebook</a>
        <button class="share-btn share-btn-web" onclick="shareKural(${kural.number}, this)">↗ Share</button>
        <button class="share-btn share-btn-image" onclick="downloadKuralCard(${kural.number}, this)">↓ Image</button>
      </div>
    </div>
  `;
}

/* -----------------------------------------------
   SECTION 5: DETAIL PAGE
----------------------------------------------- */

function renderDetailPage() {
  const params    = new URLSearchParams(window.location.search);
  const num       = parseInt(params.get("kural"));
  const kural     = getKuralByNumber(num);
  const container = document.getElementById("detail-container");
  if (!container) return;

  if (!kural) {
    container.innerHTML = `<p style="padding:32px;color:var(--color-text-muted)">Kural #${num} not found. <a href="browse.html">Browse all →</a></p>`;
    return;
  }

  document.title = `குறள் ${kural.number} — ${kural.adhigaram.ta} | Thirukkural`;
  const fullText = kural.kural.line1 + "\n" + kural.kural.line2;
  const palClass = PAL_CLASS[kural.pal.en] || "pal-aram";
  const idx  = KURALS.findIndex(k => k.number === num);
  const prev = idx > 0 ? KURALS[idx - 1] : null;
  const next = idx < KURALS.length - 1 ? KURALS[idx + 1] : null;

  container.innerHTML = `
    <nav class="breadcrumb" style="margin-bottom:20px;font-size:13px">
      <a href="index.html">Home</a>
      <span class="breadcrumb-sep">›</span>
      <a href="browse.html">Browse</a>
      <span class="breadcrumb-sep">›</span>
      <span style="color:var(--color-text-muted)">${kural.adhigaram.ta}</span>
      <span class="breadcrumb-sep">›</span>
      <span>குறள் ${kural.number}</span>
    </nav>

    <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px;flex-wrap:wrap">
      <span class="pal-badge ${palClass}">${kural.pal.ta} — ${kural.pal.en}</span>
      <span style="color:var(--color-text-faint);font-size:12px">·</span>
      <span style="font-size:12px;color:var(--color-text-faint)">${kural.iyal.ta} (${kural.iyal.en})</span>
      <span style="color:var(--color-text-faint);font-size:12px">·</span>
      <span style="font-size:12px;color:var(--color-text-faint)">Adhigaram ${kural.adhigaram.number}: ${kural.adhigaram.ta}</span>
    </div>

    <div class="detail-kural-block">
      <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-gold);margin-bottom:14px;font-weight:600">குறள் ${kural.number}</div>
      <div class="detail-kural-ta">${kural.kural.line1}<br>${kural.kural.line2}</div>
      <div class="detail-couplet-en" style="margin-top:16px">${kural.couplet_en}</div>
      <div style="font-size:12px;color:rgba(253,246,236,0.4);margin-top:12px;font-style:italic">${kural.transliteration}</div>
    </div>

    <div style="margin-bottom:20px">
      <div class="section-label">Meaning — பொருள்</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px" class="meaning-grid">
        <div class="kural-meaning"><strong>தமிழ் பொருள்:</strong><br>${kural.meaning.ta}</div>
        <div class="kural-meaning"><strong>English Meaning:</strong><br>${kural.meaning.en}</div>
      </div>
    </div>

    <div style="margin-bottom:24px">
      <div class="section-label">Tags — குறிச்சொற்கள்</div>
      <div class="kural-tags">${renderTagsHtml(kural)}</div>
    </div>

    <div style="margin-bottom:24px">
      <div class="section-label">Copy</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="copyText('${escapeForAttr(fullText)}', this)">Copy kural (Tamil)</button>
        <button class="btn" onclick="copyText('${escapeForAttr(kural.couplet_en)}', this)">Copy English couplet</button>
        <button class="btn" onclick="copyText('${escapeForAttr(kural.meaning.en)}', this)">Copy meaning</button>
        <button class="btn" onclick="copyFull(${kural.number}, this)">Copy everything</button>
      </div>
    </div>

    <div style="margin-bottom:32px">
      <div class="section-label">Share</div>
      <div class="share-section" style="border-top:none;padding-top:0;margin-top:0">
        <a href="${getTwitterShareUrl(kural)}" target="_blank" rel="noopener" class="share-btn share-btn-twitter">𝕏 Twitter</a>
        <a href="${getFacebookShareUrl(kural)}" target="_blank" rel="noopener" class="share-btn share-btn-facebook">Facebook</a>
        <button class="share-btn share-btn-web" onclick="shareKural(${kural.number}, this)">↗ Share</button>
        <button class="share-btn share-btn-image" onclick="downloadKuralCard(${kural.number}, this)">↓ Download Image</button>
        <button class="btn btn-sm" onclick="copyText(window.location.href, this)">Copy link</button>
      </div>
    </div>

    <div class="detail-nav">
      ${prev ? `<a href="detail.html?kural=${prev.number}" class="btn">← குறள் ${prev.number}</a>` : `<span></span>`}
      <a href="browse.html" class="btn">All kurals</a>
      ${next ? `<a href="detail.html?kural=${next.number}" class="btn">குறள் ${next.number} →</a>` : `<span></span>`}
    </div>
  `;
}

/* -----------------------------------------------
   SECTION 6: COPY TO CLIPBOARD
----------------------------------------------- */

function copyText(text, btn) {
  navigator.clipboard.writeText(text)
    .then(() => {
      const original = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("btn-copied");
      setTimeout(() => { btn.textContent = original; btn.classList.remove("btn-copied"); }, 2000);
    })
    .catch(() => {});
}

function copyFull(kuralNumber, btn) {
  const kural = getKuralByNumber(kuralNumber);
  if (!kural) return;
  const text = [
    `குறள் ${kural.number} — ${kural.adhigaram.ta} (${kural.adhigaram.en})`,
    "",
    kural.kural.line1,
    kural.kural.line2,
    "",
    kural.couplet_en,
    "",
    "Meaning: " + kural.meaning.en
  ].join("\n");
  copyText(text, btn);
}

/* -----------------------------------------------
   SECTION 7: SOCIAL SHARING
----------------------------------------------- */

function getShareUrl(kuralNumber) {
  const base = window.location.origin +
    window.location.pathname.split("/").slice(0, -1).join("/");
  return `${base}/detail.html?kural=${kuralNumber}`;
}

function getTwitterShareUrl(kural) {
  const text = `Kural of the Day | நாளின் குறள் ${kural.number}\n\n${kural.kural.line1}\n${kural.kural.line2}\n\nபொருள்: ${kural.meaning.ta}\n\n${kural.meaning.en}\n\n#Thirukkural #Tamil #Wisdom`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(getShareUrl(kural.number))}`;
}

function getFacebookShareUrl(kural) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(kural.number))}`;
}

async function shareKural(kuralNumber, btn) {
  const kural = getKuralByNumber(kuralNumber);
  if (!kural) return;
  const shareData = {
    title: `குறள் ${kural.number} — ${kural.adhigaram.ta}`,
    text:  `${kural.kural.line1}\n${kural.kural.line2}\n\n"${kural.meaning.en}"`,
    url:   getShareUrl(kuralNumber)
  };
  if (navigator.share && navigator.canShare?.(shareData)) {
    try { await navigator.share(shareData); }
    catch (err) { if (err.name !== "AbortError") copyText(getShareUrl(kuralNumber), btn); }
  } else {
    copyText(getShareUrl(kuralNumber), btn);
  }
}

// Generates a 1080×1080 share card and downloads it as PNG
async function downloadKuralCard(kuralNumber, btn) {
  const kural = getKuralByNumber(kuralNumber);
  if (!kural) return;
  const orig = btn.textContent;
  btn.textContent = "Generating…";
  btn.disabled = true;

  await document.fonts.ready;

  const W = 1080, H = 1080, P = 56;
  const MAXW = W - P * 2 - 80; // 852px usable text width
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Background
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#1C0F06");
  bg.addColorStop(1, "#2C1A0E");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Outer gold border
  ctx.strokeStyle = "#B8860B"; ctx.lineWidth = 7;
  ctx.strokeRect(P / 2, P / 2, W - P, H - P);

  // Inner thin border
  ctx.strokeStyle = "rgba(184,134,11,0.3)"; ctx.lineWidth = 1.5;
  ctx.strokeRect(P, P, W - P * 2, H - P * 2);

  // Header band
  ctx.fillStyle = "rgba(184,134,11,0.12)";
  ctx.fillRect(P / 2 + 4, P / 2 + 4, W - P - 8, 100);

  ctx.textAlign = "center";

  // "Kural of the Day" title
  ctx.fillStyle = "#B8860B";
  ctx.font = `600 16px 'Inter', sans-serif`;
  ctx.fillText("KURAL OF THE DAY", W / 2, 84);

  // Kural meta
  ctx.fillStyle = "rgba(253,246,236,0.55)";
  ctx.font = `500 14px 'Noto Serif Tamil', serif`;
  ctx.fillText(`குறள் ${kural.number}  ·  ${kural.adhigaram.ta}  ·  ${kural.pal.ta}`, W / 2, 116);

  _hline(ctx, P + 40, 150, W - P - 40, "rgba(184,134,11,0.4)");

  // Tamil couplet — auto-shrink font until both lines fit within MAXW
  let tSize = 48;
  ctx.font = `700 ${tSize}px 'Noto Serif Tamil', serif`;
  while (tSize > 24) {
    if (ctx.measureText(kural.kural.line1).width <= MAXW &&
        ctx.measureText(kural.kural.line2).width <= MAXW) break;
    tSize -= 2;
    ctx.font = `700 ${tSize}px 'Noto Serif Tamil', serif`;
  }
  const tLineH = Math.ceil(tSize * 1.65);
  ctx.fillStyle = "#FDF6EC";
  ctx.fillText(kural.kural.line1, W / 2, 228);
  ctx.fillText(kural.kural.line2, W / 2, 228 + tLineH);

  let y = 228 + tLineH + 52;
  _hline(ctx, P + 80, y, W - P - 80, "rgba(184,134,11,0.22)");
  y += 46;

  // English couplet (italic)
  ctx.fillStyle = "#D4A017";
  ctx.font = `italic 500 26px 'Georgia', serif`;
  y = _wrapDraw(ctx, kural.couplet_en, W / 2, y, MAXW, 38, 3);
  y += 32;

  // Tamil meaning
  ctx.fillStyle = "rgba(253,246,236,0.68)";
  ctx.font = `500 19px 'Noto Serif Tamil', serif`;
  y = _wrapDraw(ctx, `பொருள்: ${kural.meaning.ta}`, W / 2, y, MAXW, 30, 3);
  y += 22;

  // English meaning
  ctx.fillStyle = "rgba(253,246,236,0.42)";
  ctx.font = `400 17px 'Inter', sans-serif`;
  _wrapDraw(ctx, kural.meaning.en, W / 2, y, MAXW, 26, 3);

  // Bottom brand
  _hline(ctx, P + 40, H - 116, W - P - 40, "rgba(184,134,11,0.35)");
  ctx.fillStyle = "rgba(184,134,11,0.75)";
  ctx.font = `700 30px 'Noto Serif Tamil', serif`;
  ctx.fillText("திருக்குறள்", W / 2, H - 72);
  ctx.fillStyle = "rgba(184,134,11,0.4)";
  ctx.font = `600 12px 'Inter', sans-serif`;
  ctx.fillText("T H I R U K K U R A L", W / 2, H - 46);

  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `thirukkural-${kuralNumber}.png`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    btn.textContent = orig; btn.disabled = false;
  }, "image/png");
}

function _hline(ctx, x1, y, x2, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke(); ctx.restore();
}

function _wrapDraw(ctx, text, cx, startY, maxW, lineH, maxLines) {
  const words = text.split(" ");
  let line = "", y = startY, count = 0;
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      if (++count > maxLines) break;
      ctx.fillText(line, cx, y); y += lineH; line = w;
    } else { line = test; }
  }
  if (line && count <= maxLines) { ctx.fillText(line, cx, y); y += lineH; }
  return y;
}

/* -----------------------------------------------
   SECTION 8: HELPERS
----------------------------------------------- */

/* -----------------------------------------------
   VOTES (localStorage)
----------------------------------------------- */

function getVotesData() {
  try { return JSON.parse(localStorage.getItem("kural-votes") || "{}"); }
  catch { return {}; }
}

function getVotes(n) {
  const d = getVotesData();
  return d[n] || { up: 0, down: 0, userVote: null };
}

function castVote(n, type) {
  const data = getVotesData();
  const v = data[n] || { up: 0, down: 0, userVote: null };

  if (v.userVote === type) {
    // Toggle off — remove existing vote
    v[type] = Math.max(0, v[type] - 1);
    v.userVote = null;
  } else {
    // Switch vote if changing, or add new
    if (v.userVote) v[v.userVote] = Math.max(0, v[v.userVote] - 1);
    v[type]++;
    v.userVote = type;
  }

  data[n] = v;
  localStorage.setItem("kural-votes", JSON.stringify(data));
  updateVoteUI(n, v);
}

function updateVoteUI(n, v) {
  document.querySelectorAll(`#votes-${n}`).forEach(el => {
    const upBtn   = el.querySelector(".vote-btn-up");
    const downBtn = el.querySelector(".vote-btn-down");
    if (upBtn) {
      upBtn.classList.toggle("voted", v.userVote === "up");
      upBtn.querySelector(".vote-count").textContent = v.up;
    }
    if (downBtn) {
      downBtn.classList.toggle("voted", v.userVote === "down");
      downBtn.querySelector(".vote-count").textContent = v.down;
    }
  });
}

function escapeForAttr(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\n/g, "\\n")
    .replace(/"/g, "&quot;");
}

function formatToday() {
  return new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

/* -----------------------------------------------
   SECTION 9: SETTINGS — themes, fonts, panel
----------------------------------------------- */

const THEMES = [
  { id: "",       name: "Chola Temple",     swatch: "swatch-chola"  },
  { id: "silk",   name: "Kanchipuram Silk", swatch: "swatch-silk"   },
  { id: "dawn",   name: "Thiruvannamalai",  swatch: "swatch-dawn"   },
  { id: "forest", name: "Kaveri Forest",    swatch: "swatch-forest" },
  { id: "pearl",  name: "Pearl City",       swatch: "swatch-pearl"  }
];

const FONTS = [
  { id: "",       label: "Tamil Serif",   preview: "அகர முதல — A, as its first" },
  { id: "sans",   label: "Tamil Sans",    preview: "அகர முதல — A, as its first" },
  { id: "modern", label: "Modern Tamil",  preview: "அகர முதல — A, as its first" }
];

function applyTheme(id) {
  document.documentElement.dataset.theme = id;
  localStorage.setItem("kural-theme", id);
  document.querySelectorAll(".theme-swatch").forEach(el => {
    el.classList.toggle("active", el.dataset.theme === id);
  });
}

function applyFont(id) {
  document.documentElement.dataset.font = id;
  localStorage.setItem("kural-font", id);
  document.querySelectorAll(".font-option").forEach(el => {
    el.classList.toggle("active", el.dataset.font === id);
  });
}

function toggleSettings() {
  document.getElementById("settings-panel")?.classList.toggle("open");
  document.getElementById("settings-overlay")?.classList.toggle("open");
}

function initSettingsPanel() {
  // Overlay
  const overlay = document.createElement("div");
  overlay.id = "settings-overlay";
  overlay.className = "settings-overlay";
  overlay.onclick = toggleSettings;
  document.body.appendChild(overlay);

  // Panel
  const panel = document.createElement("div");
  panel.id = "settings-panel";
  panel.className = "settings-panel";
  panel.innerHTML = `
    <div class="settings-panel-header">
      <span class="settings-panel-title">⚙ Settings</span>
      <button class="settings-close-btn" onclick="toggleSettings()">✕</button>
    </div>
    <div class="settings-body">
      <div class="settings-section">
        <div class="settings-section-title">Theme</div>
        <div class="theme-grid">
          ${THEMES.map(t => `
            <div class="theme-swatch ${t.swatch}" data-theme="${t.id}" onclick="applyTheme('${t.id}')">
              <div class="theme-swatch-dot"></div>
              <div class="theme-swatch-name">${t.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">Font Style</div>
        <div class="font-options">
          ${FONTS.map(f => `
            <div class="font-option" data-font="${f.id}" onclick="applyFont('${f.id}')">
              <div class="font-option-label">${f.label}</div>
              <div class="font-option-preview" style="${f.id === "sans" ? "font-family:'Noto Sans Tamil',sans-serif" : f.id === "modern" ? "font-family:'Catamaran',sans-serif" : ""}">${f.preview}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  // Restore saved settings
  const savedTheme = localStorage.getItem("kural-theme") || "";
  const savedFont  = localStorage.getItem("kural-font")  || "";
  applyTheme(savedTheme);
  applyFont(savedFont);
}

function initNavbar() {
  const navbar = document.querySelector(".navbar .container");
  if (!navbar) return;

  // Settings button
  const settingsBtn = document.createElement("button");
  settingsBtn.className = "navbar-settings-btn";
  settingsBtn.title = "Settings";
  settingsBtn.textContent = "⚙";
  settingsBtn.onclick = toggleSettings;
  navbar.appendChild(settingsBtn);

  // Hamburger button
  const hamburger = document.createElement("button");
  hamburger.className = "hamburger-btn";
  hamburger.setAttribute("aria-label", "Open menu");
  hamburger.innerHTML = "<span></span><span></span><span></span>";
  hamburger.onclick = toggleMobileNav;
  navbar.appendChild(hamburger);

  // Mobile nav drawer
  const mobileNav = document.createElement("nav");
  mobileNav.id = "mobile-nav";
  mobileNav.className = "mobile-nav";
  // Copy links from desktop nav
  const links = document.querySelectorAll(".navbar-links a");
  mobileNav.innerHTML = [...links].map(a =>
    `<a href="${a.href}" class="${a.className}">${a.textContent}</a>`
  ).join("");
  document.body.appendChild(mobileNav);
}

function toggleMobileNav() {
  document.getElementById("mobile-nav")?.classList.toggle("open");
}

// Close mobile nav on link click
document.addEventListener("click", e => {
  const nav = document.getElementById("mobile-nav");
  if (nav?.classList.contains("open") && e.target.closest("#mobile-nav a")) {
    nav.classList.remove("open");
  }
});

/* -----------------------------------------------
   SECTION 10: PAGE INIT
----------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".today-date").forEach(el => { el.textContent = formatToday(); });

  initNavbar();
  initSettingsPanel();
  renderKuralOfTheDay();

  // Browse page
  const browseContainer = document.getElementById("kural-list");
  if (browseContainer) {
    document.querySelectorAll(".pal-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => setPalFilter(btn.dataset.pal));
    });
    document.querySelectorAll(".adhigaram-item").forEach(el => {
      el.addEventListener("click", () => setAdhigaramFilter(parseInt(el.dataset.adhi)));
    });
    // Apply tag filter from URL if present (runs after browse.html's inline init)
    const urlTag  = new URLSearchParams(window.location.search).get("tag");
    const urlLang = new URLSearchParams(window.location.search).get("lang") || "en";
    if (urlTag) setTimeout(() => setTagFilter(urlTag, urlLang), 0);
  }

  // Search page — tag filter from URL only (search.html owns input wiring)
  if (document.getElementById("search-input")) {
    const urlTag  = new URLSearchParams(window.location.search).get("tag");
    const urlLang = new URLSearchParams(window.location.search).get("lang") || "en";
    if (urlTag) setTimeout(() => setTagFilter(urlTag, urlLang), 0);
  }

  // Detail page
  if (document.getElementById("detail-container")) renderDetailPage();
});
