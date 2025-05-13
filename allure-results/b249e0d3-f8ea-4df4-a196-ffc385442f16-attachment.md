# Test info

- Name: suite1 >> Parent element locator
- Location: C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testSuite.spec.js:75:9

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('nb-card').filter({ has: locator('nb-checkboxes') })

    at C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testSuite.spec.js:77:84
```

# Page snapshot

```yaml
- navigation:
  - link:
    - /url: "#"
    - img
  - link "PW-test":
    - /url: "#"
  - button "Light"
  - button:
    - img
  - link:
    - /url: "#"
    - img
  - link:
    - /url: "#"
    - img
  - text: Nick Jones
- list:
  - listitem:
    - link "IoT Dashboard":
      - /url: /pages/iot-dashboard
      - img
      - text: IoT Dashboard
  - listitem: FEATURES
  - listitem:
    - link "Forms" [expanded]:
      - /url: "#"
      - img
      - text: Forms
      - img
    - list:
      - listitem:
        - link "Form Layouts":
          - /url: /pages/forms/layouts
      - listitem:
        - link "Datepicker":
          - /url: /pages/forms/datepicker
  - listitem:
    - link "Modal & Overlays":
      - /url: "#"
      - img
      - text: Modal & Overlays
      - img
    - list:
      - listitem:
        - link "Dialog":
          - /url: /pages/modal-overlays/dialog
      - listitem:
        - link "Window":
          - /url: /pages/modal-overlays/window
      - listitem:
        - link "Popover":
          - /url: /pages/modal-overlays/popover
      - listitem:
        - link "Toastr":
          - /url: /pages/modal-overlays/toastr
      - listitem:
        - link "Tooltip":
          - /url: /pages/modal-overlays/tooltip
  - listitem:
    - link "Extra Components":
      - /url: "#"
      - img
      - text: Extra Components
      - img
    - list:
      - listitem:
        - link "Calendar":
          - /url: /pages/extra-components/calendar
  - listitem:
    - link "Charts":
      - /url: "#"
      - img
      - text: Charts
      - img
    - list:
      - listitem:
        - link "Echarts":
          - /url: /pages/charts/echarts
  - listitem:
    - link "Tables & Data":
      - /url: "#"
      - img
      - text: Tables & Data
      - img
    - list:
      - listitem:
        - link "Smart Table":
          - /url: /pages/tables/smart-table
      - listitem:
        - link "Tree Grid":
          - /url: /pages/tables/tree-grid
  - listitem:
    - link "Auth":
      - /url: "#"
      - img
      - text: Auth
      - img
    - list:
      - listitem:
        - link "Login":
          - /url: /auth/login
      - listitem:
        - link "Register":
          - /url: /auth/register
      - listitem:
        - link "Request Password":
          - /url: /auth/request-password
      - listitem:
        - link "Reset Password":
          - /url: /auth/reset-password
- text: Inline form
- textbox "Jane Doe"
- textbox "Email"
- checkbox "Remember me"
- text: Remember me
- button "Submit"
- text: Using the Grid Email
- textbox "Email"
- text: Password
- textbox "Password"
- text: Radios
- radio "Option 1"
- text: Option 1
- radio "Option 2"
- text: Option 2
- radio "Disabled Option" [checked] [disabled]
- text: Disabled Option
- button "Sign in"
- text: Form without labels
- textbox "Recipients"
- textbox "Subject"
- textbox "Message"
- button "Send"
- text: Basic form Email address
- textbox "Email address"
- text: Password
- textbox "Password"
- checkbox "Check me out"
- text: Check me out
- button "Submit"
- text: Block form First Name
- textbox "First Name"
- text: Last Name
- textbox "Last Name"
- text: Email
- textbox "Email"
- text: Website
- textbox "Website"
- button "Submit"
- text: Horizontal form Email
- textbox "Email"
- text: Password
- textbox "Password"
- checkbox "Remember me"
- text: Remember me
- button "Sign in"
- navigation:
  - text: Created with ♥ by
  - link "Akveo":
    - /url: https://akveo.page.link/8V2f
  - text: "2019"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test.beforeEach(async({page}) => {
   4 |     await page.goto('http://localhost:4200/', { waitUntil: 'domcontentloaded' })
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
>  77 |         await page.locator('nb-card').filter({has: page.locator('nb-checkboxes')}).click()
      |                                                                                    ^ Error: locator.click: Test timeout of 60000ms exceeded.
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
  105 |                     .filter({hasText: "Sign in"})
  106 |                     .getByRole('textbox', {name: "Email"})
  107 |                     .click()
  108 |
  109 |         await page  .locator(':text-is("Using the Grid")')
  110 |                     .locator('..')
  111 |                     .getByRole('textbox', {name: "Email"})
  112 |                     .click()
  113 |     })
  114 |
  115 |     test('Reusing locators', async({page}) => {
  116 |         const basicForm = page  .locator('nb-card')
  117 |                                 .filter({hasText: "Basic form"})
  118 |
  119 |         const emailField = basicForm.getByRole('textbox', {name: "Email"})
  120 |
  121 |         await emailField.fill('test@test.com')
  122 |                     
  123 |         await basicForm .getByRole('textbox', {name: "Password"})
  124 |                         .fill('Welcome123')
  125 |         
  126 |         await basicForm .locator('nb-checkbox')
  127 |                         .click()
  128 |
  129 |         await basicForm .getByRole('button')
  130 |                         .click()
  131 |         
  132 |         await expect(emailField).toHaveValue('test@test.com')
  133 |     })
  134 |
  135 |     test('Extracting values', async({page}) => {
  136 |         const basicForm = page  .locator('nb-card')
  137 |                                 .filter({hasText: "Basic form"})
  138 |
  139 |         // Fetches the text on the button found in basicForm, assigning that string to variable buttonText
  140 |         const buttonText = await basicForm.getByRole('button').textContent()
  141 |         expect(buttonText).toEqual('Submit')
  142 |
  143 |         // Returns all text contents found within a container then add each of them into an array
  144 |         const allRadioLabels = await page.locator('nb-radio').allTextContents()
  145 |         console.log(allRadioLabels)
  146 |         expect(allRadioLabels).toContain("Option 1")
  147 |
  148 |         const emailField = basicForm.getByRole('textbox', {name: "Email"})
  149 |         await emailField.fill("test@test.com") // Inputs text into the field
  150 |         const emailFieldInput = await emailField.inputValue() // Fetches the text that had been inputted into the field
  151 |         expect(emailFieldInput).toEqual("test@test.com")
  152 |
  153 |         const placeholderEmail = await emailField.getAttribute('placeholder')
  154 |         console.log(
  155 |             "Email field's class and id respectively: ",
  156 |             "Class: ", await emailField.getAttribute('class'),
  157 |             "Id: ", await emailField.getAttribute('id'),
  158 |         )
  159 |         expect(placeholderEmail).toEqual('Email')
  160 |     })
  161 |     
  162 |     test('Assertions', async({page}) => {
  163 |         const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')
  164 |         
  165 |         const value = 5
  166 |         expect(value).toEqual(5)
  167 |
  168 |         const basicFormButtonLabel = await basicFormButton.textContent()
  169 |         expect(basicFormButtonLabel).toEqual("Submit")
  170 |
  171 |         // Locator assertion
  172 |         // So you know how locators point to elements based on given parameters like 'button' and stuff?
  173 |         // Yeah you can also assert it like this. 
  174 |         // Pretty much pointing at something and then asking "Hey does this thing say X?"
  175 |         await expect(basicFormButton).toHaveText('Submit')
  176 |
  177 |         
```