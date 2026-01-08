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

    get cartBadge() {
        return $(InventoryLocators.cartBadge);
    }

    get sortDropdown() {
        return $(InventoryLocators.sortDropdown);
    }

    get logoutLink() {
        return $(InventoryLocators.logoutLink);
    }

    async addItemToCartByIndex(index) {
        allureReporter.addStep(`Adding item at index ${index} to cart`);
        const items = await this.inventoryItems;
        const btn = await items[index].$(InventoryLocators.btnAddToCart);
        await btn.click();
    }

    async removeItemFromCartByIndex(index) {
        allureReporter.addStep(`Removing item at index ${index} from cart`);
        const items = await this.inventoryItems;
        const btn = await items[index].$(InventoryLocators.btnRemoveFromCart);
        await btn.click();
    }

    async addRandomItemsToCart(count) {
        allureReporter.addStep('Add ' + count + ' random items to the cart');
        const items = await this.inventoryItems;
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

    async getCartCount() {
        if (await this.cartBadge.isExisting()) {
            const countText = await this.cartBadge.getText();
            return parseInt(countText);
        }
        return 0;
    }

    // logout() is now inherited from Page class


    async sortItems(option) {
        allureReporter.addStep(`Sorting items by: ${option}`);
        await this.sortDropdown.selectByVisibleText(option);
    }

    async getProductNames() {
        const elements = await $$(InventoryLocators.productName);
        const names = [];
        for (const element of elements) {
            names.push(await element.getText());
        }
        return names;
    }

    async getProductPrices() {
        const elements = await $$(InventoryLocators.productPrice);
        const prices = [];
        for (const element of elements) {
            const text = await element.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }
        return prices;
    }
}

export default new InventoryPage();
