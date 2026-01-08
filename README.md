# WebdriverIO E2E Test Suite for SauceDemo

This repository contains an automated End-to-End (E2E) test suite for the [SauceDemo](https://www.saucedemo.com/) e-commerce website. The tests are built using **WebdriverIO (v9)** and follow the **Page Object Model (POM)** design pattern with separated **Locators**.

## 🏗️ Project Structure

The project is organized to ensure modularity, readability, and scalability:

```
├── locators       # Centralized file for all selectors (Locators)
├── pageobjects    # Page Classes containing methods and logic (POM)
├── test           # Test specifications (E2E scenarios)
├── scripts        # Utility scripts (e.g., custom report generation)
├── report         # Generated Allure reports (auto-created)
├── wdio.conf.js   # WebdriverIO configuration file
└── package.json   # Project dependencies and scripts
```

## 🚀 Prerequisites

Before running the tests, ensure you have the following installed:

1.  **Node.js**: (v16 or higher recommended). Download from [nodejs.org](https://nodejs.org/).
2.  **npm**: Comes bundled with Node.js.
3.  **Java Development Kit (JDK)**: Required for Allure Report generation. Ensure `java -version` works in your terminal.
4.  **Google Chrome**: The tests are configured to run on Chrome by default.

## 📥 Installation

1.  Clone the repository or download the project files.
2.  Open your terminal in the project root directory.
3.  Install the dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Tests

We have configured convenient npm scripts to run tests by tags and generate reports effortlessly.

### 1. Run Full Suite (Clean -> Run All -> Report)
This is the recommended command for a full regression run. It clears old results, runs all tests, and opens the Allure report.
```bash
npm run run-all
```

### 2. Run by Tags
You can execute specific sets of tests using tags.
- **Smoke Tests** (2 critical scenarios):
  ```bash
  npm run test:smoke
  ```
- **Regression Tests** (All scenarios):
  ```bash
  npm run test:regression
  ```

### 3. Utility Scripts
- **Run all tests (wdio only):** `npm run wdio`
- **Clean results:** `npm run clean` (Clear old `allure-results` to prevent duplicate reports)
- **Generate Report:** `npm run report` (Generate report from current `allure-results`)

## 🧪 Test Scenarios

The suite covers 7 comprehensive E2E files with the following scenarios:

1.  **Main Checkout Flow** (`checkout-flow.e2e.js`): 
    - Full end-to-end journey from login to "Thank you for your order" message.
2.  **Cart Persistence** (`cart-persistence.e2e.js`): 
    - Ensures items and badge count persist after logging out and logging back in.
3.  **Inventory UI Integrity** (`inventory-ui.e2e.js`): 
    - Validates that product names, images, prices, and "Add to Cart" buttons are visible for all items.
4.  **Product Sorting** (`inventory-sorting.e2e.js`): 
    - Verifies sorting functionality for Name (A-Z, Z-A) and Price (Low to High, High to Low).
5.  **Add/Remove Product Combinations** (`cart-add-remove.e2e.js`): 
    - Tests complex patterns of adding multiple items, removing specific ones, and adding again.
6.  **Logout From Everywhere** (`logout.e2e.js`): 
    - Tests logout consistency from Inventory, Shopping Cart, and Checkout pages.
7.  **Shopping Cart Total Validation** (`cart-total-validation.e2e.js`): 
    - Dynamically calculates `Item Total + Tax` to verify the `Total` displayed matches expected math.

## 🏷️ Test Tagging

Tests are categorized using Mocha tags in the `describe` blocks.

- **`@smoke`**: Reserved for high-priority tests that verify the core functionality (Main Checkout and UI Check).
- **`@regression`**: Applied to all tests in the repository to ensure a full system check.

## 📊 Reporting

The framework uses **Allure Reporter** with a custom script to bundle findings into a single, shareable HTML file.

- **Automated Steps**: Every logical action is logged.
- **Visuals**: Screenshots can be attached on failure (configurable in `wdio.conf.js`).
- **Clean Runs**: The `npm run run-all` command automatically clears `allure-results` before starting, ensuring your report only shows the latest run.

## 🛠️ Tech Stack & Dependencies

*   **[WebdriverIO](https://webdriver.io/)**: Next-gen browser automation.
*   **[Mocha](https://mochajs.org/)**: JavaScript test framework using `describe` / `it` blocks.
*   **[Allure Report](https://allurereport.org/)**: Advanced reporting tool.
*   **[npm-run-all](https://www.npmjs.com/package/npm-run-all)**: Sequentially executes clean, test, and report scripts.

## 📝 Customization

### Locators
All selectors are stored in the root-level `locators/` folder. If the UI changes, update the selectors in the corresponding locator file (e.g., `login.locators.js`) without touching the test logic or page objects.

### Page Objects
Logic for interacting with pages is in the root-level `pageobjects/` folder. Methods like `login()`, `addRandomItemsToCart()` are defined here and include built-in Allure steps for clear reporting.

### Tests
Test specifications are located in the `test/` folder. These files are kept minimal as the logic and steps are abstracted into Page Objects.


