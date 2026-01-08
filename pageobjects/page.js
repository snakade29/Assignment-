import { browser, $ } from '@wdio/globals'
import InventoryLocators from '../locators/inventory.locators.js';
import allureReporter from '@wdio/allure-reporter';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    get burgerMenuBtn() {
        return $(InventoryLocators.burgerMenuBtn);
    }

    get logoutLink() {
        return $(InventoryLocators.logoutLink);
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://www.saucedemo.com/`)
    }

    async logout() {
        allureReporter.addStep('Logging out');
        await this.burgerMenuBtn.click();
        await this.logoutLink.waitForClickable();
        await this.logoutLink.click();
    }
}
