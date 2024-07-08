const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '//*[@id="email"]';
    this.passwordInput = '//*[@id="password"]';
    this.loginButton = '//*[@id="root"]/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[4]/button';
    this.validLoginValidation = '//*[@id="root"]/div/div[2]/div/div[2]/div/div[2]/div/div[4]/div/button/div/div/div';
    this.errorMessage = '//*[@id="form-field-error:73"]/div';
  }

  async login(email, password) {
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.loginButton).click();
  }

  async verifyValidLogin() {
    await expect(this.page.locator(this.validLoginValidation)).toHaveText(
      "Add question"
    );
  }

  async invalidLogin(error) {
    await expect(this.page.locator(this.errorMessage)).toHaveText(error);
  }
};