const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/@media \(max-width: 900px\) \{\s*\.hero-inner \{\s*grid-template-columns: 1fr;\s*\}\s*\.hero-visual, \.hero-visual-3d \{\s*display: flex;\s*height: 350px;\s*margin-top: 30px;\s*margin-bottom: -40px;\s*\}\s*\.hero-3d-stack \{\s*transform: scale\(0.65\);\s*\}/,
`@media (max-width: 900px) {
      .hero-inner {
        display: flex;
        flex-direction: column-reverse;
        gap: 0px;
        padding-top: 40px;
        padding-bottom: 60px;
      }

      .hero-visual, .hero-visual-3d {
        display: flex;
        height: 320px;
        margin-top: -20px;
        margin-bottom: 20px;
      }
      .hero-3d-stack {
        transform: scale(0.55);
      }`);

fs.writeFileSync('index.html', c);
console.log('Mobile layout reversed');
