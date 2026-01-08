import { $ } from '@wdio/globals'
import Page from './page.js';
import CheckoutInfoLocators from '../locators/checkout.info.locators.js';
import allureReporter from '@wdio/allure-reporter';

class CheckoutInfoPage extends Page {
    get inputFirstName() {
        return $(CheckoutInfoLocators.inputFirstName);
    }

    get inputLastName() {
        return $(CheckoutInfoLocators.inputLastName);
    }

    get inputPostalCode() {
        return $(CheckoutInfoLocators.inputPostalCode);
    }

    get btnContinue() {
        return $(CheckoutInfoLocators.btnContinue);
    }

    async submitInfo(firstName, lastName, zip) {
        allureReporter.addStep(`Enter First Name: ${firstName}`);
        await this.inputFirstName.setValue(firstName);

        allureReporter.addStep(`Enter Last Name: ${lastName}`);
        await this.inputLastName.setValue(lastName);

        allureReporter.addStep(`Enter Postal Code: ${zip}`);
        await this.inputPostalCode.setValue(zip);

        allureReporter.addStep('Click Continue button');
        await this.btnContinue.click();
    }
}

export default new CheckoutInfoPage();
