import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
    await page.getByText('Forms').click()
    await page.getByText('Form layouts').click()
}) 
    


test.describe('suite1', () =>{
    test('Locator syntax rules', async({page}) => {
        await page.locator('input').first().click()

        // Find by ID
        page.locator('#inputEmail1')

        // Find by Class
        page.locator('.shape-rectangle')

        // Find by Attribute
        page.locator('[placeholder="Email"]')

        // Find by ID but through Attribute locator
        page.locator('[id="inputEmail1"]')

        // Find by partial text match
        page.locator(':text("Using")')

        // Find by exact text match
        page.locator(':text-is("Using the Grid")')
    })

    test('User facing locators', async({page}) => {
        await page.getByRole('textbox', {name: "Email"}).first().click()
        await page.getByRole('button', {name: "Sign in"}).first().click()

        await page.getByLabel('Email').first().click()

        await page.getByPlaceholder('Email').first().click()

        await page.getByText('Using the Grid').first().click()

        await page.getByTitle('IoT Dashboard').click()


    })

    test('Child element locator', async({page}) => {
        await page.locator('nb-card nb-radio :text-is("Option 1")').click()
        
        // Same thing as code right above. Just showing that chaining locators like this is possible.
            // Could be interesting in case we need something like this - sort of a cascading format so that we
            // can change the locator target on the fly. This might be best practice for scalability.
        await page  .locator('nb-card')
                    .locator('nb-radio')
                    .locator(':text-is("Option 1")')
                    
                    .click()
        
        await page  .locator('nb-card')
                    .getByRole('button', {name: "Sign in"})

                    .first().click()

        // Be careful with this one since if a new nb-card element is added/changed, the index might change and might
        // fuck up the entire code. 
        await page  .locator('nb-card')
                    .nth(3)
                    .getByRole('button')

                    .click()
    })

    test('Parent element locator', async({page}) => {
        console.log(await page.locator('nb-card').count())
        console.log(await page.locator('nb-card').filter({has: page.locator('nb-checkboxes')}).count())
        console.log(
            await page  .locator('nb-card')
                        .filter({has: page.locator('nb-checkbox')})
                        .filter({hasText: "Sign in"})
                        .count()
                    )

        await page  .locator('nb-card', {hasText: "Using the Grid"})
                    .getByRole('textbox', {name: "Email"})
                    .click()

        await page  .locator('nb-card', {has: page.locator('#inputEmail1')})
                    .getByRole('textbox', {name: "Email"})
                    .click()
                    
        await page  .locator('nb-card')
                    .filter({hasText: "Using the Grid"})
                    .getByRole('textbox', {name: "Email"})
                    .click()
        
        await page  .locator('nb-card')
                    .filter({has: page.locator('.status-danger')})
                    .getByRole('textbox', {name: "Password"})
                    .click()
        
        await page  .locator('nb-card')
                    .filter({has: page.locator('nb-checkbox')})
                    .filter({hasText: "Sign in"})
                    .getByRole('textbox', {name: "Email"})
                    .click()

        await page  .locator(':text-is("Using the Grid")')
                    .locator('..')
                    .getByRole('textbox', {name: "Email"})
                    .click()
    })

    test('Reusing locators', async({page}) => {
        const basicForm = page  .locator('nb-card')
                                .filter({hasText: "Basic form"})

        const emailField = basicForm.getByRole('textbox', {name: "Email"})

        await emailField.fill('test@test.com')
                    
        await basicForm .getByRole('textbox', {name: "Password"})
                        .fill('Welcome123')
        
        await basicForm .locator('nb-checkbox')
                        .click()

        await basicForm .getByRole('button')
                        .click()
        
        await expect(emailField).toHaveValue('test@test.com')
    })

    test('Extracting values', async({page}) => {
        const basicForm = page  .locator('nb-card')
                                .filter({hasText: "Basic form"})

        // Fetches the text on the button found in basicForm, assigning that string to variable buttonText
        const buttonText = await basicForm.getByRole('button').textContent()
        expect(buttonText).toEqual('Submit')

        // Returns all text contents found within a container then add each of them into an array
        const allRadioLabels = await page.locator('nb-radio').allTextContents()
        console.log(allRadioLabels)
        expect(allRadioLabels).toContain("Option 1")

        const emailField = basicForm.getByRole('textbox', {name: "Email"})
        await emailField.fill("test@test.com") // Inputs text into the field
        const emailFieldInput = await emailField.inputValue() // Fetches the text that had been inputted into the field
        expect(emailFieldInput).toEqual("test@test.com")

        const placeholderEmail = await emailField.getAttribute('placeholder')
        console.log(
            "Email field's class and id respectively: ",
            "Class: ", await emailField.getAttribute('class'),
            "Id: ", await emailField.getAttribute('id'),
        )
        expect(placeholderEmail).toEqual('Email')
    })
    
    test('Assertions', async({page}) => {
        const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')
        
        const value = 5
        expect(value).toEqual(5)

        const basicFormButtonLabel = await basicFormButton.textContent()
        expect(basicFormButtonLabel).toEqual("Submit")

        // Locator assertion
        // So you know how locators point to elements based on given parameters like 'button' and stuff?
        // Yeah you can also assert it like this. 
        // Pretty much pointing at something and then asking "Hey does this thing say X?"
        await expect(basicFormButton).toHaveText('Submit')

        
        // Soft assertion
        // So instead of calling and error and grinding the test script to a halt, this only calls the error but then
        // proceeds with the test. Similar to the locator assertion above, this code asserts the text on the basicFormButton,
        // but instead of calling error and then cancel the rest of the script, it only calls error then stick click the button.
        await expect.soft(basicFormButton).toHaveText('Submit5')
        await basicFormButton.click()
    })
})