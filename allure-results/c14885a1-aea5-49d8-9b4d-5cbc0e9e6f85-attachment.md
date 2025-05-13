# Test info

- Name: Auto-waiting tests >> Alternative waits
- Location: C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\autoWaiting.spec.js:24:9

# Error details

```
Error: page.waitForSelector: Unexpected token "/" while parsing css selector "http://uitestingplayground.com/ajaxdata". Did you mean to CSS.escape it?
Call log:
  - waiting for http://uitestingplayground.com/ajaxdata to be visible

    at C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\autoWaiting.spec.js:32:20
```

# Page snapshot

```yaml
- navigation:
  - link "UITAP":
    - /url: /
  - list:
    - listitem:
      - link "Home":
        - /url: /home
    - listitem:
      - link "Resources":
        - /url: /resources
- heading "AJAX Data" [level=3]
- paragraph: An element may appaear on a page after processing of an AJAX request to a web server. A test should be able to wait for an element to show up.
- heading "Scenario" [level=4]
- list:
  - listitem: Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.
  - listitem: Then execute your test to make sure it waits for label text to appear.
- heading "Playground" [level=4]
- button "Button Triggering AJAX Request"
- paragraph: Data loaded with AJAX get request.
- contentinfo:
  - link "Fork the website on GitHub":
    - /url: https://github.com/inflectra/ui-test-automation-playground
  - text: . Supported by
  - link "Rapise":
    - /url: https://www.inflectra.com/Rapise/
  - text: test automation team. Copyright © 2020
  - link "Inflectra Corporation":
    - /url: https://www.inflectra.com/
  - text: . This work is licensed under the
  - link "Apache License 2.0":
    - /url: https://www.apache.org/licenses/LICENSE-2.0
  - text: .
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test.beforeEach(async({page}, testInfo) => {
   4 |     await page.goto('http://uitestingplayground.com/ajax', { waitUntil: 'domcontentloaded' })
   5 |     await page.getByText('Button Triggering AJAX Request').click()
   6 |
   7 |     // Increases the default timeout limit of all tests within the test suite by 2 seconds
   8 |     // testInfo.setTimeout(testInfo.timeout + 2000)
   9 | })
  10 |
  11 | test.describe('Auto-waiting tests', () => {
  12 |     test('Auto waiting', async({page}) => {
  13 |         const successElement = page.locator('.bg-success')
  14 |
  15 |         // This wi
  16 |         await successElement.waitFor({state: "attached"})
  17 |         const successText = await successElement.textContent()
  18 |         const successAllText = await successElement.allTextContents()
  19 |
  20 |         expect(successText).toEqual('Data loaded with AJAX get request.')
  21 |         expect(successAllText).toContain('Data loaded with AJAX get request.')
  22 |     })
  23 |
  24 |     test('Alternative waits', async({page}) => {
  25 |         const successElement = page.locator('.bg-success')
  26 |
  27 |         // ___ wait for element
  28 |         await page.waitForSelector('.bg-success')
  29 |
  30 |         // ___ wait for particular response
  31 |         // Most likely for API response waiting
> 32 |         await page.waitForSelector('http://uitestingplayground.com/ajaxdata')
     |                    ^ Error: page.waitForSelector: Unexpected token "/" while parsing css selector "http://uitestingplayground.com/ajaxdata". Did you mean to CSS.escape it?
  33 |
  34 |         // ___ wait for network calls to be completed (NOT RECOMMENDED BY LECTURER)
  35 |         await page.waitForLoadState('networkidle')
  36 |
  37 |         const successText = await successElement.textContent()
  38 |         const successAllText = await successElement.allTextContents()
  39 |
  40 |         expect(successText).toEqual('Data loaded with AJAX get request.')
  41 |         expect(successAllText).toContain('Data loaded with AJAX get request.')
  42 |     })
  43 | })
  44 |
  45 | test('Timeouts', async({page}) => {
  46 |     // You can configure timeout times in the playwright.config.ts file.
  47 |
  48 |     // You can also set a timeout limit for this specific test (as in the 'Timeouts' test)
  49 |     // test.setTimeout(10000)
  50 |
  51 |     // Multiplies the default timeout by 3 times. To allow extra time for your tests to finish
  52 |     // test.slow()
  53 |
  54 |     // There's also a way to modify the timeout limit for all tests within a test suite by modifying it on the beforeEach.
  55 |     // You also have to pass in another variable in the async parameter of the beforeEach.
  56 |     // Note: It's next to the {page} variable but without the {} brackets. For example ..async({page}, testInfo)
  57 |
  58 |     const successElement = page.locator('.bg-success')
  59 |
  60 |     // You can also assign a timeout for specific functions
  61 |     await successElement.click({timeout: 16000})
  62 | })
  63 |
  64 | test('generated test', async ({ page }) => {
  65 |   await page.goto('http://localhost:4200/pages/iot-dashboard');
  66 |   
  67 |   await page.getByRole('link', { name: 'Forms' }).click();
  68 |   await page.getByRole('link', { name: 'Form Layouts' }).click();
  69 |   await page.getByRole('textbox', { name: 'Jane Doe' }).click();
  70 |   await page.getByRole('textbox', { name: 'Jane Doe' }).fill('Shmuck');
  71 |   await page.getByRole('textbox', { name: 'Jane Doe' }).press('Tab');
  72 |   await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill('cum@lord.com');
  73 |   await page.locator('form').filter({ hasText: 'Remember meSubmit' }).locator('span').first().click();
  74 |   await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
  75 | });
```