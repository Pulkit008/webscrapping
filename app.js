const puppeteer = require('puppeteer');

(async () => {
    let pdfda = "";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://medium.com/javarevisited/7-free-courses-to-learn-bootstrap-for-web-designers-and-developers-5135215648f1', { waitUntil: 'networkidle2' });
    pdfda = pdfda + await page.evaluate(() => {
        return document.querySelector('article>div>section>div>div>div>h1').outerHTML.toString();
    });

    await page.goto('https://kokumura.medium.com/how-the-japanese-exercise-to-stay-youthful-be2d6105e6e6', { waitUntil: 'networkidle2' });
    pdfda = pdfda + await page.evaluate(() => {
        return document.querySelector('article>div>section>div>div>div>h1').outerHTML.toString();
    });

    page.setContent(pdfda);
    await page.pdf({path: 'abc.pdf', format: 'A4', });
    
    await browser.close();
})();