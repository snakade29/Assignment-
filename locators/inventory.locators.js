class InventoryLocators {
    get inventoryItems() { return '[data-test="inventory-item"]'; }
    get cartLink() { return '[data-test="shopping-cart-link"]'; }
    get cartBadge() { return '[data-test="shopping-cart-badge"]'; }
    get btnAddToCart() { return 'button[data-test^="add-to-cart"]'; }
    get btnRemoveFromCart() { return 'button[data-test^="remove-"]'; }
    get productImage() { return '.inventory_item_img'; }
    get productName() { return '[data-test="inventory-item-name"]'; }
    get productPrice() { return '[data-test="inventory-item-price"]'; }
    get sortDropdown() { return '[data-test="product-sort-container"]'; }
    get burgerMenuBtn() { return 'button#react-burger-menu-btn'; }
    get logoutLink() { return '[data-test="logout-sidebar-link"]'; }
}

export default new InventoryLocators();
