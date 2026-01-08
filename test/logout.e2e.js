import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutInfoPage from '../pageobjects/checkout.info.page.js'

describe('Logout From Everywhere @regression', () => {
    async function verifyLogout() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(LoginPage.btnSubmit).toBeDisplayed()
    }

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })

    it('should logout from Inventory page', async () => {
        await InventoryPage.logout()
        await verifyLogout()
    })

    it('should logout from Cart page', async () => {
        await InventoryPage.openCart()
        await CartPage.logout() // Inherited from Page
        await verifyLogout()
    })

    it('should logout from Checkout page', async () => {
        await InventoryPage.openCart()
        await CartPage.goToCheckout()
        await CheckoutInfoPage.logout() // Inherited from Page
        await verifyLogout()
    })
})
