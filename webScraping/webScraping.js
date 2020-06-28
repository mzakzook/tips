// SOURCE CODE

// const puppeteer = require('puppeteer');
// const fs = require('fs');

// (async() => {
// const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.youtube.com', {waitUntil: 'networkidle0'});
//   const html = await page.content();

// //save our html in a file
// fs.writeFile('page.html', html, _ => console.log('HTML saved'));

// //... do some stuff
//   await browser.close();
//   })();

// ----------------------------------------------

// PDF

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
//   await page.pdf({path: 'hn.pdf', format: 'A4'});

//   await browser.close();
// })();

// -------------------------------------------------------------------

// SCREENSHOT

// const puppeteer = require('puppeteer');

// puppeteer.launch({headless: false}).then(async browser => {
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1280, height: 800 })
//   await page.goto('https://www.aymen-loukil.com');
//   await page.screenshot({ path: 'myscreenshot.png', fullPage: true });
//   await browser.close();
// });

// ---------------------------------------------------

// GITHUB REPO SCRAPE
// const puppeteer = require('puppeteer');
// const createCsvWriter = require('csv-writer').createArrayCsvWriter;

// (async () => {
//   const browser = await puppeteer.launch({headless:false, slowMo: 50});
//   const page = await browser.newPage();
//   await page.goto('https://github.com/mzakzook?tab=repositories', {waitUntil: 'networkidle2'});
//   await page.waitForSelector('#user-repositories-list li');
//   let myRepos = [];
//   let newRepos = true;
//   while (newRepos) {
//     const tmp = await page.evaluate(() => {
//       const repoLinks = '#user-repositories-list li h3 a';
//       const repos = document.querySelectorAll(repoLinks);
//       return Array.from(repos).map((repo, ind) => { return [repo.text, repo.href] });
//     });
//     myRepos.push(...tmp)
//     try {
//       await page.click('#user-repositories-list > div > div > a:nth-child(2)');
//       await page.waitForSelector('#user-repositories-list li');
//     } catch (error) {
//       newRepos = false;
//     }
//   }

//   const csvWriter = createCsvWriter({
//     header: [],
//     path: './data445.csv'
//   });
//   csvWriter.writeRecords(myRepos)
//     .then(() => {
//       console.log('...Done')
//     })

//   await browser.close();
// })();

// ---------------------------------------------------

// CRAIGSLIST SCRAPE

// const puppeteer = require('puppeteer');
// const createCsvWriter = require('csv-writer').createArrayCsvWriter;

// (async () => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto('https://sfbay.craigslist.org/d/arts-crafts/search/ara', {waitUntil: 'networkidle2'});
//   await page.waitForSelector('#sortable-results > ul > li > p > a');

//   let listings = [];
//   let moreItems = true;
//   while (moreItems) {
//     const tmp = await page.evaluate(() => {
//       const itemLinks = '#sortable-results > ul > li > p > a';
//       const itemPrices = '#sortable-results > ul > li > p > span.result-meta > span.result-price'
//       const priceList = document.querySelectorAll(itemPrices)
//       const itemList = document.querySelectorAll(itemLinks);
//       const itemArr =  Array.from(itemList).map((itemLi) => { 
//         return [itemLi.text, itemLi.href]});
//       const priceArr = Array.from(priceList).map((pri) => { 
//         return pri.textContent});
//       for (let i = 0; i < itemArr.length ; i++) {
//         itemArr[i].push(priceArr[i])
//       }
//       return itemArr
//     });
//     listings.push(...tmp)
//     try {
//       await page.click('#searchform > div > div.paginator.buttongroup > span.buttons > a.button.next');
//       await page.waitForSelector('#sortable-results > ul > li > p > a');
//     } catch (error) {
//       moreItems = false;
//     }
//   }

//   const csvWriter = createCsvWriter({
//     header: [],
//     path: './craigslist1.csv'
//   });
//   csvWriter.writeRecords(listings)
//     .then(() => {
//       console.log('...Done')
//     })

//   await browser.close();
// })();

// ---------------------------------------------------------

// END-TO-END FORM TEST



// fetchPatients = (email) => {
//   fetch(`http://localhost:3001/patients`)
//     .then(res => res.json())
//     .then(patients => {
//       testPass = (patients.slice(-1)[0].email === email)
//       })
// }




// (async () => {
//   const browser = await puppeteer.launch({headless:false, slowMo: 50});
//   const page = await browser.newPage();
//   //Go to my page and wait until the page loads
//   await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
//   await page.click('#root > button:nth-child(3)') 
//   await page.waitForSelector('#myModal > div > form > input[type=text]:nth-child(2)');

//   //type the name
//   await page.focus('#myModal > div > form > input[type=text]:nth-child(2)')
//   await page.keyboard.type('PuppeteerBot');

//   //type bday
//   await page.focus('#myModal > div > form > input[type=date]:nth-child(4)')
//   await page.keyboard.type('01/01/1980');

//   //type email
//   let email = 'ghho@gmail.com'
//   await page.focus('#myModal > div > form > input[type=text]:nth-child(6)')
//   await page.keyboard.type(email);

//   //Click on the submit button
//   await page.click('#myModal > div > form > button')  

  
//   await page.screenshot({ path: 'form6.png', fullPage: true });
//   await browser.close();
//   await fetchPatients(email)
//   setTimeout(function() {
//     console.log(testPass)
//     return testPass
//   }, 5000);
// })();

