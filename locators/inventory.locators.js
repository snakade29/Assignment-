class InventoryLocators {
    get inventoryItems() { return '[data-test="inventory-item"]'; }
    get cartLink() { return '[data-test="shopping-cart-link"]'; }
    get btnAddToCart() { return 'button[data-test^="add-to-cart"]'; }
}

export default new InventoryLocators();
