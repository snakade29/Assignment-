import { $ } from '@wdio/globals'
import Page from './page.js';
import CheckoutCompleteLocators from '../locators/checkout.complete.locators.js';

class CheckoutCompletePage extends Page {
    get headerComplete() {
        return $(CheckoutCompleteLocators.headerComplete);
    }
}

export default new CheckoutCompletePage();
