import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Add/Remove Product Combinations @regression', () => {
    it('should update cart badge correctly when adding and removing items', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        // Add 3 products
        await InventoryPage.addItemToCartByIndex(0)
        await InventoryPage.addItemToCartByIndex(1)
        await InventoryPage.addItemToCartByIndex(2)
        expect(await InventoryPage.getCartCount()).toBe(3)

        // Remove the second item
        await InventoryPage.removeItemFromCartByIndex(1)
        expect(await InventoryPage.getCartCount()).toBe(2)

        // Add another one
        await InventoryPage.addItemToCartByIndex(3)
        expect(await InventoryPage.getCartCount()).toBe(3)

        // Go to cart and verify items - for simplicity we just verify the count here
        await InventoryPage.openCart()

    })
})
