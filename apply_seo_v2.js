const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<head>';
const endTag = '<style>';

const newHeadContent = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#1D9E75" />

  <!-- 2. PRIMARY SEO META -->
  <title>Ayurvedic Weight Loss Tablets & PCOS Supplements | Shyan Health</title>
  <meta name="description" content="Natural Ayurvedic tablets for women. 5000+ happy customers. PCOS & PCOD support. 4.8 rating | Free consultation | Pan-India delivery." />
  <meta name="keywords" content="ayurvedic weight loss tablets india, pcos treatment ayurveda, natural weight loss for women, pcod supplements india, shatavari benefits, ashwagandha women" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://shyanhealth.com/" />

  <!-- 3. GEO TARGETING -->
  <meta name="geo.region" content="IN" />
  <meta name="geo.placename" content="India" />
  <meta name="language" content="English" />

  <!-- 4. OPEN GRAPH (Facebook / WhatsApp previews) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://shyanhealth.com/" />
  <meta property="og:title" content="Ayurvedic Weight Loss & PCOS Supplements | Shyan Health" />
  <meta property="og:description" content="5000+ Indian women transformed naturally. Ayurvedic PCOS & weight loss tablets. 4.8 rating | Free consultation." />
  <meta property="og:image" content="https://shyanhealth.com/assets/images/fat-to-fit-tablets.png" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="Shyan Health" />

  <!-- 5. TWITTER CARD -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ayurvedic Weight Loss & PCOS Supplements | Shyan Health" />
  <meta name="twitter:description" content="5000+ Indian women transformed. Natural Ayurvedic supplements. 4.8 rating." />
  <meta name="twitter:image" content="https://shyanhealth.com/assets/images/fat-to-fit-tablets.png" />

  <!-- 6. FAVICON -->
  <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />

  <!-- 7. PERFORMANCE — preconnect + preload hero image -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="image" href="/assets/images/hero-journey.png" fetchpriority="high" />

  <!-- 8. GOOGLE SEARCH CONSOLE VERIFICATION -->
  <meta name="google-site-verification" content="PASTE_YOUR_GSC_CODE_HERE" />

  <!-- 9. SCHEMA: Organization + WebSite -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://shyanhealth.com/#organization",
        "name": "Shyan Health",
        "url": "https://shyanhealth.com",
        "logo": "https://shyanhealth.com/assets/images/logo.png",
        "description": "Ayurvedic wellness supplements for Indian women — weight loss, PCOS and PCOD support.",
        "telephone": "+918802916080",
        "address": { "@type": "PostalAddress", "addressCountry": "IN" },
        "sameAs": [
          "https://www.instagram.com/shyanhealth",
          "https://www.facebook.com/shyanhealth"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5000",
          "bestRating": "5"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://shyanhealth.com/#website",
        "url": "https://shyanhealth.com",
        "name": "Shyan Health",
        "publisher": { "@id": "https://shyanhealth.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://shyanhealth.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
  </script>

  <!-- 10. SCHEMA: Product (Fat to Fit Tablets) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fat to Fit Tablets – Ayurvedic Weight Loss for Women",
    "image": "https://shyanhealth.com/assets/images/fat-to-fit-tablets.png",
    "description": "100% natural Ayurvedic weight loss tablets for Indian women. Formulated with ashwagandha, shatavari and triphala.",
    "brand": { "@type": "Brand", "name": "Shyan Health" },
    "sku": "SH-FAT2FIT-01",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Shyan Health" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "5000",
      "bestRating": "5"
    }
  }
  </script>

  <!-- 11. SCHEMA: FAQ (homepage featured snippets) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Shyan Health help with PCOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shyan Health uses shatavari, ashwagandha and other Ayurvedic herbs to regulate hormones, reduce insulin resistance and manage PCOS symptoms naturally without side effects."
        }
      },
      {
        "@type": "Question",
        "name": "How long does Ayurvedic weight loss take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most customers see initial results within 4 to 6 weeks when following our personalised diet plan. Sustainable fat loss of 6 to 10 kg is typically achieved in 3 to 4 months."
        }
      },
      {
        "@type": "Question",
        "name": "Are Shyan Health products safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All Shyan Health products are 100% natural Ayurvedic formulations, quality-tested and certified safe for long-term daily use with no known side effects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Shyan Health offers pan-India delivery to all Tier 1, Tier 2 and Tier 3 cities."
        }
      }
    ]
  }
  </script>

  <!-- 12. GOOGLE ANALYTICS 4 — replace GA_MEASUREMENT_ID -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>

  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600;700&family=Outfit:wght@400;600;700&display=swap"
    rel="stylesheet">
  <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" defer></script>
`;

const startIndex = html.indexOf(startTag) + startTag.length;
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  html = html.substring(0, startIndex) + newHeadContent + html.substring(endIndex);
  
  // Body changes
  html = html.replace(/<h1>.*?<\\/h1>/s, '<h1>Natural Ayurvedic Weight Loss for Indian Women | Fat to Fit Journey</h1>');
  
  // Image alts
  html = html.replace(/src="assets\\/images\\/hero-journey\\.png" alt=".*?"/g, 'src="assets/images/hero-journey.png" alt="Indian woman\\'s natural Ayurvedic weight loss journey – Shyan Health"');
  html = html.replace(/src="assets\\/images\\/natural-ingredients\\.png" alt=".*?"/g, 'src="assets/images/natural-ingredients.png" alt="Natural Ayurvedic herbs – ashwagandha, shatavari, triphala by Shyan Health"');
  html = html.replace(/src="assets\\/images\\/fat-to-fit-tablets\\.png" alt=".*?"/g, 'src="assets/images/fat-to-fit-tablets.png" alt="Fat to Fit Tablets – Natural Ayurvedic Weight Loss Supplements for Women"');

  fs.writeFileSync('index.html', html);
  console.log('SEO updates applied to index.html');
} else {
  console.error('Could not find head or style tags');
}
