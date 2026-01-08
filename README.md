# WebdriverIO E2E Test Suite for SauceDemo

This repository contains an automated End-to-End (E2E) test suite for the [SauceDemo](https://www.saucedemo.com/) e-commerce website. The tests are built using **WebdriverIO (v9)** and follow the **Page Object Model (POM)** design pattern with separated **Locators**.

## 🏗️ Project Structure

The project is organized to ensure modularity, readability, and scalability:

```
├── test
│   ├── locators       # Centralized file for all selectors (Locators)
│   ├── pageobjects    # Page Classes containing methods and logic (POM)
│   └── specs          # Test specifications (E2E scenarios)
├── scripts            # Utility scripts (e.g., custom report generation)
├── report             # Generated Allure reports (auto-created)
├── wdio.conf.js       # WebdriverIO configuration file
└── package.json       # Project dependencies and scripts
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

We have configured convenient npm scripts to run tests and generate reports effortlessly.

### 1. Run Tests & Generate Report (Recommended)
This command runs the specific test suite and automatically generates and opens a single-file html report.

```bash
npm run run-all
```

### 2. Run Tests Only
If you only want to execute the tests without generating a report immediately:

 
npm run wdio
```

### 3. Generate Report Manually
If you have run tests previously and want to generate a report from the existing `allure-results`:

npm run report
```

*Note: The report will be generated in the `report/` directory with a timestamp (e.g., `Report_2024-01-08_12-00-00.html`) and opened automatically.*

## 🧪 Test Scenarios

The suite currently covers the following critical business flow:

1.  **Login**: Authenticate with valid `standard_user` credentials.
2.  **Add to Cart**: 
    - Verify inventory items.
    - Shuffle items and select 3 random products.
    - Add selected products to the cart.
3.  **Cart & Checkout**:
    - Navigate to the shopping cart.
    - Proceed to checkout.
    - Enter shipping information.
    - Complete the order.
4.  **Verification**: Assert that the "Thank you for your order!" message is displayed.

## 📊 Reporting

The framework uses **Allure Reporter** for detailed execution logs.

- **Steps**: Every logical action (e.g., "Click Login", "Enter Details") is logged as a distinct step in the report.
- **Single File**: The final report is bundled into a standalone HTML file for easy sharing.
- **History**: Reports are saved in timestamped folders inside the `report/` directory so you don't lose history.

## 🛠️ Tech Stack & Dependencies

*   **[WebdriverIO](https://webdriver.io/)**: Next-gen browser and mobile automation test framework for Node.js.
*   **[Mocha](https://mochajs.org/)**: Feature-rich JavaScript test framework.
*   **[Allure Report](https://allurereport.org/)**: Flexible lightweight multi-language test report tool.
*   **[npm-run-all](https://www.npmjs.com/package/npm-run-all)**: A CLI tool to run multiple npm-scripts in parallel or sequentially.

## 📝 Customization

### Locators
All selectors are stored in `test/locators`. If the UI changes, update the selectors in the corresponding locator file (e.g., `login.locators.js`) without touching the test logic or page objects.

### Page Objects
Logic for interacting with pages is in `test/pageobjects`. Methods like `login()`, `addRandomItemsToCart()` are defined here.


