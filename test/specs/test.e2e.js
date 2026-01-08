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
        allureReporter.addStep('Open Login Page and Login')
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        allureReporter.addStep('Add 3 random items to the cart')
        await InventoryPage.addRandomItemsToCart(3)
        await InventoryPage.openCart()

        allureReporter.addStep('Proceed to checkout')
        await CartPage.goToCheckout()

        allureReporter.addStep('Enter Personal Information')
        await CheckoutInfoPage.submitInfo('Shubham', 'Nakade', '440001')

        allureReporter.addStep('Finish Checkout')
        await CheckoutOverviewPage.finish()

        allureReporter.addStep('Verify Success Message')
        await expect(CheckoutCompletePage.headerComplete)
            .toHaveText('Thank you for your order!');
    })
})

