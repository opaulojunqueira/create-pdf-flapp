const pdf = require('html-pdf');
const fs = require('fs');

const htmlFilePath = './public/index.html'; // Caminho para o seu arquivo index.html

// Lê o conteúdo do arquivo HTML
const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

const pdfOptions = { format: 'Letter', dpi: 600 };

pdf.create(htmlContent, pdfOptions).toFile('./Relatorio.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log(res);
});
