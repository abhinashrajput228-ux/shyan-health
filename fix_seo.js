const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
let productsHtml = fs.readFileSync('products.html', 'utf8');
let aboutHtml = fs.readFileSync('about.html', 'utf8');
let adminHtml = fs.readFileSync('admin.html', 'utf8');

const robotsIndexTag = '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n  ';
const robotsNoIndexTag = '<meta name="robots" content="noindex, nofollow">\n  ';

// Append to head if not exists
if (!indexHtml.includes('name="robots"')) {
    indexHtml = indexHtml.replace('<title>', robotsIndexTag + '<title>');
    fs.writeFileSync('index.html', indexHtml);
}

if (!productsHtml.includes('name="robots"')) {
    productsHtml = productsHtml.replace('<title>', robotsIndexTag + '<title>');
    fs.writeFileSync('products.html', productsHtml);
}

if (!aboutHtml.includes('name="robots"')) {
    aboutHtml = aboutHtml.replace('<title>', robotsIndexTag + '<meta name="description" content="Learn about Shyan Healths founders, our mission, and our 100% natural Ayurvedic weight management vision.">\n    <title>');
    fs.writeFileSync('about.html', aboutHtml);
}

if (!adminHtml.includes('name="robots"')) {
    adminHtml = adminHtml.replace('<title>', robotsNoIndexTag + '<title>');
    fs.writeFileSync('admin.html', adminHtml);
}

console.log("SEO Meta Tags added successfully");
