const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const smoothCss = `
    /* ─── GLOBAL MOBILE SMOOTHNESS ─── */
    html, body {
      overflow-x: hidden;
      width: 100%;
      -webkit-font-smoothing: antialiased;
    }
    
    @media (max-width: 768px) {
      .section-inner {
        padding: 0 15px;
      }
      .ayurveda-inner, .about-content {
        padding: 0 15px;
      }
      .marquee-item {
        font-size: 16px;
      }
    }
</style>
`;

c = c.replace('</style>', smoothCss);
fs.writeFileSync('index.html', c);
console.log('Global smooth mobile styles added');
