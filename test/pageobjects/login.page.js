import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginLocators from '../locators/login.locators.js';
import allureReporter from '@wdio/allure-reporter';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $(LoginLocators.inputUsername);
    }

    get inputPassword() {
        return $(LoginLocators.inputPassword);
    }

    get btnSubmit() {
        return $(LoginLocators.btnSubmit);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        allureReporter.addStep(`Set username: ${username}`);
        await this.inputUsername.setValue(username);

        allureReporter.addStep('Set password');
        await this.inputPassword.setValue(password);

        allureReporter.addStep('Click on Login button');
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();
