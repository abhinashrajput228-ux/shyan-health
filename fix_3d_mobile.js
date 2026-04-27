const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/\.hero-visual, \.hero-visual-3d\s*\{\s*display:\s*none;\s*\}/, 
`.hero-visual, .hero-visual-3d {
        display: flex;
        height: 350px;
        margin-top: 30px;
        margin-bottom: -40px;
      }
      .hero-3d-stack {
        transform: scale(0.65);
      }`);

fs.writeFileSync('index.html', c);
console.log('Mobile 3d visual fixed');
