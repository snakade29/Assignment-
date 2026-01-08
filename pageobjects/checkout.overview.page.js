import { $ } from '@wdio/globals'
import Page from './page.js';
import CheckoutOverviewLocators from '../locators/checkout.overview.locators.js';
import allureReporter from '@wdio/allure-reporter';

class CheckoutOverviewPage extends Page {
    get btnFinish() {
        return $(CheckoutOverviewLocators.btnFinish);
    }

    async finish() {
        allureReporter.addStep('Finish Checkout');
        allureReporter.addStep('Click on Finish button');
        await this.btnFinish.click();
    }

    async getSubtotal() {
        const text = await $(CheckoutOverviewLocators.subtotalLabel).getText();
        return parseFloat(text.split('$')[1]);
    }

    async getTax() {
        const text = await $(CheckoutOverviewLocators.taxLabel).getText();
        return parseFloat(text.split('$')[1]);
    }

    async getTotal() {
        const text = await $(CheckoutOverviewLocators.totalLabel).getText();
        return parseFloat(text.split('$')[1]);
    }
}

export default new CheckoutOverviewPage();
