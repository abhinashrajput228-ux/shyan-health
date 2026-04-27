const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const newCss = `
    /* ─── MOBILE RESPONSIVENESS IMPROVEMENTS ─── */
    @media (max-width: 768px) {
      .bmi-section {
        padding: 50px 15px;
      }
      .bmi-container {
        grid-template-columns: 1fr;
        padding: 30px 20px !important;
        gap: 30px;
        border-radius: 20px;
      }
      .bmi-info h2 {
        font-size: 32px !important;
        margin-bottom: 15px;
        line-height: 1.3;
      }
      .bmi-info p {
        font-size: 15px;
      }
      .bmi-form {
        gap: 15px;
      }
      .bmi-form > div[style*="grid-template-columns"] {
        grid-template-columns: 1fr !important;
        gap: 15px !important;
      }
      .bmi-result-card {
        padding: 25px 15px;
        border-radius: 16px;
        margin-top: 20px;
      }
      .bmi-value {
        font-size: 46px !important;
        margin: 5px 0;
      }
      .bmi-cat {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .bmi-input-group label {
        font-size: 12px;
      }
      .bmi-input {
        padding: 12px 14px;
        font-size: 14px;
      }
      .bmi-container button {
        padding: 14px;
        font-size: 15px;
      }
    }
</style>
`;

c = c.replace('</style>', newCss);
fs.writeFileSync('index.html', c);
console.log('Mobile BMI styles added');
