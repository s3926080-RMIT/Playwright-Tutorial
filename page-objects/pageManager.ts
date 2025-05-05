import { Locator, Page } from "@playwright/test"
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { DatePickerPage } from '../page-objects/datePickerPage'

// Think of this guy as Legion from Marvel but able to control his powers. He can summon different personalities and then use
// abilities from their respective personalities
export class PageManager {
    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutsPage: FormLayoutsPage
    private readonly datePickerPage: DatePickerPage

    constructor(page: Page) {
        this.page = page

        this.navigationPage = new NavigationPage(this.page)
        this.formLayoutsPage = new FormLayoutsPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)
    }

    // Declaring Legion's personalities
    navigateTo() {
        return this.navigationPage
    }

    formLayouts() {
        return this.formLayoutsPage
    }

    datePicker() {
        return this.datePickerPage
    }
}
