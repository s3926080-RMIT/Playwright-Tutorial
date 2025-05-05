import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'


test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
})

test('Navigate to Form page', async({page}) => {
    const pageManager = new PageManager(page)

    // Legion just summoned his navigateTo personality and is navigating all over the palce
    await pageManager.navigateTo().toFormLayoutsPage()
    await pageManager.navigateTo().toSmartTablePage()
    await pageManager.navigateTo().toToastrPage()
    await pageManager.navigateTo().toTooltipsPage()
    await pageManager.navigateTo().toDatePickerPage()
})

test('Parameterized methods @cum', async({page}) => {
    const pageManager = new PageManager(page)
    const randomFullname = faker.person.fullName()
    const randomPassword = faker.animal.cat()
    const randomEmail = `${randomFullname.replace(" ", '').toLowerCase()}${faker.number.int(100)}@testemail.com`

    await pageManager.navigateTo().toFormLayoutsPage()

    // Same thing but now he's formLayouts
    await pageManager.formLayouts().gridFormSubmitWithCredsAndSelectOption(randomEmail, randomPassword, 'Option 1')
    
    // Screenshot entire page after running the code above
    // await page.screenshot({path: "screenshots/formLayoutsPage.png"}) 
    
    // Screenshot only the specified locator after running the code above
    // await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: "screenshots/inlineForm.png"})

    await pageManager.formLayouts().inLineFormSubmitWithNameEmailAndCheckbox(randomFullname, randomEmail, true)
})

test('Date picker @cum', async({page}) => {
    const pageManager = new PageManager(page)

    await pageManager.navigateTo().toDatePickerPage()

    // Same thing but now he's datePicker
    await pageManager.datePicker().commonDatePickerDateFromToday(40)
    await pageManager.datePicker().rangeDatePickerDateFromToday(40, 80)
})

