import {test as base} from '@playwright/test'
import { PageManager } from './page-objects/pageManager'

export type TestOptions = {
    globalsQaURL: string
    formLayoutsPage: string
    pageManager: PageManager
}

export const test = base.extend<TestOptions> ({
    globalsQaURL: ['', {option: true}],

    formLayoutsPage: [async({page}, use) => {
        await page.goto('http://localhost:4200/')
        await page.getByText('Forms').click()
        await page.getByText('Form layouts').click()
        await use('')
    }, {auto: true}],

    pageManager: async({page}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})