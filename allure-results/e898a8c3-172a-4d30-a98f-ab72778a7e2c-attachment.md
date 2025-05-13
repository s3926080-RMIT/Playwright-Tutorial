# Test info

- Name: Date picker @hehe
- Location: C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\usePageObjects.spec.js:41:5

# Error details

```
Error: page.goto: NS_ERROR_CONNECTION_REFUSED
Call log:
  - navigating to "http://localhost:4200/", waiting until "domcontentloaded"

    at C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\usePageObjects.spec.js:7:16
```

# Page snapshot

```yaml
- heading [level=1]
- paragraph
- paragraph
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 | import { PageManager } from '../page-objects/pageManager'
   3 | import { faker } from '@faker-js/faker'
   4 |
   5 |
   6 | test.beforeEach(async({page}) => {
>  7 |     await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
     |                ^ Error: page.goto: NS_ERROR_CONNECTION_REFUSED
   8 | })
   9 |
  10 | test('Navigate to Form page', async({page}) => {
  11 |     const pageManager = new PageManager(page)
  12 |
  13 |     // Legion just summoned his navigateTo personality and is navigating all over the palce
  14 |     await pageManager.navigateTo().toFormLayoutsPage()
  15 |     await pageManager.navigateTo().toSmartTablePage()
  16 |     await pageManager.navigateTo().toToastrPage()
  17 |     await pageManager.navigateTo().toTooltipsPage()
  18 |     await pageManager.navigateTo().toDatePickerPage()
  19 | })
  20 |
  21 | test('Parameterized methods @hehe', async({page}) => {
  22 |     const pageManager = new PageManager(page)
  23 |     const randomFullname = faker.person.fullName()
  24 |     const randomPassword = faker.animal.cat()
  25 |     const randomEmail = `${randomFullname.replace(" ", '').toLowerCase()}${faker.number.int(100)}@testemail.com`
  26 |
  27 |     await pageManager.navigateTo().toFormLayoutsPage()
  28 |
  29 |     // Same thing but now he's formLayouts
  30 |     await pageManager.formLayouts().gridFormSubmitWithCredsAndSelectOption(randomEmail, randomPassword, 'Option 1')
  31 |     
  32 |     // Screenshot entire page after running the code above
  33 |     // await page.screenshot({path: "screenshots/formLayoutsPage.png"}) 
  34 |     
  35 |     // Screenshot only the specified locator after running the code above
  36 |     // await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: "screenshots/inlineForm.png"})
  37 |
  38 |     await pageManager.formLayouts().inLineFormSubmitWithNameEmailAndCheckbox(randomFullname, randomEmail, true)
  39 | })
  40 |
  41 | test('Date picker @hehe', async({page}) => {
  42 |     const pageManager = new PageManager(page)
  43 |
  44 |     await pageManager.navigateTo().toDatePickerPage()
  45 |
  46 |     // Same thing but now he's datePicker
  47 |     await pageManager.datePicker().commonDatePickerDateFromToday(40)
  48 |     await pageManager.datePicker().rangeDatePickerDateFromToday(40, 80)
  49 | })
  50 |
  51 |
```