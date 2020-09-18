import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { element, by } from "protractor";
import { HomePage } from '../steps/home.po';

let page: HomePage;

Before(() => {
  page = new HomePage();
});

When(/^I am on the home page$/, {timeout:60 * 5000}, async () => {
  await page.navigateTo();
});


When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  
  expect(await element(by.id("counter")).getText()).to.equal('home works!');
});

