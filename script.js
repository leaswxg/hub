// ================================================================
//  CONFIG
// ================================================================
const PAYPAL_URL = 'https://www.paypal.me/eliasalvada';
const INSTAGRAM_URL = 'https://www.instagram.com/leaswxg/';
const WEBHOOK_URL =
    'https://ptb.discord.com/api/webhooks/1527376153814503666/vRd1UzCiL4xr9aoLJ7Axok38_gk8Y9C0HvuFtiz6XseO86z97284__QH-_0WErBBwT6O';

// ================================================================
//  DATA — MM2 ITEMS
// ================================================================
const mm2Items = [{
    name: 'GingerScope',
    price: 180,
    img: 'picture_gingerscope.png',
    badge: '🔫 Ancient Gun',
    type: 'gun',
    robuxLink: 'https://www.roblox.com/game-pass/1915670295/11000',
    reviews: [
        "OMG THANKSS FOR THE GINGER I THOUGHT I WAS GONA GET SCAMMED",
        "GingerScope is my new fav, thanks Lea! 🔥",
        "Finally got the GingerScope, it's insane!",
        "Best purchase ever, the GingerScope is so cool."
    ]
}, {
    name: "Traveler's Axe",
    price: 72,
    img: 'picture_travelersaxe.png',
    badge: '🪓 Traveler',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1914998289/5800',
    reviews: [
        "Traveler's Axe is rare, glad I bought it.",
        "Love the Traveler's Axe, so clean!",
        "Axe is amazing, worth every penny.",
        "Best knife in my collection, thanks!"
    ]
}, {
    name: 'Xeno Set',
    price: 43,
    img: 'picture_xeno.png',
    badge: '👾 Xeno',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1915616292/3400',
    reviews: [
        "MY FAVV SETTT THXXX I GOT IT",
        "Xeno Set looks epic, instantly delivered.",
        "The Xeno Set is so cool, love the colors!",
        "Set is fire, thank you!"
    ]
}, {
    name: 'Sweet Treat Bundle',
    price: 34,
    img: 'picture_sweetbundle.png',
    badge: '🍬 Sweets',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1915022302/2700',
    reviews: [
        "Sweet Treat Bundle is so cute, love it!",
        "Omg the bundle is adorable, thanks!",
        "Best bundle ever, so sweet! 🍬",
        "Got the bundle, it's perfect!"
    ]
}, {
    name: 'Harvester',
    price: 7,
    img: 'picture_harvester.png',
    badge: '🌾 Harvest',
    type: 'gun',
    robuxLink: 'https://www.roblox.com/game-pass/1915784287/560',
    reviews: [
        "Harvester is so underrated, love it!",
        "Great value, the Harvester is awesome.",
        "Harvester is my go-to gun now.",
        "So cheap but so good, thanks!"
    ]
}, {
    name: 'Raygun',
    price: 23,
    img: 'picture_raygun.png',
    badge: '🔫 Raygun',
    type: 'gun',
    robuxLink: 'https://www.roblox.com/game-pass/1918094250/1800',
    reviews: [
        "Raygun is powerful, great value!",
        "Love the Raygun, it's so fun to use.",
        "Raygun is a classic, glad I got it.",
        "Awesome gun, thanks Lea!"
    ]
}, {
    name: 'Chroma Heart Wand',
    price: 135,
    img: 'picture_chromaheartwand.png',
    badge: '❤️ Chroma',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1916084294/10800',
    reviews: [
        "Chroma Heart Wand is beautiful, my son loves it.",
        "So pretty, I can't stop staring at it!",
        "Chroma Heart Wand is my favorite knife.",
        "Totally worth it, amazing quality."
    ]
}, {
    name: 'Rainbow Set',
    price: 24,
    img: 'picture_rainbow.png',
    badge: '🌈 Rainbow',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1918022255/1900',
    reviews: [
        "Rainbow Set looks amazing, instant delivery!",
        "I love the Rainbow Set, so colorful.",
        "Best set for rainbow lovers!",
        "Got the set, it's perfect."
    ]
}, {
    name: "Vampire's Set 2024",
    price: 42,
    img: 'picture_vampire.png',
    badge: '🧛 Vampire',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1915688295/3400',
    reviews: [
        "Vampire Set is sick, totally worth it.",
        "The Vampire Set is so cool, love the theme.",
        "Best halloween set ever!",
        "Thanks for the Vampire Set, it's awesome."
    ]
}, {
    name: 'Soul Set',
    price: 18,
    img: 'picture_soul.png',
    badge: '👻 Soul',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1918142251/1400',
    reviews: [
        "Soul Set is hauntingly beautiful, thanks!",
        "Love the Soul Set, so spooky.",
        "Great set, very unique.",
        "Got the Soul Set, it's fire."
    ]
}, {
    name: "Traveler's Set",
    price: 133,
    img: 'picture_traveler.png',
    badge: '🗺️ Traveler',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1916384287/10600',
    reviews: [
        "Traveler's Set is epic, love the axe and gun combo.",
        "The Set is huge, so many items!",
        "Best set for collectors, thanks Lea!",
        "Traveler's Set is a must-have."
    ]
}, {
    name: 'Sakura Set',
    price: 73,
    img: 'picture_sakura.png',
    badge: '🌸 Sakura',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1916030282/5800',
    reviews: [
        "Sakura Set is gorgeous, my new favorite!",
        "The Sakura Set is so pretty, love the pink.",
        "Best cherry blossom set ever.",
        "Thanks for the Sakura Set, it's beautiful."
    ]
}, {
    name: 'Evergreen Knife',
    price: 72,
    img: 'picture_evergreen.png',
    badge: '🌲 Evergreen',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1918226250/5700',
    reviews: [
        "Evergreen Knife is so clean, love the color.",
        "The Evergreen Knife is underrated.",
        "Best green knife, thanks!",
        "Got the Evergreen, it's awesome."
    ]
}, {
    name: 'Turkey Knife',
    price: 70,
    img: 'picture_turkey.png',
    badge: '🦃 Turkey',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1915238305/5600',
    reviews: [
        "Turkey Knife is underrated, great for Thanksgiving.",
        "The Turkey Knife is so unique, love it.",
        "Funny knife, but actually really cool.",
        "Thanks for the Turkey Knife!"
    ]
}, {
    name: 'Chroma Sweet Knife 2026',
    price: 66,
    img: 'picture_chromasweetknife.png',
    badge: '🍭 Chroma Sweet',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1915886305/5300',
    reviews: [
        "Chroma Sweet Knife 2026 is so colorful, I love it!",
        "The knife is beautiful, great chroma.",
        "Best chroma knife, thanks Lea!",
        "Love the colors on this one."
    ]
}, {
    name: 'Celestial Knife 2024',
    price: 58,
    img: 'picture_celestialknife.png',
    badge: '🌙 Celestial',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1915742304/4600',
    reviews: [
        "Celestial Knife 2024 is out of this world, thank you!",
        "The Celestial Knife is stunning.",
        "Best space-themed knife ever.",
        "Got the Celestial, it's amazing."
    ]
}, {
    name: 'Alienbeam Knife 2025',
    price: 58,
    img: 'picture_alienbeamknife.png',
    badge: '👾 Alienbeam',
    type: 'knife',
    robuxLink: 'https://www.roblox.com/game-pass/1915742304/4600',
    reviews: [
        "Alienbeam Knife 2025 is so cool, instant delivery!",
        "The Alienbeam Knife is epic.",
        "Best alien knife, thanks!",
        "Love the design, great knife."
    ]
}, {
    name: 'Chroma Sweet Treat Set 2026',
    price: 138,
    img: 'picture_chromasweettreatset.png',
    badge: '🍭 Chroma Sweet Set',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1915670295/11000',
    reviews: [
        "Chroma Sweet Treat Set 2026 is insane, best set ever!",
        "The set is massive, so many items!",
        "Best chroma set, thank you Lea!",
        "I'm obsessed with this set."
    ]
}, {
    name: 'Celestial Set',
    price: 135,
    img: 'picture_celestialset.png',
    badge: '🌙 Celestial Set',
    type: 'set',
    robuxLink: 'https://www.roblox.com/game-pass/1916084294/10800',
    reviews: [
        "Celestial Set is beautiful, 100% worth it.",
        "The Celestial Set is out of this world!",
        "Best set ever, love the theme.",
        "Thanks for the Celestial Set, it's perfect."
    ]
}];

// ================================================================
//  ACCOUNTS
// ================================================================
const accounts = [{
    id: 4545711503,
    name: 'valilleo',
    img: 'image1.png',
    badge: '🌟 Premium',
    price: 150,
    robuxPrice: 11000,
    robuxLink: 'https://www.roblox.com/game-pass/1915670295/11000',
    infoFile: 'info1.txt'
}, {
    id: 3319916899,
    name: 'rgdff77',
    img: 'image2.png',
    badge: '🔥 Limited',
    price: 40,
    robuxPrice: 3400,
    robuxLink: 'https://www.roblox.com/game-pass/1915688295/3400',
    infoFile: 'info2.txt'
}, {
    id: 3231506811,
    name: 'ssjskan',
    img: 'image3.png',
    badge: '💎 Rare',
    price: 120,
    robuxPrice: 10600,
    robuxLink: 'https://www.roblox.com/game-pass/1916384287/10600',
    infoFile: 'info3.txt'
}, {
    id: 913999342,
    name: 'zhuyuan1203',
    img: 'image4.png',
    badge: '⚡ Elite',
    price: 70,
    robuxPrice: 5600,
    robuxLink: 'https://www.roblox.com/game-pass/1915238305/5600',
    infoFile: 'info4.txt'
}, {
    id: 57324433,
    name: 'bubbah09',
    img: 'image5.png',
    badge: '🎯 Pro',
    price: 40,
    robuxPrice: 3400,
    robuxLink: 'https://www.roblox.com/game-pass/1915688295/3400',
    infoFile: 'info5.txt'
}, {
    id: 714316698,
    name: 'Databank3D',
    img: 'image6.png',
    badge: '🌌 Cosmic',
    price: 75,
    robuxPrice: 5800,
    robuxLink: 'https://www.roblox.com/game-pass/1916030282/5800',
    infoFile: 'info6.txt'
}, {
    id: 113018714,
    name: 'SurelyLegaI',
    img: 'image7.png',
    badge: '🐍 Venom',
    price: 50,
    robuxPrice: 4600,
    robuxLink: 'https://www.roblox.com/game-pass/1915742304/4600',
    infoFile: 'info7.txt'
}, {
    id: 560489850,
    name: 'kaiiIlian',
    img: 'image8.png',
    badge: '✨ Astral',
    price: 20,
    robuxPrice: 1400,
    robuxLink: 'https://www.roblox.com/game-pass/1918142251/1400',
    infoFile: 'info8.txt'
}];

const accountReviewTemplates = [
    "omg i thought i got scammed but i didn't check my spam emails for the account informations, DONT FORGET TO CHECK YALL SPAMS LMFAO",
    "it took them a while to get the account but they eventually gave me the korblox account, thanks!",
    "OMGG THANKS FOR THE KORLBLOXXX WTHH",
    "This is legit, got my account within 10 mins! 🔥",
    "Best shop ever, bought 2 accounts already, both perfect.",
    "Amazing service, instant delivery and great communication. 10/10 would recommend.",
    "I was skeptical at first but everything went smoothly. Thanks!",
    "THANKS FOR THE ACC IT HAS BUNCH OF LIMITEDS, but the thing is i need roblox plus or premium to trade myself ughh THNAKS THOO",
    "YOO I GOT ITT OMG THERES NO 2FA?? UR THE GOATT BROO",
    "Got the account with no issues, all items included. Perfection.",
    "Honestly the best roblox shop out there, don't sleep on this.",
    "Quick response, and the account is even better than I expected.",
    "Headless account is fire, everything works perfect.",
    "Korblox account is insane, 100% legit.",
    "YOOO THX LEAAA I GOT IT OGMSKGMKM",
    "Account is stacked, very happy with my purchase."
];

function distributeReviews(templates, accountCount) {
    const shuffled = [...templates].sort(() => Math.random() - 0.5);
    const distribution = [];
    let remaining = templates.length;
    const counts = [];
    for (let i = 0; i < accountCount - 1; i++) {
        const max = Math.min(4, remaining - (accountCount - i - 1));
        const min = 1;
        const count = Math.floor(Math.random() * (max - min + 1)) + min;
        counts.push(count);
        remaining -= count;
    }
    counts.push(remaining);
    let start = 0;
    for (let i = 0; i < accountCount; i++) {
        distribution.push(shuffled.slice(start, start + counts[i]));
        start += counts[i];
    }
    return distribution;
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
//  MATRIX RAIN
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
        if (frameCount % 3 === 0) {
            ctx.fillStyle = 'rgba(10, 10, 14, 0.04)';
            ctx.fillRect(0, 0, w, h);
            ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
            ctx.textAlign = 'center';
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize + fontSize / 2;
                const y = drops[i] * fontSize;
                const alpha = Math.min(0.25, 0.04 + Math.abs(drops[i] / 60) * 0.18);
                ctx.fillStyle = `rgba(140,140,160,${alpha})`;
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
//  WEBHOOK SENDERS
// ================================================================
async function sendMM2Webhook(username, itemName) {
    const embed = {
        title: '🎯 New MM2 Trade Request',
        color: 0x666666,
        fields: [
            { name: 'Username', value: username, inline: true },
            { name: 'Item', value: itemName, inline: true }
        ],
        thumbnail: { url: 'https://www.roblox.com/favicon.ico' },
        footer: { text: "Lea's Shop · Emo Cyber", icon_url: 'https://www.roblox.com/favicon.ico' },
        timestamp: new Date().toISOString()
    };
    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });
        return true;
    } catch (e) {
        console.error('MM2 Webhook error:', e);
        return false;
    }
}

async function sendAccountWebhook(accountName, accountId, email) {
    const embed = {
        title: '👤 New Account Purchase Request',
        color: 0x666666,
        fields: [
            { name: 'Account', value: `${accountName} (ID: ${accountId})`, inline: true },
            { name: 'Email', value: email, inline: true }
        ],
        thumbnail: { url: 'https://www.roblox.com/favicon.ico' },
        footer: { text: "Lea's Shop · Emo Cyber — Send account details to the email above",
            icon_url: 'https://www.roblox.com/favicon.ico' },
        timestamp: new Date().toISOString()
    };
    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });
        return true;
    } catch (e) {
        console.error('Account Webhook error:', e);
        return false;
    }
}

// ================================================================
//  INTRO ROBLOX BUTTON ANIMATION
// ================================================================
function animateIntroRobloxButton() {
    const introBtn = document.getElementById('introRobloxBtn');
    const headerBtn = document.getElementById('headerRobloxBtn');
    const introOverlay = document.getElementById('intro-overlay');
    const introButtons = document.getElementById('introButtons');
    if (!introBtn || !headerBtn || !introOverlay) return;

    const introRect = introBtn.getBoundingClientRect();
    const headerRect = headerBtn.getBoundingClientRect();
    const mm2Btn = document.getElementById('intro-mm2');
    const accBtn = document.getElementById('intro-accounts');
    if (mm2Btn) mm2Btn.classList.add('hide-btn');
    if (accBtn) accBtn.classList.add('hide-btn');

    introBtn.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
    introBtn.style.position = 'fixed';
    introBtn.style.top = introRect.top + 'px';
    introBtn.style.left = introRect.left + 'px';
    introBtn.style.width = introRect.width + 'px';
    introBtn.style.height = introRect.height + 'px';
    introBtn.style.margin = '0';
    introBtn.style.zIndex = '2000';
    introBtn.style.animation = 'none';
    introBtn.classList.add('flying');

    void introBtn.offsetWidth;

    introBtn.style.top = headerRect.top + 'px';
    introBtn.style.left = headerRect.left + 'px';
    introBtn.style.width = headerRect.width + 'px';
    introBtn.style.height = headerRect.height + 'px';
    introBtn.style.fontSize = window.getComputedStyle(headerBtn).fontSize;
    introBtn.style.padding = window.getComputedStyle(headerBtn).padding;
    introBtn.style.borderRadius = window.getComputedStyle(headerBtn).borderRadius;
    introBtn.style.minWidth = 'auto';
    introBtn.style.background = window.getComputedStyle(headerBtn).background;

    setTimeout(() => { introOverlay.classList.add('fade-out'); }, 500);

    setTimeout(() => {
        headerBtn.classList.add('glow-header');
        introBtn.style.display = 'none';
        introBtn.style.position = '';
        introBtn.style.top = '';
        introBtn.style.left = '';
        introBtn.style.width = '';
        introBtn.style.height = '';
        introBtn.style.margin = '';
        introBtn.style.zIndex = '';
        introBtn.style.fontSize = '';
        introBtn.style.padding = '';
        introBtn.style.borderRadius = '';
        introBtn.style.minWidth = '';
        introBtn.style.background = '';
        introBtn.classList.remove('flying');

        setTimeout(() => {
            headerBtn.classList.remove('glow-header');
            if (mm2Btn) mm2Btn.classList.remove('hide-btn');
            if (accBtn) accBtn.classList.remove('hide-btn');
            introOverlay.classList.remove('fade-out');
            introOverlay.style.display = 'none';
        }, 1300);
    }, 1300);
}

// ================================================================
//  LIVE FEED TOGGLE
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
//  RENDER
// ================================================================
function renderAccounts() {
    const grid = document.getElementById('accountGrid');
    grid.innerHTML = '';
    accounts.forEach((acc, idx) => {
        const reviewTexts = reviewDistribution[idx] || [];
        const reviews = generateAccountReviews(reviewTexts);
        const card = document.createElement('div');
        card.className = 'account-card';
        card.innerHTML = `
                        <div class="profile-wrap">
                            <div class="glow-ring"></div>
                            <div class="glow-ring secondary"></div>
                            <img src="${acc.img}" alt="${acc.name}" loading="lazy" />
                        </div>
                        <div class="card-title">${acc.name}</div>
                        <div class="card-sub">#${acc.id}</div>
                        <div class="card-badge">${acc.badge}</div>
                        <div class="card-actions">
                            <div class="btn-row">
                                <a href="https://www.roblox.com/users/${acc.id}/profile" target="_blank" rel="noopener noreferrer" class="btn btn-profile">
                                    <span class="icon">👤</span> Open Profile
                                </a>
                                <button class="btn btn-info" data-index="${idx}">
                                    <span class="icon">ℹ️</span> Info
                                </button>
                            </div>
                            <div class="btn-row">
                                <button class="btn btn-buy account-buy-trigger" data-index="${idx}" data-method="paypal">
                                    <span class="icon">🛒</span> Buy Now ($${acc.price})
                                </button>
                                <button class="btn btn-robux account-buy-trigger" data-index="${idx}" data-method="robux">
                                    <span class="icon">💰</span> Pay with Robux (${acc.robuxPrice})
                                </button>
                            </div>
                            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-dm">
                                <span class="icon">💬</span> DM me for help
                            </a>
                        </div>
                        <div class="reviews">
                            ${reviews.map(r => `
                                <div class="review-item">
                                    <div>
                                        <span class="review-user">${r.user}</span>
                                        <span class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
                                    </div>
                                    <span class="review-text">"${r.text}"</span>
                                </div>
                            `).join('')}
                        </div>
                    `;
        card.querySelector('.btn-info').addEventListener('click', () => openInfoModal(idx));
        card.querySelectorAll('.account-buy-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const method = e.currentTarget.dataset.method;
                openAccountModal(acc, method);
            });
        });
        grid.appendChild(card);
    });
}

function renderMM2() {
    const grid = document.getElementById('mm2Grid');
    grid.innerHTML = '';
    mm2Items.forEach((item, index) => {
        const reviewCount = 2 + Math.floor(Math.random() * 2);
        const reviews = generateItemReviews(item.reviews, reviewCount);
        const card = document.createElement('div');
        card.className = 'mm2-card';
        card.dataset.name = item.name.toLowerCase();
        card.dataset.type = item.type;

        let actionsHtml = `
                        <button class="btn btn-buy mm2-buy-trigger" data-index="${index}" data-method="paypal">
                            <span class="icon">🛒</span> Buy Now ($${item.price})
                        </button>
                    `;
        if (item.robuxLink) {
            actionsHtml += `
                            <button class="btn btn-robux mm2-buy-trigger" data-index="${index}" data-method="robux">
                                <span class="icon">💰</span> Pay with Robux
                            </button>
                        `;
        }
        card.innerHTML = `
                        <div class="profile-wrap">
                            <div class="glow-ring"></div>
                            <div class="glow-ring secondary"></div>
                            <img src="${item.img}" alt="${item.name}" loading="lazy" />
                        </div>
                        <div class="card-title">${item.name}</div>
                        <div class="card-sub price-green">$${item.price}</div>
                        <div class="card-badge">${item.badge}</div>
                        <div class="click-hint">✦ click to trade ✦</div>
                        <div class="card-actions">${actionsHtml}</div>
                        <div class="reviews">
                            ${reviews.map(r => `
                                <div class="review-item">
                                    <div>
                                        <span class="review-user">${r.user}</span>
                                        <span class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</span>
                                    </div>
                                    <span class="review-text">"${r.text}"</span>
                                </div>
                            `).join('')}
                        </div>
                    `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-actions') || e.target.closest('.btn')) return;
            openMM2Modal(item);
        });
        card.querySelectorAll('.mm2-buy-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const method = e.currentTarget.dataset.method;
                openMM2Modal(item, method);
            });
        });
        grid.appendChild(card);
    });
}

// ================================================================
//  SEARCH & FILTER
// ================================================================
const searchInput = document.getElementById('mm2Search');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

function filterMM2() {
    const query = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.mm2-card').forEach(card => {
        const name = card.dataset.name || '';
        const type = card.dataset.type || '';
        const matchesSearch = name.includes(query);
        const matchesFilter = currentFilter === 'all' || type === currentFilter;
        card.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
    });
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
//  INFO MODAL
// ================================================================
const infoModal = document.getElementById('info-modal');
const infoTitle = document.getElementById('infoTitle');
const infoContent = document.getElementById('infoContent');
const infoClose = document.getElementById('infoClose');

async function openInfoModal(index) {
    const acc = accounts[index];
    if (!acc) return;
    infoTitle.textContent = `👤 ${acc.name} · Details`;
    infoContent.innerHTML = `<div class="txt-loading">⏳ Loading from ${acc.infoFile}...</div>`;
    infoModal.classList.add('visible');
    try {
        const response = await fetch(acc.infoFile);
        if (!response.ok) throw new Error(`HTTP ${response.status} — file not found`);
        const text = await response.text();
        if (text.trim() === '') {
            infoContent.innerHTML = `<div class="txt-error">⚠️ File "${acc.infoFile}" is empty.</div>`;
        } else {
            infoContent.innerHTML = text;
        }
    } catch (err) {
        let hint = '';
        if (window.location.protocol === 'file:') {
            hint = `
                            <div class="hint">
                                💡 <strong>You're using the file:// protocol.</strong><br>
                                Modern browsers block loading local files via fetch.<br>
                                <strong>Fix:</strong> Use a local development server (e.g., VS Code <code>Live Server</code> extension, or Python <code>http.server</code>).<br>
                                Then reopen this page via <code>http://</code> and the .txt files will load correctly.
                            </div>
                        `;
        } else {
            hint = `
                            <div class="hint">
                                💡 <strong>Possible reasons:</strong><br>
                                • File "${acc.infoFile}" is missing from the folder.<br>
                                • The filename is case‑sensitive – check the spelling.<br>
                                • The file is not in the same directory as this HTML.
                            </div>
                        `;
        }
        infoContent.innerHTML = `
                        <div class="txt-error">
                            ❌ Could not load <strong>${acc.infoFile}</strong><br>
                            <span style="font-size:0.8rem;color:#8a6a6a;">${err.message}</span>
                            ${hint}
                        </div>
                    `;
    }
}

function closeInfoModal() { infoModal.classList.remove('visible'); }
infoClose.addEventListener('click', closeInfoModal);
infoModal.addEventListener('click', (e) => { if (e.target === infoModal) closeInfoModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeInfoModal(); });

// ================================================================
//  ACCOUNT MODAL
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
    document.querySelectorAll('#account-modal .modal-view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function openAccountModal(account, method) {
    currentAccount = account;
    currentAccountEmail = '';
    currentPaymentMethod = method || 'paypal';
    accountModalItemName.textContent = `${account.name} · #${account.id}`;
    accountEmailInput.value = '';
    accountEmailInput.style.borderColor = '';
    confirmEmail.textContent = '—';
    confirmAccount.textContent = '';
    accountModalConfirm.disabled = false;
    accountModalConfirm.textContent = '✓ Yes, that\'s me';
    showAccountView('accountViewInput');
    accountModal.classList.add('visible');
    setTimeout(() => accountEmailInput.focus(), 120);
}

function closeAccountModal() {
    accountModal.classList.remove('visible');
    currentAccount = null;
    currentAccountEmail = '';
}

accountModalContinue.addEventListener('click', () => {
    const email = accountEmailInput.value.trim();
    if (!email || !email.includes('@') || !email.includes('.')) {
        accountEmailInput.style.borderColor = '#6a4a4a';
        accountEmailInput.placeholder = '⚠️ Please enter a valid email';
        setTimeout(() => {
            accountEmailInput.style.borderColor = '';
            accountEmailInput.placeholder = 'your@email.com';
        }, 2000);
        return;
    }
    currentAccountEmail = email;
    confirmEmail.textContent = email;
    confirmAccount.textContent = `Account: ${currentAccount.name} (ID: ${currentAccount.id})`;
    showAccountView('accountViewConfirm');
});

accountModalBack.addEventListener('click', () => {
    showAccountView('accountViewInput');
    accountEmailInput.focus();
});

accountModalConfirm.addEventListener('click', async () => {
    if (!currentAccountEmail || !currentAccount) return;
    accountModalConfirm.disabled = true;
    accountModalConfirm.textContent = '⏳ Sending...';

    const webhookOk = await sendAccountWebhook(currentAccount.name, currentAccount.id, currentAccountEmail);

    if (currentPaymentMethod === 'paypal') {
        window.open(PAYPAL_URL, '_blank');
    } else if (currentPaymentMethod === 'robux') {
        window.open(currentAccount.robuxLink, '_blank');
    }

    if (webhookOk) {
        accountSuccessMessage.textContent =
            `✅ We've received your purchase request for "${currentAccount.name}". We'll send the account details to ${currentAccountEmail} shortly.`;
    } else {
        accountSuccessMessage.textContent =
            `⚠️ Webhook failed, but the payment page is open. Please DM @leaswxg with your email "${currentAccountEmail}" and account "${currentAccount.name}".`;
    }
    showAccountView('accountViewSuccess');
    accountModalConfirm.disabled = false;
    accountModalConfirm.textContent = '✓ Yes, that\'s me';
});

accountModalCloseSuccess.addEventListener('click', closeAccountModal);
accountModal.addEventListener('click', (e) => { if (e.target === accountModal) closeAccountModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAccountModal(); });

// ================================================================
//  MM2 MODAL
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
    document.querySelectorAll('#mm2-modal .modal-view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function openMM2Modal(item, method) {
    currentMM2Item = item;
    currentMM2Username = '';
    currentMM2Method = method || 'paypal';
    mm2ModalItemName.textContent = `${item.name} · $${item.price}`;
    mm2Input.value = '';
    mm2Input.style.borderColor = '';
    mm2ConfirmUsername.textContent = '—';
    mm2ModalConfirm.disabled = false;
    mm2ModalConfirm.textContent = '✓ Yes, that\'s me';
    showMM2View('mm2ViewInput');
    mm2Modal.classList.add('visible');
    setTimeout(() => mm2Input.focus(), 120);
}

function closeMM2Modal() {
    mm2Modal.classList.remove('visible');
    currentMM2Item = null;
    currentMM2Username = '';
}

mm2ModalContinue.addEventListener('click', () => {
    const username = mm2Input.value.trim();
    if (!username) {
        mm2Input.style.borderColor = '#6a4a4a';
        mm2Input.placeholder = '⚠️ Please enter a username';
        setTimeout(() => {
            mm2Input.style.borderColor = '';
            mm2Input.placeholder = 'e.g. lilyfranco5';
        }, 2000);
        return;
    }
    currentMM2Username = username;
    mm2ConfirmUsername.textContent = username;
    showMM2View('mm2ViewConfirm');
});

mm2ModalBack.addEventListener('click', () => {
    showMM2View('mm2ViewInput');
    mm2Input.focus();
});

mm2ModalConfirm.addEventListener('click', async () => {
    if (!currentMM2Username || !currentMM2Item) return;
    mm2ModalConfirm.disabled = true;
    mm2ModalConfirm.textContent = '⏳ Sending...';

    const webhookOk = await sendMM2Webhook(currentMM2Username, currentMM2Item.name);

    if (currentMM2Method === 'paypal') {
        window.open(PAYPAL_URL, '_blank');
    } else if (currentMM2Method === 'robux' && currentMM2Item.robuxLink) {
        window.open(currentMM2Item.robuxLink, '_blank');
    }

    if (webhookOk) {
        mm2SuccessMessage.textContent =
            `✅ The bot has been notified! "${currentMM2Username}" will be added shortly. Join a MM2 game.`;
    } else {
        mm2SuccessMessage.textContent =
            `⚠️ Webhook failed, but the payment page is open. DM @leaswxg with "${currentMM2Username}".`;
    }
    showMM2View('mm2ViewSuccess');
    mm2ModalConfirm.disabled = false;
    mm2ModalConfirm.textContent = '✓ Yes, that\'s me';
});

mm2ModalCloseSuccess.addEventListener('click', closeMM2Modal);
mm2Modal.addEventListener('click', (e) => { if (e.target === mm2Modal) closeMM2Modal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMM2Modal(); });

// ================================================================
//  INTRO + TABS
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
    introOverlay.classList.remove('visible');
    document.querySelectorAll('.shop-tab').forEach(tab => tab.classList.remove('active'));
    const targetTab = document.querySelector(`.shop-tab[data-shop="${shop}"]`);
    if (targetTab) targetTab.classList.add('active');
    document.getElementById('mm2-shop').classList.toggle('active', shop === 'mm2');
    document.getElementById('accounts-shop').classList.toggle('active', shop === 'accounts');
    if (shop === 'mm2') setTimeout(filterMM2, 100);
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
//  LOADING
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

console.log('⚫ Lea\'s Shop · Emo Cyber (fancy edition)');
console.log(`📦 ${accounts.length} accounts, ${mm2Items.length} MM2 items`);
console.log('💳 PayPal: @eliasalvada');
console.log('📷 Instagram: @leaswxg');
if (window.location.protocol === 'file:') {
    console.warn('⚠️ file:// protocol – .txt files will not load. Use a local server.');
}