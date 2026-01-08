class CheckoutInfoLocators {
    get inputFirstName() { return '[data-test="firstName"]'; }
    get inputLastName() { return '[data-test="lastName"]'; }
    get inputPostalCode() { return '[data-test="postalCode"]'; }
    get btnContinue() { return '[data-test="continue"]'; }
}

export default new CheckoutInfoLocators();
