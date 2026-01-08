class CheckoutOverviewLocators {
    get btnFinish() { return '[data-test="finish"]'; }
    get subtotalLabel() { return '[data-test="subtotal-label"]'; }
    get taxLabel() { return '[data-test="tax-label"]'; }
    get totalLabel() { return '[data-test="total-label"]'; }
}

export default new CheckoutOverviewLocators();
