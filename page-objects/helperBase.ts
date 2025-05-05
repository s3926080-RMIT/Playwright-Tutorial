import { Locator, Page } from "@playwright/test"


// This entire class exists to declare universal functions that can be used by any page objects.
export class HelperBase {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    
    // For example, this function is just to create a delay in case you need a delay between actions during testing.
    async waitforXSeconds(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
}