import { faker } from '@faker-js/faker'
import {expect} from '@playwright/test'
import {test} from '../test-options'

test('Parameterized methods', async({pageManager}) => {
    const randomFullname = faker.person.fullName()
    const randomPassword = faker.animal.cat()
    const randomEmail = `${randomFullname.replace(" ", '').toLowerCase()}${faker.number.int(100)}@testemail.com`

    await pageManager.navigateTo().toFormLayoutsPage()

    await pageManager.formLayouts().gridFormSubmitWithCredsAndSelectOption(randomEmail, randomPassword, 'Option 1')
    await pageManager.formLayouts().inLineFormSubmitWithNameEmailAndCheckbox(randomFullname, randomEmail, true)
})