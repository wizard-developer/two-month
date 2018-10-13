const puppeteer = require('puppeteer');
(async() => {
  const browser = await puppeteer.launch({
    devtools: true,
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://e.qq.com/dev/index.html');
  await page.click('a#login', {
    delay: 1000
  });
  // 怎么样一直等到iframe出现的时候在获取button？waitFor(3000)这种方法有问题
  await page.waitForSelector('iframe[name="ui_ptlogin"]');
  // 选中frame 我用的childFrames这个方法
  const frame = page.mainFrame().childFrames()[0];
  // 等待按钮出现，注意是frame.waitFor而不是page.waitFor
  await frame.waitFor("#bottom_qlogin #switcher_plogin");
  const button = await frame.$("#bottom_qlogin #switcher_plogin");
  await button.click()
})();