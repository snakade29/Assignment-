import { $$ } from '@wdio/globals'
import Page from './page.js';
import { $ } from '@wdio/globals' // Need singular $ as well
import InventoryLocators from '../locators/inventory.locators.js';
import allureReporter from '@wdio/allure-reporter';

class InventoryPage extends Page {
    get inventoryItems() {
        return $$(InventoryLocators.inventoryItems);
    }

    get cartLink() {
        return $(InventoryLocators.cartLink);
    }

    async addRandomItemsToCart(count) {
        // Need to wait for items to exist first or fetch them
        const items = await this.inventoryItems;
        // The sort logic operates on the array of elements. 
        // Note: In WDIO, $$ returns a chainable element array, we might need to be careful with sort on it directly if it's a proxy, but usually it resolves to an array of elements.
        // However, standard Array.sort works.
        const shuffledItems = items.sort(() => 0.5 - Math.random());
        const selectedItems = shuffledItems.slice(0, count);

        for (const item of selectedItems) {
            allureReporter.addStep('Click add to cart button for random item');
            const addToCartBtn = await item.$(InventoryLocators.btnAddToCart);
            await addToCartBtn.click();
        }
    }

    async openCart() {
        allureReporter.addStep('Click on shopping cart link');
        await this.cartLink.click();
    }
}

export default new InventoryPage();
