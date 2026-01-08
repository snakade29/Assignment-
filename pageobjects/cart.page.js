import { $ } from '@wdio/globals'
import Page from './page.js';
import CartLocators from '../locators/cart.locators.js';
import allureReporter from '@wdio/allure-reporter';

class CartPage extends Page {
    get btnCheckout() {
        return $(CartLocators.btnCheckout);
    }

    async goToCheckout() {
        allureReporter.addStep('Proceed to checkout');
        allureReporter.addStep('Click on checkout button');
        await this.btnCheckout.click();
    }
}

export default new CartPage();
