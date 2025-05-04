import {test, expect} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
})

test('Navigate to Form page', async({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.toFormLayoutsPage()
    await navigateTo.toSmartTablePage()
    await navigateTo.toToastrPage()
    await navigateTo.toTooltipsPage()
    await navigateTo.toDatePickerPage()
})

