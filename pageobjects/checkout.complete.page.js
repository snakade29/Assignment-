import { $ } from '@wdio/globals'
import Page from './page.js';
import CheckoutCompleteLocators from '../locators/checkout.complete.locators.js';

import { expect } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

class CheckoutCompletePage extends Page {
    get headerComplete() {
        return $(CheckoutCompleteLocators.headerComplete);
    }

    async verifyComplete() {
        allureReporter.addStep('Verify Success Message');
        await expect(this.headerComplete).toHaveText('Thank you for your order!');
    }
}

export default new CheckoutCompletePage();
