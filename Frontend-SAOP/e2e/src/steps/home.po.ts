import { browser, by, element, until } from 'protractor';

export class HomePage {

    navigateTo() {

        return browser.get('/');

    }

    getParagraphText() {

        return element(by.css('app-root')).getText();

    }

}