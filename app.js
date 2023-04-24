let puppeteer = require("puppeteer");

const profileLink = 'https://www.linkedin.com/in/sandeep-jain-/';


async function automation() {
    const browser = await puppeteer.launch({headless:false, defaultViewport:null, args:["--start-maximized"]});
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/home');
    await page.type("input[type='text']","EMAIL", {delay:50});
    await page.type("input[type='password']","PASSWORD", {delay:50});
    await page.click("button[type='submit']");
    await page.goto(profileLink);
    await page.click(`.pvs-profile-actions__action [type="button"]`);
}
  
automation();