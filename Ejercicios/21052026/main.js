
const url = "https://6a0f6f26d2a9857070355a2b.mockapi.io/api/v1/ventas"

const cargar = document.querySelector('#btn-cargar')
const container = document.querySelector('#cards-container')
const statsBar = document.querySelector('#stats-bar')

// ─── Category config ───────────────────────────────────────────────
const CATEGORY_META = {
  payment:    { label: 'Pago',    icon: '💳', dotClass: 'cyan' },
  withdrawal: { label: 'Retiro',  icon: '📤', dotClass: 'magenta' },
  deposit:    { label: 'Depósito', icon: '📥', dotClass: 'green' },
  invoice:    { label: 'Factura', icon: '📄', dotClass: 'orange' },
}

// ─── Render helpers ────────────────────────────────────────────────
function randomBars() {
  let bars = ''
  for (let i = 0; i < 6; i++) {
    const h = Math.floor(Math.random() * 20) + 4
    bars += `<div class="tx-card__bar" style="height:${h}px"></div>`
  }
  return bars
}

function buildCard(item, index) {
  const cat = item.categoria
  const meta = CATEGORY_META[cat] || CATEGORY_META.payment

  return `
    <article class="tx-card tx-card--${cat}" style="animation-delay:${index * 0.06}s" id="tx-${item.id}">
      <div class="tx-card__header">
        <span class="tx-card__id">TX-${item.id.padStart(4, '0')}</span>
        <span class="tx-card__badge">
          <span class="tx-card__badge-dot"></span>
          ${meta.icon} ${meta.label}
        </span>
      </div>

      <div class="tx-card__value-section">
        <div class="tx-card__value-label">Valor</div>
        <div class="tx-card__value">
          $${parseFloat(item.valor).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          <span class="tx-card__currency">USD</span>
        </div>
      </div>

      <div class="tx-card__divider"></div>

      <div class="tx-card__details">
        <div class="tx-card__detail">
          <span class="tx-card__detail-label">Fecha</span>
          <span class="tx-card__detail-value">${item.fecha}</span>
        </div>
        <div class="tx-card__detail">
          <span class="tx-card__detail-label">Categoría</span>
          <span class="tx-card__detail-value">${meta.label}</span>
        </div>
        <div class="tx-card__bar-wrap">${randomBars()}</div>
      </div>
    </article>
  `
}

function buildStatsBar(data) {
  const totals = {}
  const counts = {}

  data.forEach(d => {
    const c = d.categoria
    totals[c] = (totals[c] || 0) + parseFloat(d.valor)
    counts[c] = (counts[c] || 0) + 1
  })

  let html = ''
  for (const [cat, meta] of Object.entries(CATEGORY_META)) {
    if (!counts[cat]) continue
    html += `
      <div class="stat-chip">
        <span class="stat-chip__dot stat-chip__dot--${meta.dotClass}"></span>
        <span class="stat-chip__label">${meta.icon} ${meta.label}:</span>
        <span class="stat-chip__value">${counts[cat]}</span>
        <span class="stat-chip__label">· $${totals[cat].toFixed(2)}</span>
      </div>
    `
  }
  return html
}

function showSkeletons(n = 6) {
  container.innerHTML = Array.from({ length: n }, () => '<div class="skeleton"></div>').join('')
}

// ─── Fetch & render ────────────────────────────────────────────────
async function getData() {
  try {
    cargar.classList.add('is-loading')
    showSkeletons()

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // Stats
    statsBar.innerHTML = buildStatsBar(data)
    statsBar.classList.add('is-visible')

    // Cards
    container.innerHTML = data.map((item, i) => buildCard(item, i)).join('')

  } catch (error) {
    console.error('There was an error:', error);
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">⚠️</div>
        <p class="empty-state__text">Error de transmisión — intenta nuevamente</p>
      </div>
    `
  } finally {
    cargar.classList.remove('is-loading')
  }
}

cargar.addEventListener('click', () => {
  getData()
  console.log("Clickeado");
});
