import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutInfoPage from '../pageobjects/checkout.info.page.js'
import CheckoutOverviewPage from '../pageobjects/checkout.overview.page.js'

describe('Shopping Cart Total Price Validation @regression', () => {
    it('should validate that the total price equals subtotal + tax', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        // Add some products
        await InventoryPage.addItemToCartByIndex(0)
        await InventoryPage.addItemToCartByIndex(1)

        const price1 = (await InventoryPage.getProductPrices())[0]
        const price2 = (await InventoryPage.getProductPrices())[1]
        const expectedSubtotal = price1 + price2

        await InventoryPage.openCart()
        await CartPage.goToCheckout()
        await CheckoutInfoPage.submitInfo('Test', 'User', '12345')

        const actualSubtotal = await CheckoutOverviewPage.getSubtotal()
        const actualTax = await CheckoutOverviewPage.getTax()
        const actualTotal = await CheckoutOverviewPage.getTotal()

        expect(actualSubtotal).toBe(expectedSubtotal)
        expect(actualTotal).toBe(parseFloat((actualSubtotal + actualTax).toFixed(2)))
    })
})
