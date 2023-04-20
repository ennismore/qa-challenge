/*
Scenario
1. Search for a product
2. Add the first 3 results that qualify for Prime delivery
3. Reach the basket page
4. Modify the quantity of one item
5. Check totals
6. Click checkout
7. Confirm you have reached the login screen
[END]
Repeat this for 3 different product searches.
*/

import { test, chromium, expect, type Page } from '@playwright/test';


const SEARCH_ITEMS = [
    'iphone',
    'hairbrush',
    'English Dictionary'
];

describe('Amazon search', () => {
    let browser: any;
    let context: any;
    let page: any;
  
    //using chrome as its the most popular for this atm
    beforeAll(async () => {
      browser = await chromium.launch({ headless: false });
      context = await browser.newContext();
      page = await context.newPage();
    });

    //tidyup
    afterAll(async () => {
        await browser.close();
      });

  test('should return search results for iphone', async () => {
    // Navigate to Amazon's home page
    await page.goto('https://www.amazon.com/');

    // Type "iphone" into the search box and submit the form
    await page.type('#twotabsearchtextbox', 'iphone');
    await page.click('#nav-search-submit-button');

    // Wait for the search results page to load
    await page.waitForSelector('.s-result-list');
    const searchResults = await page.$$('.s-result-list .s-result-item');
    
    //show only prime candidates, note that when not logged in it is for 'free delivery'
    await page.click('#primeRefinements > ul');
    //click first itam on list
    await page.click('.s-result-list .s-result-item:nth-of-type(1) .a-link-normal.a-text-normal');
    await page.click('#add-to-cart-button');
    await page.goBack();
    await page.goBack();
    await page.waitForSelector('.s-result-list');
    await page.click('.s-result-list .s-result-item:nth-of-type(2) .a-link-normal.a-text-normal');
    await page.click('#add-to-cart-button');
    await page.goBack();
    await page.goBack();
    await page.waitForSelector('.s-result-list');
    await page.click('.s-result-list .s-result-item:nth-of-type(3) .a-link-normal.a-text-normal');
    await page.click('#add-to-cart-button');
    
    await page.click('#nav-cart-text-container');

    await page.click('#a-autoid-1-announce');
    await page.click('#quantity_3');
  }); 

});  
