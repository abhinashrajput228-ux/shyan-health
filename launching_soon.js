const fs = require('fs');

['index.html', 'products.html'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');

  // Replace badges for products 7, 8, 9, 10
  c = c.replace(/\{ id: 7, image: null, emoji: '🍵', name: 'Metabolism Boost Tea',[^}]+badge: 'sale'/, (m) => m.replace("badge: 'sale'", "badge: 'launching'"));
  c = c.replace(/\{ id: 8, image: null, emoji: '💪', name: 'Women\\'s Vitality Pack',[^}]+badge: 'best'/, (m) => m.replace("badge: 'best'", "badge: 'launching'"));
  c = c.replace(/\{ id: 9, image: null, emoji: '🌱', name: 'Moringa Daily Greens',[^}]+badge: 'new'/, (m) => m.replace("badge: 'new'", "badge: 'launching'"));
  c = c.replace(/\{ id: 10, image: null, emoji: '🍯', name: 'Shilajit Resin Extract',[^}]+badge: 'new'/, (m) => m.replace("badge: 'new'", "badge: 'launching'"));

  // Update badge rendering text
  c = c.replace(/p\.badge === 'new' \? 'New' : 'Sale'/, "p.badge === 'new' ? 'New' : p.badge === 'launching' ? 'Launching Soon' : 'Sale'");

  // Update btn-add-cart in productsGrid rendering
  c = c.replace(/<button class="btn-add-cart" onclick="event\.stopPropagation\(\); addToCart\(\$\{p\.id\}, 1\)">🛒<\/button>/, 
    "${p.badge === 'launching' ? '<span style=\"font-size:12px; color:var(--saffron); font-weight:bold;\">Soon</span>' : `<button class=\"btn-add-cart\" onclick=\"event.stopPropagation(); addToCart(${p.id}, 1)\">🛒</button>`}");

  // Add IDs to modal buttons if not already added
  if (!c.includes('id="modalAddBtn"')) {
    c = c.replace(/<button class="btn-order" onclick="addToCartFromModal\(\)"/, '<button id="modalAddBtn" class="btn-order" onclick="addToCartFromModal()"');
  }
  if (!c.includes('id="modalWaBtn"')) {
    c = c.replace(/<button class="btn-order" onclick="whatsappOrder\(\)"/, '<button id="modalWaBtn" class="btn-order" onclick="whatsappOrder()"');
  }

  // Update openModal to hide/show buttons
  if (!c.includes("document.getElementById('modalAddBtn').style.display")) {
    c = c.replace(/document\.getElementById\('productModal'\)\.classList\.add\('active'\);/, 
      "document.getElementById('modalAddBtn').style.display = p.badge === 'launching' ? 'none' : 'block';\n      document.getElementById('modalWaBtn').style.display = p.badge === 'launching' ? 'none' : 'block';\n      document.getElementById('productModal').classList.add('active');");
  }

  // Add CSS for .badge-launching
  if (!c.includes('.badge-launching')) {
    c = c.replace(/<\/style>/, 
      "  .badge-launching { background: #9E9E9E; color: white; }\n  </style>");
  }

  fs.writeFileSync(f, c);
});

console.log('Done marking products as launching soon');
