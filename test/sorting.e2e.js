import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Product Sorting @regression', () => {
    it('should sort products by name and price', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        // Name: A to Z
        await InventoryPage.sortItems('Name (A to Z)')
        let names = await InventoryPage.getProductNames()
        let sortedNames = [...names].sort()
        expect(names).toEqual(sortedNames)

        // Name: Z to A
        await InventoryPage.sortItems('Name (Z to A)')
        names = await InventoryPage.getProductNames()
        sortedNames = [...names].sort().reverse()
        expect(names).toEqual(sortedNames)

        // Price: Low to High
        await InventoryPage.sortItems('Price (low to high)')
        let prices = await InventoryPage.getProductPrices()
        let sortedPrices = [...prices].sort((a, b) => a - b)
        expect(prices).toEqual(sortedPrices)

        // Price: High to Low
        await InventoryPage.sortItems('Price (high to low)')
        prices = await InventoryPage.getProductPrices()
        sortedPrices = [...prices].sort((a, b) => b - a)
        expect(prices).toEqual(sortedPrices)
    })
})
