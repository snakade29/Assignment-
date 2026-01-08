import { expect } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutInfoPage from '../pageobjects/checkout.info.page.js'
import CheckoutOverviewPage from '../pageobjects/checkout.overview.page.js'
import CheckoutCompletePage from '../pageobjects/checkout.complete.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await InventoryPage.addRandomItemsToCart(3)
        await InventoryPage.openCart()

        await CartPage.goToCheckout()

        await CheckoutInfoPage.submitInfo('Shubham', 'Nakade', '440001')

        await CheckoutOverviewPage.finish()

        await CheckoutCompletePage.verifyComplete()
    })
})

