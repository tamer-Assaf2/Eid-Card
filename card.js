const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "file:///D:/descktop_tamer/gis/FalCon_GIS/test_all_sys/rebuild_tamtechgis/cava_projects/cards/card.html",
  );
  await page.pdf({
    path: "card.pdf",
    width: "1000px",
    height: "1000px",
    printBackground: true,
  });
  await browser.close();
})();
