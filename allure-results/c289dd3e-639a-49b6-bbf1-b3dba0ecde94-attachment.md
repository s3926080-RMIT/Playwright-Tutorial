# Test info

- Name: suite1 >> User facing locators
- Location: C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testSuite.spec.js:34:9

# Error details

```
Error: page.goto: NS_ERROR_CONNECTION_REFUSED
Call log:
  - navigating to "http://localhost:4200/", waiting until "domcontentloaded"

    at C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testSuite.spec.js:4:16
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
   2 |
   3 | test.beforeEach(async({page}) => {
>  4 |     await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
     |                ^ Error: page.goto: NS_ERROR_CONNECTION_REFUSED
   5 |     await page.getByText('Forms').click()
   6 |     await page.getByText('Form layouts').click()
   7 | }) 
   8 |
   9 | test.describe('suite1', () =>{
   10 |     test('Locator syntax rules', async({page}) => {
   11 |         await page.locator('input').first().click()
   12 |
   13 |         // Find by ID
   14 |         // await 
   15 |         page.locator('#inputEmail1')
   16 |         // .click()
   17 |
   18 |         // Find by Class
   19 |         page.locator('.shape-rectangle')
   20 |
   21 |         // Find by Attribute
   22 |         page.locator('[placeholder="Email"]')
   23 |
   24 |         // Find by ID but through Attribute locator
   25 |         page.locator('[id="inputEmail1"]')
   26 |
   27 |         // Find by partial text match
   28 |         page.locator(':text("Using")')
   29 |
   30 |         // Find by exact text match
   31 |         page.locator(':text-is("Using the Grid")')
   32 |     })
   33 |
   34 |     test('User facing locators', async({page}) => {
   35 |         await page.getByRole('textbox', {name: "Email"}).first().click()
   36 |         await page.getByRole('button', {name: "Sign in"}).first().click()
   37 |
   38 |         await page.getByLabel('Email').first().click()
   39 |
   40 |         await page.getByPlaceholder('Email').first().click()
   41 |
   42 |         await page.getByText('Using the Grid').first().click()
   43 |
   44 |         await page.getByTitle('IoT Dashboard').click()
   45 |
   46 |
   47 |     })
   48 |
   49 |     test('Child element locator', async({page}) => {
   50 |         await page.locator('nb-card nb-radio :text-is("Option 1")').click()
   51 |         
   52 |         // Same thing as code right above. Just showing that chaining locators like this is possible.
   53 |             // Could be interesting in case we need something like this - sort of a cascading format so that we
   54 |             // can change the locator target on the fly. This might be best practice for scalability.
   55 |         await page  .locator('nb-card')
   56 |                     .locator('nb-radio')
   57 |                     .locator(':text-is("Option 1")')
   58 |                     
   59 |                     .click()
   60 |         
   61 |         await page  .locator('nb-card')
   62 |                     .getByRole('button', {name: "Sign in"})
   63 |
   64 |                     .first().click()
   65 |
   66 |         // Be careful with this one since if a new nb-card element is added/changed, the index might change and might
   67 |         // fuck up the entire code. 
   68 |         await page  .locator('nb-card')
   69 |                     .nth(3)
   70 |                     .getByRole('button')
   71 |
   72 |                     .click()
   73 |     })
   74 |
   75 |     test('Parent element locator', async({page}) => {
   76 |         console.log(await page.locator('nb-card').count())
   77 |         console.log(await page.locator('nb-card').filter({has: page.locator('nb-checkboxes')}).count())
   78 |         console.log(
   79 |             await page  .locator('nb-card')
   80 |                         .filter({has: page.locator('nb-checkbox')})
   81 |                         .filter({hasText: "Sign in"})
   82 |                         .count()
   83 |                     )
   84 |
   85 |         await page  .locator('nb-card', {hasText: "Using the Grid"})
   86 |                     .getByRole('textbox', {name: "Email"})
   87 |                     .click()
   88 |
   89 |         await page  .locator('nb-card', {has: page.locator('#inputEmail1')})
   90 |                     .getByRole('textbox', {name: "Email"})
   91 |                     .click()
   92 |                     
   93 |         await page  .locator('nb-card')
   94 |                     .filter({hasText: "Using the Grid"})
   95 |                     .getByRole('textbox', {name: "Email"})
   96 |                     .click()
   97 |         
   98 |         await page  .locator('nb-card')
   99 |                     .filter({has: page.locator('.status-danger')})
  100 |                     .getByRole('textbox', {name: "Password"})
  101 |                     .click()
  102 |         
  103 |         await page  .locator('nb-card')
  104 |                     .filter({has: page.locator('nb-checkbox')})
```