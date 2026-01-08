import { $ } from '@wdio/globals'
import Page from './page.js';
import CheckoutOverviewLocators from '../locators/checkout.overview.locators.js';
import allureReporter from '@wdio/allure-reporter';

class CheckoutOverviewPage extends Page {
    get btnFinish() {
        return $(CheckoutOverviewLocators.btnFinish);
    }

    async finish() {
        allureReporter.addStep('Click on Finish button');
        await this.btnFinish.click();
    }
}

export default new CheckoutOverviewPage();
