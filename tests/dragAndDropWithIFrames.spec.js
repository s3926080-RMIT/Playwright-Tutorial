import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://www.globalsqa.com/demo-site/draganddrop/', { waitUntil: 'domcontentloaded' })
})

test('Drag and drop with iFrames', async({page}) => {
    // According to the lecturer, an iFrame is effectively a website within a website. When locating elements that is
    // stored within an iframe, you'll neeed this frameLocator function.
    const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')
    const trash = frame.locator('#trash')
    await frame.locator('li', {hasText: "High Tatras 2"}).dragTo(trash)

    // More precise control over the cursor
    await frame.locator('li', {hasText: "High Tatras 4"}).hover()
    await page.mouse.down()
    await trash.hover()
    await page.mouse.up()

    await expect(trash.locator('li h5')).toHaveText(["High Tatras 2", "High Tatras 4"])

})