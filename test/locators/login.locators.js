class LoginLocators {
    get inputUsername() { return '//input[@id="user-name"]'; }
    get inputPassword() { return '//input[@id="password"]'; }
    get btnSubmit() { return '//input[@id="login-button"]'; }
}

export default new LoginLocators();
