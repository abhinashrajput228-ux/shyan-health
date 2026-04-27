const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
const newCss = `
    @media (max-width: 600px) {
      .trust-inner, .focus-grid, .products-grid { grid-template-columns: 1fr; }
      .footer-inner { grid-template-columns: 1fr; gap: 32px; }
      .hero h1 { font-size: 36px; }
      .hero-stats { flex-direction: column; gap: 20px; }
      .section-title { font-size: 28px; }
      .header-actions { display: none; }
      .header-inner { justify-content: center; }
      .newsletter-form { flex-direction: column; }
      .aya-card:nth-child(2), .aya-card:nth-child(4) { margin-top: 0; }
    }
`;
c = c.replace('/* ─── CART SYSTEM ─── */', newCss + '    /* ─── CART SYSTEM ─── */');
c = c.replace('.hero-visual {', '.hero-visual, .hero-visual-3d {');
fs.writeFileSync('index.html', c);
console.log('Mobile styles added');
