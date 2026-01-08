import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import InventoryLocators from '../locators/inventory.locators.js'

describe('Inventory UI Integrity @smoke @regression', () => {
    it('should validate all UI elements on inventory page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        const items = await InventoryPage.inventoryItems
        expect(items.length).toBeGreaterThan(0)

        for (const item of items) {
            await expect(item.$(InventoryLocators.productImage)).toBeDisplayed()
            await expect(item.$(InventoryLocators.productName)).toBeDisplayed()
            await expect(item.$(InventoryLocators.productPrice)).toBeDisplayed()
            await expect(item.$(InventoryLocators.btnAddToCart)).toBeDisplayed()
        }

        await expect(InventoryPage.sortDropdown).toBeDisplayed()
    })
})
