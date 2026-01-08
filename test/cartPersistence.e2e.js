import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Cart Persistence @regression', () => {
    it('should persist cart badge count across sessions', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        // Add 2 random items
        await InventoryPage.addRandomItemsToCart(2)
        const initialCount = await InventoryPage.getCartCount()
        expect(initialCount).toBe(2)

        // Logout
        await InventoryPage.logout()

        // Login again
        await LoginPage.login('standard_user', 'secret_sauce')

        // Validate count persists
        const persistedCount = await InventoryPage.getCartCount()
        expect(persistedCount).toBe(initialCount)
    })
})
