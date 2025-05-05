import {test, expect} from '@playwright/test'


// Declare for this specific test file, use one of the following modes.
// test.describe.configure({mode: 'parallel'})
// test.describe.configure({mode: 'serial'})

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
})

test.describe('Form layouts page', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form layouts').click()
    })

    test('Input fields', async({page}) => {
        const usingTheGridEmailInput = page .locator('nb-card', {hasText: "Using the Grid"})
                                            .getByRole('textbox', {name: "Email"})
    
        await usingTheGridEmailInput.fill('test@test.com')
        // await usingTheGridEmailInput.pressSequentially('test@test.com', {delay: 500}) // Delay is the delay between each keystroke
        
        // await usingTheGridEmailInput.clear() // Clears input field

        await expect(usingTheGridEmailInput).toHaveValue('test@test.com')
    })

    test('Radio buttons', async({page}) => {
        const gridFormLocator = page .locator('nb-card', {hasText: "Using the Grid"})
        const optionCheckbox1 = gridFormLocator.getByRole('radio', {name: "Option 1"})
        const optionCheckbox2 = gridFormLocator.getByRole('radio', {name: "Option 2"})

        await optionCheckbox1.check({force: true})
        expect(await optionCheckbox1.isChecked()).toBeTruthy()

        await optionCheckbox2.check({force: true})
        expect(await optionCheckbox1.isChecked()).toBeFalsy()
        expect(await optionCheckbox2.isChecked()).toBeTruthy()
    })
})

test('Checkboxes', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()


    // Click: Just click, doesn't care whether the checkbox has been checked or not
    // Check: Only checks the checkbox. Meaning if the checkbox is already checked, check() will have no effect on the checkbox
    // Uncheck: The same as check just for unchecking
    await page.getByRole('checkbox', {name: "Hide on click"}).click({force: true})
    // await page.getByRole('checkbox', {name: "Hide on click"}).check({force: true})
    // await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force: true})

    const allCheckboxes = page.getByRole('checkbox')
    // console.log(allCheckboxes)
    // console.log(await allCheckboxes.all())

    // allCheckboxes.all() is actually an array of locators pointing towards all checkboxes found
    for (const box of await allCheckboxes.all()) {
        await box.check({force: true})
        expect(await box.isChecked()).toBeTruthy()

        await box.uncheck({force: true})
        expect(await box.isChecked()).toBeFalsy()
    }
})

test('Lists and dropdowns', async({page}) => {
    const themeDropdownMenu = page.locator('ngx-header nb-select')
    await themeDropdownMenu.click()

    page.getByRole('list') // When the list has the "ul" tag
    page.getByRole('listitem') // When the list has "li" tag
    
    // const optionList = page .getByRole('list')
    //                         .locator('nb-option')

    const optionList = page.locator('nb-option-list nb-option')
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]) // Asserting available options

    await optionList.filter({hasText: "Cosmic"}).click() // Try clicking on one of the options
    const header = page.locator('nb-layout-header')
    // Asserting CSS. For this case, it's asserting the background color change, a result of a theme change to "Cosmic"
    await expect(header).toHaveCSS('background-color', "rgb(50, 50, 89)")

    // Colors dictionary
    const colors = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)",
    }

    // Since you need to have the dropdown menu to be, you know, dropped down? The test above clicked one of the option so
    // the dropdown menu is gone at this moment. Which is why we have to click it once before the loop starts.
    await themeDropdownMenu.click()
    // Foreach loop
    for (const color in colors) {
        await optionList.filter({hasText: color}).click()
        await expect(header).toHaveCSS('background-color', colors[color])
        // Extremely bad coding practice imo. Not scalable. Probably purely for demonstration purposes. 
        if (color != "Corporate") {
            await themeDropdownMenu.click()
        }
    }
})

test('Tooltips', async({page}) => {
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

    
    // await page.locator('nb-card-body button').getByText("Top").hover()
    

    const tooltipDisplayer = page.locator('nb-card', {hasText: "Tooltip Placements"})
    await tooltipDisplayer.getByRole('button', {name: "Top"}).hover()
    expect(await page.locator('nb-tooltip').textContent()).toEqual('This is a tooltip')

    // This is another method you locate the tooltip. However, it needs to be explicitly declared in the DOM
    // The website used for this tutorial uses a lot of custom roles from libraries so this isn't possible
    // page.getByRole('tooltip')
})

test('Dialogue boxes', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual("Are you sure you want to delete?")
        dialog.accept()
    })

    await page  .getByRole('table')
                .locator('tr', {hasText: "mdo@gmail.com"})
                .locator('.nb-trash')
                .click()
})

test('Web tables', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    // Target specific row
    const targetRow = page.getByRole('row', {name: "twitter@outlook.com"})
    await targetRow.locator('.nb-edit').click()

    // This is needed because after clicking on the edit button, we're not actually editing the values in the same DOM element
    // We actually get redirected to a different DOM element in which we have to track down again and then actually clear the
    // field and type in our input.
    await page.locator('input-editor').getByPlaceholder('Age').clear()
    await page.locator('input-editor').getByPlaceholder('Age').fill("35")

    await page.locator('.nb-checkmark').click()

    // Target a row based on a specific column value
    // page.locator('.ng2-smart-pagination-nav').getByRole('list')

    page.locator('.ng2-smart-pagination-nav').getByText('2').click()
    const targetRowById = page  .getByRole('row')
    // Imagine this portion as grabbing a bunch of chopsticks. Then locating the tail-ends of each chopstick and 
    // only selecting the one with a distinct detail. 
                                .filter({has: page  
                                                    .locator('td') // td = table down = column
                                                    .nth(1) // nth = 1 because nth = 0 is the actions column
                                                    .getByText('11')
                                                })
    await targetRowById.locator('.nb-edit').click()

    await page.locator('input-editor').getByPlaceholder('E-mail').clear()
    await page.locator('input-editor').getByPlaceholder('E-mail').fill("test@mail.com")

    await page.locator('.nb-checkmark').click()

    await expect(targetRowById.locator('td').nth(5)).toHaveText('test@mail.com')

    // Test web table's filter function
    const ages = ["20", "30", "40", "200"]

    for (let age of ages) {
        await page.locator('input-filter').getByPlaceholder('Age').clear()
        await page.locator('input-filter').getByPlaceholder('Age').fill(age)

        // This is because after inputting into the search field, the table takes a teenie bit of time to find and update
        // according to the search term. As the lecturer said, because it is akin to an animation, there was no way to
        // make the wait time dynamic. This might be different for our project but for this one, this was the only workaround.
        await page.waitForTimeout(500)

        const ageRows = page.locator('tbody tr')
        for (let row of await ageRows.all()) {
            const cellValue = await row.locator('td').last().textContent()
            if (age == 200) {
                expect(cellValue).toContain(' No data found ')
            } else {
                expect(cellValue).toEqual(age)
            }
            
        }
    }
})

test('Date picker', async({page}) => {
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
    const selectedMonth = page.locator('[class="day-cell ng-star-inserted"]')

    const datePicker = page.getByPlaceholder('Form Picker')

    await datePicker.click()
    await selectedMonth.getByText('14', {exact: true}).click()
    await expect(datePicker).toHaveValue('May 14, 2025')

    let date = new Date()
    date.setDate(date.getDate() + 40)
    const expectedDate = date.getDate().toString()
    const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
    const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'})
    const expectedYear = date.getFullYear()
    const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

    await datePicker.click() // This is purely to open up the GUI of the date picker
    let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
    
    while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
        calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent()
    }

    await selectedMonth.getByText(expectedDate, {exact: true}).click()
    await expect(datePicker).toHaveValue(dateToAssert)
})

test('Sliders', async({page}) => {
    // Set different coordinates for the gauge
    // const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    // await tempGauge.evaluate( node => {
    //     node.setAttribute('cx', '231.02859483355755')
    //     node.setAttribute('cy', '47.60388519226501')
    // })

    // await tempGauge.click()
    const temperatureBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    await temperatureBox.scrollIntoViewIfNeeded()

    const box = await temperatureBox.boundingBox()
    const x = box.x + box.width / 2
    const y = box.y + box.height / 2
    await page.mouse.move(x, y)
    await page.mouse.down()
    await page.mouse.move(x + 100, y)
    await page.mouse.move(x + 100, y + 100)
    await page.mouse.up()

})

