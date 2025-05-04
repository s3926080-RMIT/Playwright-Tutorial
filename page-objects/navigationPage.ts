import { Locator, Page } from "@playwright/test"
import { group } from "console"

export class NavigationPage {

    readonly page: Page
    
    constructor(page: Page) {
        this.page = page
    }

    // Before, throughout the tutorial, to navigate to a specific webpage, we would use click(). We still do. However,
    // problem arises when trying to go from a 1 subpage to another subpage within a collapsible page directory. For example,

    // Going from subpage1 to subpage2 within 'Forms'. When we went to subpage1, we expanded the 'Forms' group menu. When we
    // want to go to subpage2, we click on 'Forms' again which results in the menu collapsing and causing the traversal to fail.

    // To combat this, this function checks whether a group menu is collapsed or expanded before clicking. Ensuring safe,
    // predictable traversal.

    // The title of the navbar option we want to click on is passed into this function as a string
    // Honestly the way the lecturer named this function made it a little confusing which worried me at first. But everything
    // was super simple so I think I should be fine.
    private async selectGroupMenuItem(groupItemTitle: string) {
        
        // groupMenuItem is pretty much a locator. It's pointing towards the DOM element with a title matching
        // that of groupItemTitle
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        
        // Fetching the attribute value. For this website, the navbar's expanded and collapsed state is determined by an
        // attribute called "aria-expanded". So by fetching this status, Playwright can tell if the menu is expanded or collapsed
        
        // Also, getAttribute will store as string so even though the value is intended to be boolean, when stored into
        // expandedState, it's stored as a string.
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false") {
            await groupMenuItem.click()
        }
    }

    async toFormLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form layouts').click()
    }

    async toDatePickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async toSmartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async toToastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async toTooltipsPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }
}