const { test, expect } = require("@playwright/test");
const testData = require("../../Fixtures/Login.fixture.json");
// const { LoginPage } = require("../../pageObjects/login.po");

// const { beforeEach } = require("node:test");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quora - A place to share knowledge and better understand the world/);
});




test.describe("valid login tests", () => {
  test("login valid", async ({ page }) => {
    await page.locator('//*[@id="email"]').fill(testData.validUser.email);
    await page.locator('//*[@id="password"]').fill(testData.validUser.password);
    await page.locator('//*[@id="root"]/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[4]/button').click();

    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div/div[2]/div/div[4]/div/button/div/div/div')).toHaveText(
      /Add question/
    );
  });

  // test("email with leading space", async ({ page }) => {
  //   await page.locator('//*[@id="email"]').fill(testData.emailLeadingSpace.email);
  //   await page.locator('//*[@id="password"]').fill(testData.emailLeadingSpace.password);
  //   await page.locator('//*[@id="root"]/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[4]/button').click();
  //   await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div/div[2]/div/div[4]/div/button/div/div/div')).toHaveText(
  //     /Add question/
  //   );
  // });
});

// test.describe("invalid login tests", () => {
//   test("login invalid", async ({ page }) => {
//     await page.locator('//*[@id="email"]').fill(testData.invalidUser.invalidCredentials.email);
//     await page.locator('//*[@id="password"]').fill(testData.invalidUser.invalidCredentials.password);

//     await expect(page.locator("//div[contains(text(),'No account')]")).toHaveText("No account found for this email. Retry, or Sign up for Quora.");
//   });

//   test("empty field", async ({ page }) => {
//     await page.locator('//*[@id="email"]').fill(testData.invalidUser.emptyField.email);
//     await page.locator('//*[@id="password"]').fill(testData.invalidUser.emptyField.password);
    
//     await expect(page.locator('//*[@id="root"]/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[4]/button')).toBeDisabled();
    
//   });

//     test("email empty", async ({ page }) => {
//       await page
//         .locator('//*[@id="email"]')
//         .fill(testData.invalidUser.emptyEmail.email);
//       await page
//         .locator('//*[@id="password"]')
//         .fill(testData.invalidUser.emptyEmail.password);
//         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[4]/button')).toBeDisabled();
//     });

//     test("Password empty", async ({ page }) => {
//       await page.locator('//*[@id="email"]').fill(testData.invalidUser.emptyPassword.email);
//       await page.locator('//*[@id="password"]').fill(testData.invalidUser.emptyPassword.password);
//       await expect(page.locator('//*[@id="root"]/div/div[2]/div/div/div/div/div/div[2]/div[2]/div[4]/button')).toBeDisabled();
//         // await expect(page.locator("//div[contains(text(),'Incorrect password.')]")).toHaveText("Incorrect password. Reset password");
//     });

    

//     test("password with leading space", async ({ page }) => {
//       await page
//         .locator("")
//         .fill(testData.invalidUser.passwordLeadingSpace.username);
//       await page
//         .locator("#password")
//         .fill(testData.invalidUser.passwordLeadingSpace.password);
//       await page.locator("#submit").click();
//       const errorMessage = await page.locator("#error").textContent();
//       expect(errorMessage).toContain("Your password is invalid!");
//     });
// });
