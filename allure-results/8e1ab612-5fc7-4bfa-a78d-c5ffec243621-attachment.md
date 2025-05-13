# Test info

- Name: suite1 >> Assertions
- Location: C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testSuite.spec.js:162:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('nb-card').filter({ hasText: 'Basic form' }).locator('button')
Expected string: "Submit5"
Received string: "Submit"
Call log:
  - expect.soft.toHaveText with timeout 5000ms
  - waiting for locator('nb-card').filter({ hasText: 'Basic form' }).locator('button')
    9 × locator resolved to <button nbbutton="" tabindex="0" type="submit" status="danger" aria-disabled="false" _ngcontent-vie-c287="" ng-reflect-status="danger" class="appearance-filled size-medium shape-rectangle status-danger nb-transition">Submit</button>
      - unexpected value "Submit"

    at C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testSuite.spec.js:182:44
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
  178 |         // Soft assertion
  179 |         // So instead of calling and error and grinding the test script to a halt, this only calls the error but then
  180 |         // proceeds with the test. Similar to the locator assertion above, this code asserts the text on the basicFormButton,
  181 |         // but instead of calling error and then cancel the rest of the script, it only calls error then stick click the button.
> 182 |         await expect.soft(basicFormButton).toHaveText('Submit5')
      |                                            ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  183 |         await basicFormButton.click()
  184 |     })
  185 | })
```