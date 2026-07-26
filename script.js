// ================================================================
//  CONFIG
// ================================================================
const PAYPAL_URL = 'https://www.paypal.me/eliasalvada';
const INSTAGRAM_URL = 'https://www.instagram.com/leaswxg/';
const WEBHOOK_URL =
    'https://ptb.discord.com/api/webhooks/1527376153814503666/vRd1UzCiL4xr9aoLJ7Axok38_gk8Y9C0HvuFtiz6XseO86z97284__QH-_0WErBBwT6O';

// ================================================================
//  DETECT MOBILE
// ================================================================
const isMobile = window.innerWidth < 768;

// ================================================================
//  DATA — MM2 ITEMS
// ================================================================
const mm2Items = [
    // ... (same as before, omitted for brevity, but keep all items with aura)
];

// ================================================================
//  ACCOUNTS
// ================================================================
const accounts = [
    // ... (same as before)
];

const accountReviewTemplates = [
    // ... (same as before)
];

function distributeReviews(templates, accountCount) {
    // ... (same as before)
}
const reviewDistribution = distributeReviews(accountReviewTemplates, accounts.length);

// ================================================================
//  LIVE FEED
// ================================================================
const feedContainer = document.getElementById('feed-items');
const flags = ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇩🇪', '🇫🇷', '🇯🇵', '🇰🇷', '🇧🇷', '🇮🇳', '🇮🇹', '🇪🇸', '🇲🇽', '🇳🇱', '🇸🇪', '🇳🇴', '🇩🇰', '🇫🇮',
    '🇵🇱', '🇷🇺'
];

function randomUser() {
    const flag = flags[Math.floor(Math.random() * flags.length)];
    const num = Math.floor(Math.random() * 10000);
    return `${flag} ${num}`;
}

function buildFeedItems() {
    const items = [];
    mm2Items.forEach(item => { items.push({ name: item.name, priceUSD: item.price }); });
    const accountNames = ['Headless account', 'Korblox account', 'Limited account', 'Rare account', 'Premium account',
        'Elite account', 'Astral account'
    ];
    accountNames.forEach(name => {
        const price = 50 + Math.floor(Math.random() * 150);
        items.push({ name, priceUSD: price });
    });
    return items;
}
const feedItemsList = buildFeedItems();
const CAD_RATE = 1.38;

function randomPurchase() {
    const item = feedItemsList[Math.floor(Math.random() * feedItemsList.length)];
    const isUSD = Math.random() > 0.5;
    const price = isUSD ? item.priceUSD : Math.round(item.priceUSD * CAD_RATE);
    const currency = isUSD ? 'usd' : 'cad';
    const user = randomUser();
    return { user, item: item.name, price, currency };
}

function addFeedItem() {
    const { user, item, price, currency } = randomPurchase();
    const div = document.createElement('div');
    div.className = 'feed-item';
    div.innerHTML = `
                            <span class="user">${user}</span>
                            <span class="action">bought</span>
                            <span class="item">${item}</span>
                            <span class="price">$${price} ${currency.toUpperCase()}</span>
                            <span class="time">just now</span>
                        `;
    feedContainer.prepend(div);
    while (feedContainer.children.length > 8) {
        feedContainer.removeChild(feedContainer.lastChild);
    }
}
for (let i = 0; i < 3; i++) setTimeout(addFeedItem, i * 200);
setInterval(addFeedItem, 30000 + Math.floor(Math.random() * 5000));

// ================================================================
//  REVIEW HELPERS
// ================================================================
function generateAccountReviews(reviewTexts) {
    return reviewTexts.map(text => {
        const user = randomUser();
        const stars = 4 + Math.floor(Math.random() * 2);
        return { user, text, stars };
    });
}

function generateItemReviews(itemReviews, count) {
    const shuffled = [...itemReviews].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    return selected.map(text => {
        const user = randomUser();
        const stars = 4 + Math.floor(Math.random() * 2);
        return { user, text, stars };
    });
}

// ================================================================
//  MATRIX RAIN (reduced frequency)
// ================================================================
(function initMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, columns, drops = [];
    const chars = '01';
    const fontSize = 28;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        columns = Math.floor(w / fontSize);
        drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));
    }
    resize();
    window.addEventListener('resize', resize);
    let frameCount = 0;

    function draw() {
        frameCount++;
        if (frameCount % 4 === 0) { // draw every 4th frame
            ctx.fillStyle = 'rgba(7, 7, 10, 0.04)';
            ctx.fillRect(0, 0, w, h);
            ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
            ctx.textAlign = 'center';
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize + fontSize / 2;
                const y = drops[i] * fontSize;
                const alpha = Math.min(0.15, 0.02 + Math.abs(drops[i] / 60) * 0.1);
                ctx.fillStyle = `rgba(140,140,170,${alpha})`;
                ctx.fillText(char, x, y);
                drops[i] += 0.4;
                if (drops[i] * fontSize > h + 20 && Math.random() > 0.97) {
                    drops[i] = 0;
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
})();

// ================================================================
//  3D CARD TILT + OPTIMIZED PARTICLE SYSTEM (desktop only)
// ================================================================
let tiltFrame = null;
let lastParticleTime = 0;
const PARTICLE_INTERVAL = 80; // ms between particle bursts

function init3DTilt() {
    if (isMobile) return;

    const cards = document.querySelectorAll('.account-card, .mm2-card');
    cards.forEach(card => {
        // Create aura glow element for MM2 cards
        if (card.classList.contains('mm2-card')) {
            const auraGlow = document.createElement('div');
            auraGlow.className = 'aura-glow';
            const itemName = card.querySelector('.card-title')?.textContent || '';
            const itemData = mm2Items.find(i => i.name === itemName);
            if (itemData) {
                if (itemData.aura === 'rainbow') {
                    card.classList.add('aura-rainbow');
                } else {
                    auraGlow.style.setProperty('--aura-color', itemData.aura);
                }
            }
            card.prepend(auraGlow);
        }

        // Tilt state
        let targetRotateX = 0,
            targetRotateY = 0,
            currentRotateX = 0,
            currentRotateY = 0;
        let isHovering = false;

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            targetRotateY = x * 12;
            targetRotateX = -y * 12;
            isHovering = true;

            // Particle spawn with throttling
            const now = performance.now();
            if (now - lastParticleTime > PARTICLE_INTERVAL && this.classList.contains('mm2-card')) {
                spawnParticles(this, e.clientX, e.clientY);
                lastParticleTime = now;
            }

            if (!tiltFrame) {
                tiltFrame = requestAnimationFrame(function animateTilt() {
                    // Smooth interpolation
                    currentRotateX += (targetRotateX - currentRotateX) * 0.12;
                    currentRotateY += (targetRotateY - currentRotateY) * 0.12;
                    if (isHovering) {
                        card.style.transform =
                            `perspective(800px) translateZ(12px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(1.03)`;
                        tiltFrame = requestAnimationFrame(animateTilt);
                    } else {
                        tiltFrame = null;
                    }
                });
            }
        });

        card.addEventListener('mouseleave', function() {
            isHovering = false;
            targetRotateX = 0;
            targetRotateY = 0;
            // Reset transform directly (will be smoothed by the animation loop)
            if (!tiltFrame) {
                // If no animation running, reset immediately
                this.style.transform = 'perspective(800px) translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)';
            }
            // Clear particles
            const container = this.querySelector('.particle-container');
            if (container) {
                container.innerHTML = '';
            }
        });
    });
}

// ---- OPTIMIZED PARTICLE SYSTEM ----
function spawnParticles(card, mouseX, mouseY) {
    if (isMobile) return;
    const rect = card.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;

    // Get color from aura
    let color = '#ff8844';
    const auraGlow = card.querySelector('.aura-glow');
    if (auraGlow) {
        const style = getComputedStyle(auraGlow);
        const bg = style.background || '';
        if (bg.includes('conic-gradient')) {
            color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        } else {
            const match = bg.match(/#[0-9a-f]{6}/i) || bg.match(/rgba?\([^)]+\)/);
            if (match) color = match[0];
        }
    }

    let container = card.querySelector('.particle-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'particle-container';
        card.appendChild(container);
    }

    // Fewer particles per burst (3-5)
    const count = 3 + Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        const size = 3 + Math.random() * 6;
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 70;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance - 15;
        const duration = 500 + Math.random() * 400;
        const delay = Math.random() * 100;

        let particleColor = color;
        if (color.includes('conic-gradient') || color === 'rainbow') {
            const hue = Math.random() * 360;
            particleColor = `hsl(${hue}, 100%, 60%)`;
        } else {
            // slight variation
            const hsl = rgbToHsl(particleColor);
            if (hsl) {
                const h = (hsl[0] + (Math.random() - 0.5) * 15) % 360;
                const s = Math.min(100, hsl[1] + (Math.random() - 0.5) * 15);
                const l = Math.min(80, Math.max(40, hsl[2] + (Math.random() - 0.5) * 15));
                particleColor = `hsl(${h}, ${s}%, ${l}%)`;
            }
        }

        p.style.cssText = `
                    position: absolute;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: ${particleColor};
                    box-shadow: 0 0 ${size * 2}px ${particleColor};
                    pointer-events: none;
                    opacity: 1;
                    transform: translate(0, 0) scale(1);
                    transition: all ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms;
                    will-change: transform, opacity;
                `;
        container.appendChild(p);

        requestAnimationFrame(() => {
            p.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
            p.style.opacity = '0';
        });

        setTimeout(() => {
            if (p.parentNode) p.remove();
        }, duration + delay + 50);
    }

    // Limit total particles
    if (container.children.length > 60) {
        const toRemove = container.children.length - 50;
        for (let i = 0; i < toRemove; i++) {
            if (container.firstChild) container.firstChild.remove();
        }
    }
}

function rgbToHsl(color) {
    const hex = color.replace('#', '');
    if (hex.length === 3) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        return rgbToHslValues(r, g, b);
    } else if (hex.length === 6) {
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return rgbToHslValues(r, g, b);
    }
    return null;
}

function rgbToHslValues(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                break;
            case g:
                h = ((b - r) / d + 2) / 6;
                break;
            case b:
                h = ((r - g) / d + 4) / 6;
                break;
        }
    }
    return [h * 360, s * 100, l * 100];
}

// ================================================================
//  WEBHOOK SENDERS (unchanged)
// ================================================================
async function sendMM2Webhook(username, itemName) {
    // ... (same as before)
}

async function sendAccountWebhook(accountName, accountId, email) {
    // ... (same as before)
}

// ================================================================
//  INTRO ROBLOX BUTTON ANIMATION (unchanged)
// ================================================================
function animateIntroRobloxButton() {
    // ... (same as before)
}

// ================================================================
//  LIVE FEED TOGGLE (unchanged)
// ================================================================
const feedToggle = document.getElementById('feedToggle');
const feedWrapper = document.getElementById('feedItemsWrapper');
let feedVisible = true;
feedToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    feedVisible = !feedVisible;
    feedWrapper.classList.toggle('hidden', !feedVisible);
    this.classList.toggle('minimized', !feedVisible);
    this.textContent = feedVisible ? '▼' : '▲';
});

// ================================================================
//  RENDER (unchanged)
// ================================================================
function renderAccounts() {
    // ... (same as before)
}

function renderMM2() {
    // ... (same as before)
}

// ================================================================
//  SEARCH & FILTER (unchanged)
// ================================================================
const searchInput = document.getElementById('mm2Search');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

function filterMM2() {
    // ... (same as before)
}
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterMM2();
    });
});
searchInput.addEventListener('input', filterMM2);

// ================================================================
//  INFO MODAL (unchanged)
// ================================================================
const infoModal = document.getElementById('info-modal');
const infoTitle = document.getElementById('infoTitle');
const infoContent = document.getElementById('infoContent');
const infoClose = document.getElementById('infoClose');

async function openInfoModal(index) {
    // ... (same as before)
}

function closeInfoModal() { infoModal.classList.remove('visible'); }
infoClose.addEventListener('click', closeInfoModal);
infoModal.addEventListener('click', (e) => { if (e.target === infoModal) closeInfoModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeInfoModal(); });

// ================================================================
//  ACCOUNT MODAL (unchanged)
// ================================================================
const accountModal = document.getElementById('account-modal');
const accountModalItemName = document.getElementById('accountModalItemName');
const accountEmailInput = document.getElementById('account-email');
const accountModalContinue = document.getElementById('accountModalContinue');
const accountModalBack = document.getElementById('accountModalBack');
const accountModalConfirm = document.getElementById('accountModalConfirm');
const accountModalCloseSuccess = document.getElementById('accountModalCloseSuccess');
const confirmEmail = document.getElementById('confirmEmail');
const confirmAccount = document.getElementById('confirmAccount');
const accountSuccessMessage = document.getElementById('accountSuccessMessage');

let currentAccount = null,
    currentAccountEmail = '',
    currentPaymentMethod = 'paypal';

function showAccountView(viewId) {
    // ... (same as before)
}

function openAccountModal(account, method) {
    // ... (same as before)
}

function closeAccountModal() {
    // ... (same as before)
}

accountModalContinue.addEventListener('click', () => {
    // ... (same as before)
});

accountModalBack.addEventListener('click', () => {
    // ... (same as before)
});

accountModalConfirm.addEventListener('click', async () => {
    // ... (same as before)
});

accountModalCloseSuccess.addEventListener('click', closeAccountModal);
accountModal.addEventListener('click', (e) => { if (e.target === accountModal) closeAccountModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAccountModal(); });

// ================================================================
//  MM2 MODAL (unchanged)
// ================================================================
const mm2Modal = document.getElementById('mm2-modal');
const mm2ModalItemName = document.getElementById('mm2ModalItemName');
const mm2Input = document.getElementById('mm2-username');
const mm2ModalContinue = document.getElementById('mm2ModalContinue');
const mm2ModalBack = document.getElementById('mm2ModalBack');
const mm2ModalConfirm = document.getElementById('mm2ModalConfirm');
const mm2ModalCloseSuccess = document.getElementById('mm2ModalCloseSuccess');
const mm2ConfirmUsername = document.getElementById('mm2ConfirmUsername');
const mm2SuccessMessage = document.getElementById('mm2SuccessMessage');

let currentMM2Item = null,
    currentMM2Username = '',
    currentMM2Method = 'paypal';

function showMM2View(viewId) {
    // ... (same as before)
}

function openMM2Modal(item, method) {
    // ... (same as before)
}

function closeMM2Modal() {
    // ... (same as before)
}

mm2ModalContinue.addEventListener('click', () => {
    // ... (same as before)
});

mm2ModalBack.addEventListener('click', () => {
    // ... (same as before)
});

mm2ModalConfirm.addEventListener('click', async () => {
    // ... (same as before)
});

mm2ModalCloseSuccess.addEventListener('click', closeMM2Modal);
mm2Modal.addEventListener('click', (e) => { if (e.target === mm2Modal) closeMM2Modal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMM2Modal(); });

// ================================================================
//  INTRO + TABS (unchanged)
// ================================================================
const introOverlay = document.getElementById('intro-overlay');
const introMm2 = document.getElementById('intro-mm2');
const introAccounts = document.getElementById('intro-accounts');
const introRobloxBtn = document.getElementById('introRobloxBtn');

introRobloxBtn.addEventListener('click', function(e) {
    e.preventDefault();
    animateIntroRobloxButton();
});

function showShop(shop) {
    // ... (same as before)
}

introMm2.addEventListener('click', () => showShop('mm2'));
introAccounts.addEventListener('click', () => showShop('accounts'));

document.querySelectorAll('.shop-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const shop = this.dataset.shop;
        if (introOverlay.classList.contains('visible')) introOverlay.classList.remove('visible');
        showShop(shop);
    });
});

// ================================================================
//  LOADING (unchanged)
// ================================================================
(function initLoading() {
    const loading = document.getElementById('loading-screen');
    loading.classList.remove('hidden');
    setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => introOverlay.classList.add('visible'), 200);
    }, 1500);
    setTimeout(() => {
        if (!loading.classList.contains('hidden')) {
            loading.classList.add('hidden');
            introOverlay.classList.add('visible');
        }
    }, 2200);
})();

// ================================================================
//  INIT RENDER
// ================================================================
renderMM2();
renderAccounts();

console.log('⚫ Lea\'s Shop · 3D Cyber (optimized for performance)');
console.log(`📦 ${accounts.length} accounts, ${mm2Items.length} MM2 items`);
console.log('💳 PayPal: @eliasalvada');
console.log('📷 Instagram: @leaswxg');
if (window.location.protocol === 'file:') {
    console.warn('⚠️ file:// protocol – .txt files will not load. Use a local server.');
}