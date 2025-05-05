import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class FormLayoutsPage extends HelperBase{
    constructor(page: Page) {
        super(page)
    }

    async gridFormSubmitWithCredsAndSelectOption(email: string, password: string, optionText: string) {
        const gridFormLocator = this.page.locator('nb-card', {hasText: "Using the Grid"})
        
        await gridFormLocator.getByRole('textbox', {name: "Email"}).fill(email)
        await gridFormLocator.getByRole('textbox', {name: "Password"}).fill(password)
        await gridFormLocator.getByRole('radio', {name: optionText}).check({force: true})
        await gridFormLocator.getByRole('button').click()
    }

    async inLineFormSubmitWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
        const inLineFormLocator = this.page.locator('nb-card', {hasText: "Inline form"})
        await inLineFormLocator.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await inLineFormLocator.getByRole('textbox', {name: "Email"}).fill(email)

        if (rememberMe) {
            await inLineFormLocator.getByRole('checkbox').check({force: true})
        }

        await inLineFormLocator.getByRole('button').click()
    }


}