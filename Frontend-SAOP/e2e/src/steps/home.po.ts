import { browser, by, element, until } from 'protractor';

export class HomePage {

    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {

        return element(by.css('app-root')).getText();

    } 
    getParrafo() {
        return element(by.css('app-root h1')).getText();
      }

       getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

}