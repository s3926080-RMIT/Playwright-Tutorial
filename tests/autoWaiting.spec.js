import {test, expect} from '@playwright/test'

test.beforeEach(async({page}, testInfo) => {
    await page.goto('http://uitestingplayground.com/ajax', { waitUntil: 'domcontentloaded' })
    await page.getByText('Button Triggering AJAX Request').click()

    // Increases the default timeout limit of all tests within the test suite by 2 seconds
    // testInfo.setTimeout(testInfo.timeout + 2000)
})

test.describe('Auto-waiting tests', () => {
    test('Auto waiting', async({page}) => {
        const successElement = page.locator('.bg-success')

        // This wi
        await successElement.waitFor({state: "attached"})
        const successText = await successElement.textContent()
        const successAllText = await successElement.allTextContents()

        expect(successText).toEqual('Data loaded with AJAX get request.')
        expect(successAllText).toContain('Data loaded with AJAX get request.')
    })

    test('Alternative waits', async({page}) => {
        const successElement = page.locator('.bg-success')

        // ___ wait for element
        await page.waitForSelector('.bg-success')

        // ___ wait for particular response
        // Most likely for API response waiting
        await page.waitForSelector('http://uitestingplayground.com/ajaxdata')

        // ___ wait for network calls to be completed (NOT RECOMMENDED BY LECTURER)
        await page.waitForLoadState('networkidle')

        const successText = await successElement.textContent()
        const successAllText = await successElement.allTextContents()

        expect(successText).toEqual('Data loaded with AJAX get request.')
        expect(successAllText).toContain('Data loaded with AJAX get request.')
    })
})

test('Timeouts', async({page}) => {
    // You can configure timeout times in the playwright.config.ts file.

    // You can also set a timeout limit for this specific test (as in the 'Timeouts' test)
    // test.setTimeout(10000)

    // Multiplies the default timeout by 3 times. To allow extra time for your tests to finish
    // test.slow()

    // There's also a way to modify the timeout limit for all tests within a test suite by modifying it on the beforeEach.
    // You also have to pass in another variable in the async parameter of the beforeEach.
    // Note: It's next to the {page} variable but without the {} brackets. For example ..async({page}, testInfo)

    const successElement = page.locator('.bg-success')

    // You can also assign a timeout for specific functions
    await successElement.click({timeout: 16000})
})