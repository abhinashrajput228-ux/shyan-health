const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.replace(/<li><a href=\"#\">About Us<\/a><\/li>/, '<li><a href="about.html">About Us</a></li>');
c = c.replace(/<li><a href=\"#\">Our Founders<\/a><\/li>/, '<li><a href="about.html">Our Founders</a></li>');
fs.writeFileSync('index.html', c);
console.log('index.html updated with about.html links');
