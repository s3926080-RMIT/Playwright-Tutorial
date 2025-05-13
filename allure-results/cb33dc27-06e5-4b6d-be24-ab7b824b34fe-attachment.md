# Test info

- Name: Parameterized methods
- Location: C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\tests\testWithFixtures.spec.ts:5:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:4200/", waiting until "load"

    at Object.exports.test._test.test.extend.formLayoutsPage.auto (C:\Users\acer\Desktop\Coding Stuff\Playwright Tutorial\pw-practice-app\test-options.ts:14:20)
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
    - link "Forms":
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
- text:  Light ON  Roller Shades ON  Wireless Audio ON  Coffee Maker ON
- list:
  - listitem:
    - link "Temperature":
      - /url: ""
  - listitem:
    - link "Humidity":
      - /url: ""
- img
- text: ° 24 Celsius
- button:
  - img
- radio "" [checked]
- text: 
- radio ""
- text: 
- radio ""
- text: 
- radio ""
- text:  Consumed 816 kWh Spent 291 USD
- button "week"
- text: Room Management
- img: Kitchen Bedroom Hallway Living Room
- text: My Playlist
- heading "Harder" [level=4]
- text: Daft Punk
- slider: "0"
- text: 00:00 - 00:30
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- slider: "100"
- button:
  - img
- list:
  - listitem:
    - link "Contacts":
      - /url: ""
  - listitem:
    - link "Recent":
      - /url: ""
- list:
  - listitem:
    - text: Nick Jones mobile
    - img
  - listitem:
    - text: Eva Moor home
    - img
  - listitem:
    - text: Jack Williams mobile
    - img
  - listitem:
    - text: Lee Wong mobile
    - img
  - listitem:
    - text: Alan Thompson home
    - img
  - listitem:
    - text: Kate Martinez work
    - img
- text: "Solar Energy Consumption 6.421 kWh out of 8.421 kWh UI Kitten UI Kitten is a framework that contains a set of commonly used UI components styled in a similar way. The most awesome thing: you can change themes on the fly by just passing a different set of variables. 100% native. Give our kitten a try!"
- link:
  - /url: https://akveo.github.io/react-native-ui-kitten?utm_campaign=ui_kitten%20-%20home%20-%20ngx_admin%20code%20embed&utm_source=ngx_admin&utm_medium=embedded&utm_content=iot_dashboard_kitten_card
  - img
- link "":
  - /url: https://itunes.apple.com/us/app/kitten-tricks/id1246143230
- link "":
  - /url: https://play.google.com/store/apps/details?id=com.akveo.kittenTricks
- link:
  - /url: https://github.com/akveo/react-native-ui-kitten
  - img
- text: Traffic Consumption
- button "month"
- text: New York Mon 29 May 20°
- img
- text: max 23° min 19° wind 4 km/h hum 87% Sun  17° Mon  19° Tue  22° Wed  21° Security Cameras
- button ""
- button:
  - img
- text: "Camera #1 Camera #2 Camera #3 Camera #4"
- img
- text: Pause
- img
- text: Logs
- img
- text: Search
- img
- text: Setup
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
   1 | import {test as base} from '@playwright/test'
   2 | import { PageManager } from './page-objects/pageManager'
   3 |
   4 | export type TestOptions = {
   5 |     globalsQaURL: string
   6 |     formLayoutsPage: string
   7 |     pageManager: PageManager
   8 | }
   9 |
  10 | export const test = base.extend<TestOptions> ({
  11 |     globalsQaURL: ['', {option: true}],
  12 |
  13 |     formLayoutsPage: [async({page}, use) => {
> 14 |         await page.goto('http://localhost:4200/')
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  15 |         await page.getByText('Forms').click()
  16 |         await page.getByText('Form layouts').click()
  17 |         await use('')
  18 |     }, {auto: true}],
  19 |
  20 |     pageManager: async({page}, use) => {
  21 |         const pm = new PageManager(page)
  22 |         await use(pm)
  23 |     }
  24 | })
```